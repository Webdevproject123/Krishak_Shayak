import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Menu from "./Menu";

function About() {
  return (
    <Fragment>
      

      <Menu/>

      {/* About section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              At Krishak Sahayak, we are more than just an agricultural platform; we are your dedicated partner in the realm of farming and cultivation. Founded with a passion for sustainable agriculture and a commitment to empower farmers, Krishak Shayak strives to bridge the gap between traditional farming practices and modern, technology-driven solutions.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="https://preptors.com/wp-content/uploads/2022/01/About-us-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h3>We Are Krishi Sahayak</h3>
                <p>
                  <strong>Mission:</strong> Our mission is to revolutionize agriculture by providing farmers with access to cutting-edge information, tools, and resources. We aim to empower farmers of all scales, from smallholders to large enterprises, by fostering innovation, promoting sustainability, and enhancing agricultural productivity.
                  <br /><br />
                  <strong>What Sets Us Apart:</strong> Krishak Shayak stands out as a comprehensive agricultural hub where farmers can find a wealth of knowledge and support. Our platform integrates the latest advancements in agrotechnology, agronomy, and sustainable farming practices. We believe in the potential of agriculture to feed the world and envision a future where farmers are equipped with the best resources to thrive.
                  <br /><br />
                  <strong>Innovative Solutions:</strong> Stay at the forefront of agricultural technology with our curated selection of innovative tools and solutions designed to optimize farming operations.
                  <br /><br />
                  <strong>Community Support:</strong> Join a vibrant community of farmers, share experiences, and learn from each other. Krishak Shayak is a place where farmers connect, collaborate, and grow together.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End about section */}

      {/* Info section */}
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>IIIT LUCKNOW</span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +01 1234567890</span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>123@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="info_social">
                <a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href=""><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>necessary, making the first step towards the development of the farmers,protecting them from exploitation</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <a className="active" href="index.html">Home</a>
                  <a className="" href="about.html">About</a>
                  <a className="" href="service.html">Services</a>
                  <a className="" href="why.html">Why Us</a>
                  <a className="" href="team.html">Team</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <h4>Subscribe Krishi Sahayak</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End info section */}

      {/* Footer section */}
      <section className="footer_section">
        <div className="container">
          <p>&copy; <span id="displayYear"></span> All Rights Reserved By <a href="https://html.design/">@Krishak Sahayak</a></p>
        </div>
      </section>
      {/* End footer section */}

      {/* jQuery */}
      <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
      {/* Popper js */}
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      {/* Bootstrap js */}
      <script type="text/javascript" src="js/bootstrap.js"></script>
      {/* Owl slider */}
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
      {/* Custom js */}
      <script type="text/javascript" src="js/custom.js"></script>
    </Fragment>
  );
}

export default About;
