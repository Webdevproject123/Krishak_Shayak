import React, {Fragment} from 'react';
import Menu from "./Menu";

function why(){
    return(
        
        <Fragment>
         <div >
            <Menu/>
        </div>
 <section className="why_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Why Choose <span>Us</span>
        </h2>
      </div>
      <div className="why_container">
        <div className="box">
          <div className="img-box">
            <img src="assets/images/w1.png" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Expert Management
            </h5>
            <p>
              Offer a team of experienced agricultural experts who can provide guidance on crop management, pest control, irrigation techniques, and other aspects of farming.
              Provide access to a knowledge base or advisory services that farmers can tap into for real-time assistance.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="assets/images/w2.png" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Secure Investment
            </h5>
            <p>
              Assure farmers of the security and safety of their investments by implementing robust financial systems and transparent processes.
              Offer insurance options or risk management tools to protect farmers against unforeseen events such as crop failures or natural disasters.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="assets/images/w3.png" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Instant Trading
            </h5>
            <p>
              Facilitate seamless and quick trading of agricultural products through an intuitive and user-friendly platform.
              Implement features like real-time market prices, online auctions, and a responsive trading interface to enable instant transactions.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="assets/images/w4.png" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Happy Customers
            </h5>
            <p>
              Prioritize customer satisfaction by providing excellent customer support services.
              Gather and act upon feedback from farmers to continuously improve the platform and meet the evolving needs of the agricultural community.
            </p>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="">
          Read More
        </a>
      </div>
    </div>
  </section>

  {/* <!-- end why section --> */}

  {/* <!-- info section --> */}

  <section className="info_section layout_padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 info_col">
          <div className="info_contact">
            <h4>
              Address
            </h4>
            <div className="contact_link_box">
              <a href="">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  IIIT LUCKNOW
                </span>
              </a>
              <a href="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +01 1234567890
                </span>
              </a>
              <a href="">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  123@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className="info_social">
            <a href="">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 info_col">
          <div className="info_detail">
            <h4>
              Info
            </h4>
            <p>
              necessary, making the first step towards the development of the farmers,protecting them from exploitation
              </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-2 mx-auto info_col">
          <div className="info_link_box">
            <h4>
              Links
            </h4>
            <div className="info_links">
              <a className="active" href="index.html">
                Home
              </a>
              <a className="" href="about.html">
                About
              </a>
              <a className="" href="service.html">
                Services
              </a>
              <a className="" href="why.html">
                Why Us
              </a>
              <a className="" href="team.html">
                Team
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 info_col ">
          <h4>
            Subscribe
          </h4>
          <form action="#">
            <input type="text" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end info section --> */}

  {/* <!-- footer section --> */}
  <section className="footer_section">
    <div className="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/">@Krishak Sahayak</a>
      </p>
    </div>
  </section>
  {/* <!-- footer section --> */}

  {/* <!-- jQery --> */}
  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  {/* <!-- popper js --> */}
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
  </script>
  {/* <!-- bootstrap js --> */}
  <script type="text/javascript" src="js/bootstrap.js"></script>
  {/* <!-- owl slider --> */}
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
  </script>
  {/* <!-- custom js --> */}
  <script type="text/javascript" src="js/custom.js"></script>
  {/* <!-- Google Map --> */}
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap">
  </script>
  {/* <!-- End Google Map --> */}

        </Fragment>
    )
}

export default why;