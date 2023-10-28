{
  /* =======================================================
  * Template Name: DevFolio
  * Updated: May 30 2023 with Bootstrap v5.3.0
  * Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */
}

import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Main from "@/components/main/Main";
import { generate_metadata } from "@/utils/generate_metadata";
import { Metadata } from "next";
import { Fragment } from "react";

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
    <Fragment>
      <NavBar />
      <Hero />
      <Main />
      <Footer />
      <BackToTop />
    </Fragment>
  );
}

export default App;
