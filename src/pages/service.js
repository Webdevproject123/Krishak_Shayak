import React, {Fragment} from 'react';
import Menu from "./Menu";

function service(){
    return(
        <Fragment>
        <div >
            <Menu/>
        </div>
            
 <section className="service_section layout_padding">
    <div className="service_container">
      <div className="container ">
        <div className="heading_container heading_center">
          <h2>
            Our <span>Services</span>
          </h2>
          <p>
          We are here to cater to the needs of the FARMERS and agricultural community.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 ">
            <div className="box ">
              <div className="img-box">
                <img src="assets/images/nominee.jpg" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  FIXED PRICE ITEMS
                </h5>
                <p>
                  In this context of farming and agriculture, this pricing model provides stability for both buyers and sellers.
                  Some of the insights are <i>Stable Pricing</i>, <i>Bugdet and Planning</i>, <i>Risk Mitigation</i>, <i>Supplier-Consumer Relationship</i>.Farmers will be able to get the seeds,pesticides and insecticides at the most affordable price.
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="box ">
              <div className="img-box">
                <img src="assets/images/aloo.jpeg" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  VARIABLE PRICE ITEM
                </h5>
                <p>
                Unlike fixed-price items with a constant cost, the price of a variable price item 
                can fluctuate due to market conditions, demand and supply dynamics, or other 
                external factors.The key features are <i>Market-Driven Pricing,Dynamic Pricing,Supply 
                and Demand,Seasonal Variation,Flexible Pricing Model,Consumer Behaviour </i>
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="box ">
              <div className="img-box">
                <img src="assets/images/tractor.jpg" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  EQUIPMENTS
                </h5>
                <p>
                  <b>Plows,Harvesters,Tractors,Cultivators,Combine Harvesters,Hay Balers,GPS and Precision Farming Technology</b>
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href="">
            View All
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end service section --> */}

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
                  <br></br>
                </span>
              </a>
              <a href="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +01 1234567890
                  <br></br>
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
              Information
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
  
        </Fragment>
    )
}

export default service;