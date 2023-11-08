import { IProject, ITag } from "@/data/models/Proj";
import Image from "next/image";
import { FC, Fragment } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IMainProps {
  proj: IProject;
  readMe: string;
  releases: ITag[];
}
const Main: FC<IMainProps> = ({ proj, readMe, releases }) => {
  return (
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
                    {releases.length === 0 && <li>No releases yet</li>}

                    {releases.length > 0 &&
                      releases.map((release) => (
                        <li key={release.node_id}>
                          <a>{release.name}</a>
                          {Object.keys(release)
                            .filter((key) => key.includes("url"))
                            .map((key) => {
                              const url = release[key as keyof ITag].toString();

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
              <div className="widget-sidebar widget-tags">
                <h5 className="sidebar-title">Project Website</h5>
                <div className="sidebar-content">
                  <a href={proj?.url} target="_blank" rel="noopener noreferrer">
                    {proj?.url}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
