import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import projects from "@/data/projects.json";
import { generate_metadata } from "@/utils/generate_metadata";
import { Metadata } from "next";
import Image from "next/image";
import { FC, Fragment } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface ITag {
  name: string;
  zipball_url: string;
  tarball_url: string;
  commit: ICommit;
  node_id: string;
}

export interface ICommit {
  sha: string;
  url: string;
}

interface IPageProps {
  params: {
    id: string;
  };
}

interface IMetaProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return projects.map((proj) => {
    return { id: proj.id };
  });
}

export async function generateMetadata({
  params,
}: IMetaProps): Promise<Metadata> {
  const id = params.id;
  const proj = projects.find((p) => p.id === id);

  return generate_metadata({
    title: `OWBIRD | ${id}`,
    desc: proj?.short_description!,
    image: proj?.image!,
  });
}

const ProjectDetails: FC<IPageProps> = async ({ params }) => {
  const id = params.id;

  const readmeRes = await fetch(
    `https://raw.githubusercontent.com/Owbird/${id}/main/README.md`,
    {
      cache: "no-cache",
    },
  );

  const readMe = await readmeRes.text();

  const releasesRes = await fetch(
    `https://api.github.com/repos/Owbird/${id}/tags`,
    {
      cache: "no-cache",
    },
  );

  const releases = (await releasesRes.json()) as ITag[];

  const proj = projects.find((p) => p.id === id);

  return (
    <Fragment>
      <NavBar />

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
        <section className="blog-wrapper sect-pt4" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="post-box">
                  <div className="post-thumb">
                    <Image
                      width={800}
                      height={400}
                      src={proj?.image!}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <br />

                  <div className="articlpe-content">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml={false}>
                      {readMe}
                    </ReactMarkdown>
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

                      {releases.length > 0 &&
                        releases.map((release) => (
                          <li key={release.node_id}>
                            <a>{release.name}</a>
                            {Object.keys(release)
                              .filter((key) => key.includes("url"))
                              .map((key) => {
                                const url =
                                  release[key as keyof ITag].toString();

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
      </main>
      <Footer />
      <BackToTop />
    </Fragment>
  );
};

export default ProjectDetails;
