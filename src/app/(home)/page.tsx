import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { Project } from "@/data/models/Proj";
import projects from "@/data/projects.json";
import { generate_metadata } from "@/utils/generate_metadata";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = generate_metadata({
  title: "OWBIRD | Dev",
  desc: `
  I speak to computers.
  Sometimes they listen.
  Sometimes.
  `,
  image: "",
});

function App() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />

      {/* Favicons */}
      {/* =======================================================
  * Template Name: DevFolio
  * Updated: May 30 2023 with Bootstrap v5.3.0
  * Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
      {/* ======= Header ======= */}
      <NavBar />
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <Hero />
      {/* End Hero Section */}
      <main id="main">
        {/* ======= About Section ======= */}
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
                              <span>Full Stack Engineer</span>
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
                          <SkillImage
                            img={
                              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                            }
                            title="Python"
                          />
                          <SkillImage
                            img={
                              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                            }
                            title="Linux"
                          />
                          <SkillImage
                            img={
                              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
                            }
                            title="GO"
                          />
                          <SkillImage
                            img={
                              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                            }
                            title="TypeScript"
                          />
                          <SkillImage
                            img={
                              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
                            }
                            title="Bash"
                          />

                          <SkillImage
                            img={
                              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            }
                            title="JavaScript"
                          />

                          <SkillImage
                            img={
                              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
                            }
                            title="Dart"
                          />
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
        {/* End About Section */}
        {/* ======= Portfolio Section ======= */}
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
              {projects
                .filter((p) => p.isPersonal === true)
                .map((proj) => (
                  <ProjectCard key={proj.name} proj={proj} />
                ))}
              ..
            </div>
          </div>
        </section>
        {/* End Portfolio Section */}
        {/* ======= Commerical Section ======= */}
        {/* <section
          id="commercial_projects"
          className="portfolio-mf sect-pt4 route"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Commercial Projects</h3>
                  <p className="subtitle-a">
                    These are comercial projects on among the team
                  </p>
                  <div className="line-mf" />
                </div>
              </div>
            </div>
            <div className="row">
              {projects
                .filter((p) => p.isPersonal === false)
                .map((proj) => (
                  <ProjectCard key={proj.name} proj={proj} />
                ))}
              ..
            </div>
          </div>
        </section> */}
        {/* End Blog Section */}
        {/* ======= Contact Section ======= */}
        <section
          id="contact"
          className="paralax-mf footer-paralax bg-image sect-mt4 route"
          style={{ backgroundImage: "url(assets/img/overlay-bg.jpg)" }}
        >
          <div className="overlay-mf" />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="contact-mf">
                  {/* <div id="contact" className="box-shadow-full">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="title-box-2">
                          <h5 className="title-left">Send Message Us</h5>
                        </div>
                        <div>
                          <form
                            action="forms/contact.php"
                            method="post"
                            role="form"
                            className="php-email-form"
                          >
                            <div className="row">
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    rows={5}
                                    placeholder="Message"
                                    required
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 text-center my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">
                                  Your message has been sent. Thank you!
                                </div>
                              </div>
                              <div className="col-md-12 text-center">
                                <button
                                  type="submit"
                                  className="button button-a button-big button-rouded"
                                >
                                  Send Message
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="title-box-2 pt-4 pt-md-0">
                          <h5 className="title-left">Get in Touch</h5>
                        </div>
                        <div className="more-info">
                          <p className="lead">
                            Got something you want to talk about?
                          </p>
                          <ul className="list-ico">
                            <li>
                              <span className="bi bi-phone" /> 233 26 554 2141
                            </li>
                            <li>
                              <span className="bi bi-envelope" />
                              owbirdphorccuo@gmail.com
                            </li>
                          </ul>
                        </div>
                        <div className="socials">
                          <ul>
                            <li>
                              <a href="">
                                <span className="ico-circle">
                                  <i className="bi bi-instagram" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="ico-circle">
                                  <i className="bi bi-twitter" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="ico-circle">
                                  <i className="bi bi-linkedin" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
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
                  {/*
        All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=DevFolio
      */}
                  Designed by
                  <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End  Footer */}
      {/* <div id="preloader" /> */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* <!-- Vendor JS Files --> */}
    </>
  );
}

export default App;

const SkillImage = ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="grid-item">
      <img title={title} width={50} height={50} src={img} />
    </div>
  );
};

const ProjectCard = ({ proj }: { proj: Project }) => {
  return (
    <div className="col-md-4">
      <div className="card card-blog">
        <div className="card-img">
          <a href={`/project/${proj.id}`}>
            <Image
              width={200}
              height={100}
              src={proj.image}
              alt={proj.name}
              className="img-fluid card-img-top"
            />
          </a>
        </div>
        <div
          className="card-body"
          style={{ height: "200px", overflow: "hidden" }}
        >
          <h3 className="card-title">
            <a href={`/project/${proj.id}`}>{proj.name}</a>
          </h3>
          <p className="card-description">{proj.short_description}</p>
        </div>
      </div>
    </div>
  );
};
