const NavBar = () => {
  return (
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
  );
};

export default NavBar;
