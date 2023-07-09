import NavBar from "@/components/NavBar";
import projects from "@/data/projects.json";
import { generate_metadata } from "@/utils/generate_metadata";
import { Metadata } from "next";
import { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface Tag {
  name: string;
  zipball_url: string;
  tarball_url: string;
  commit: Commit;
  node_id: string;
}

export interface Commit {
  sha: string;
  url: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const proj = projects.find((p) => p.id === id);

  return generate_metadata({
    title: `OWBIRD | ${id}`,
    desc: proj?.short_description!,
    image: proj?.image!,
  });
}

const ProjectDetails = async ({ params }: PageProps) => {
  const id = params.id;

  const readme_res = await fetch(
    `https://raw.githubusercontent.com/Owbird/${id}/main/README.md`
  );

  const readMe = await readme_res.text();

  const releases_res = await fetch(
    `https://api.github.com/repos/Owbird/${id}/tags`,
    {
      cache: "no-cache",
    }
  );

  const releases = (await releases_res.json()) as Tag[];

  const proj = projects.find((p) => p.id === id);

  return (
    <>
      {/* ======= Header ======= */}
      <NavBar />

      {/* End Header */}
      <div
        className="hero hero-single route bg-image"
        style={{ backgroundImage: `url(${proj?.image})` }}
      >
        <div className="overlay-mf" />
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <h2 className="hero-title mb-4">{id}</h2>
            </div>
          </div>
        </div>
      </div>
      <main id="main">
        {/* ======= Blog Single Section ======= */}
        <section className="blog-wrapper sect-pt4" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="post-box">
                  <div className="post-thumb">
                    <img src={proj?.image} className="img-fluid" alt="" />
                  </div>
                  <br />

                  <div className="articlpe-content">
                    <ReactMarkdown
                      children={readMe}
                      remarkPlugins={[remarkGfm]}
                      skipHtml={false}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="widget-sidebar">
                  <h5 className="sidebar-title">Releases</h5>
                  <div className="sidebar-content">
                    <ul className="list-sidebar">
                      {releases.length === 0 && proj?.url && (
                        <li>
                          <a href={proj.url} target="_blank ">
                            {proj.url}
                          </a>
                        </li>
                      )}

                      {releases.map((release) => (
                        <li key={release.node_id}>
                          <a>{release.name}</a>
                          {Object.keys(release)
                            .filter((key) => key.includes("url"))
                            .map((key) => {
                              const url = release[key as keyof Tag].toString();

                              return (
                                <Fragment key={key}>
                                  <br />
                                  <a href={url}>
                                    {key.toUpperCase()}:&nbsp;&nbsp;{url}
                                  </a>
                                  <br />
                                </Fragment>
                              );
                            })}

                          <hr />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="widget-sidebar widget-tags">
                  <h5 className="sidebar-title">GitHub</h5>
                  <div className="sidebar-content">
                    <a
                      href={proj?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {proj?.github}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Blog Single Section */}
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">
                  © Copyright <strong>Owbird</strong>. All Rights Reserved
                </p>
                <div className="credits">
                  Designed by{" "}
                  <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End  Footer */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Vendor JS Files */}
      {/* Template Main JS File */}
    </>
  );
};

export default ProjectDetails;
