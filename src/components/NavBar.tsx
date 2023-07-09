import Head from "next/head";
import Script from "next/script";
import { Fragment } from "react";

const NavBar = () => {
  return (
    <Fragment>
      <Head>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JDTB1BEE2V"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JDTB1BEE2V');
</script>
        `,
          }}
        ></Script>
      </Head>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="/">Owbird</a>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="/#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/#personal_projects">
                  Personal projects
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="/#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default NavBar;
