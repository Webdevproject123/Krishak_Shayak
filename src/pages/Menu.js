import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Fragment>
    {/* <div className="hero_area">
      
      </div> */}
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <div className="navbar-brand">
              <span> Krishak Sahayak </span>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
                  {/* <a className="nav-link" href="index.html">
                    Home <span className="sr-only"></span>
                  </a> */}
                </li>

                <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
                  {/* <a className="nav-link" href="about.html">
                    {" "}
                    
                    About
                  </a> */}
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="service.html">
                    Services
                  </a> */}
                  <Link to="/service" className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                <Link to="/why" className="nav-link">WHY US</Link>
                  {/* <a className="nav-link" href="why.html">
                    Why Us
                  </a> */}
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="team.html">
                    Team
                  </a> */}
                  <Link to="/team" className="nav-link">Team</Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="login.html">
                    <i className="fa fa-user" aria-hidden="true"></i> Login
                  </a> */}
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <form className="form-inline">
                  <button
                    className="btn my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </header>

        {/* <!-- jQery --> */}
        <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
      {/* <!-- popper js --> */}
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"
      ></script>
      {/* <!-- bootstrap js --> */}
      <script type="text/javascript" src="js/bootstrap.js"></script>
      {/* <!-- owl slider --> */}
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
      ></script>
      {/* <!-- custom js --> */}
      <script type="text/javascript" src="js/custom.js"></script>
      
    </Fragment>
  );
}
export default Menu;
