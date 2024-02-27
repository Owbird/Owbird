import projects from "@/data/projects.json";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Main = () => {
  return (
    <main id="main">
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <Image
                            height={500}
                            width={500}
                            src="https://avatars.githubusercontent.com/u/40531477?v=4"
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p>
                            <span className="title-s">Name: </span>
                            <span>Obed Forkuo</span>
                          </p>
                          <p>
                            <span className="title-s">Profile: </span>
                            <span>An Engineer</span>
                          </p>
                          <p>
                            <span className="title-s">Email: </span>
                            <a href="mailto://owbirdphorccuo@gmail.com">
                              owbirdphorccuo@gmail.com
                            </a>
                          </p>
                          <p>
                            <span className="title-s">Phone: </span>
                            <a href="tel://+233265542141">+233 26 554 2141</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <div className="grid-container">
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me</h5>
                      </div>
                      <p className="lead">I speak to computers.</p>
                      <p className="lead">Sometimes they listen.</p>
                      <p className="lead">Sometimes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="personal_projects" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Personal Projects</h3>
                <p className="subtitle-a">
                  These are personal projects that i kickstarted and maintain
                </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            {projects.map((proj) => (
              <ProjectCard key={proj.name} proj={proj} />
            ))}
            ..
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
