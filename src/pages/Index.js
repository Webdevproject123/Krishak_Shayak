import React, { Fragment } from "react";
import Menu from "./Menu";

function Index() {
  return (
    <Fragment>
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src="assets/images/hero-bg.png" alt="" />
            
          </div>
        </div>
        <Menu/>
        {/* <!-- slider section --> */}
        <section className="slider_section">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Krishak <br />
                          Sahayak
                        </h1>
                        <p>
                          At Krishak Sahayak, we empower farmers with knowledge
                          and tools to cultivate success. Our platform is
                          designed to be the trusted companion for every farmer,
                          providing expert guidance, innovative solutions, and a
                          supportive community.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            {" "}
                            Read More{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="assets/images/logo.png" alt="" height="50%" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Krishak <br />
                          Sahayak
                        </h1>
                        <p>
                          Explore our comprehensive range of services, from crop
                          management insights to the latest agricultural
                          technologies. Whether you're a seasoned farmer or just
                          starting, Krishak Sahayak is your partner in
                          cultivating a sustainable and thriving future.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            {" "}
                            Read More{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="assets/images/logo.png" alt="" height="50%" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Krishak <br />
                          Sahayak
                        </h1>
                        <p>
                          Explore our comprehensive services, stay updated with
                          the latest trends in farming, and embark on a journey
                          towards sustainable and prosperous agriculture with
                          Krishak Sahayak.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            {" "}
                            Read More{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="assets/images/logo.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>
        </section>
        {/* <!-- end slider section --> */}
      </div>

      {/* <!-- service section --> */}

      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                We Provide a varied range of servies such as buing seeds,
                equipment, book store houses, etc.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="assets/images/nominee.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Fixed Price Items</h5>
                    <p>
                      In this context of farming and agriculture, this pricing
                      model provides stability for both buyers and sellers.
                    </p>
                    <a href=""> Read More </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="assets/images/aloo.jpeg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Variable Price Items</h5>
                    <p>
                      Unlike fixed-price items with a constant cost, the price
                      of a variable price item can fluctuate due to market
                      conditions, demand and supply dynamics, or other external
                      factors.
                    </p>
                    <a href=""> Read More </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="assets/images/tractor.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Farming Equipment</h5>
                    <p>
                      Plows,Harvesters,Tractors,Cultivators,Combine
                      Harvesters,Hay Balers,GPS and Precision Farming Technology
                    </p>
                    <a href=""> Read More </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href=""> View All </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end service section --> */}

      {/* <!-- about section --> */}

      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              We are helping farmers to fulfil the requirement of differnt
              things and provide them a forum so that they can get collective
              identity in this digital era.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="assets/images/about.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h3>We Are Krishak Sahayak</h3>
                <p>
                  At Krishak Sahayak, we are more than just an agricultural
                  platform; we are your dedicated partner in the realm of
                  farming and cultivation. Founded with a passion for
                  sustainable agriculture and a commitment to empower farmers,
                  Krishak Sahayak strives to bridge the gap between traditional
                  farming practices and modern, technology-driven solutions.
                </p>
                <p>
                  Krishak Sahayak stands out as a comprehensive agricultural hub
                  where farmers can find a wealth of knowledge and support. Our
                  platform integrates the latest advancements in agrotechnology,
                  agronomy, and sustainable farming practices.
                </p>
                <a href=""> Read More </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end about section --> */}

      {/* <!-- why section --> */}

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
                <img src="assets/images/w1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Expert Management</h5>
                <p>
                  At Krishak Sahayak, our commitment to empowering farmers is
                  not only reflected in our mission but is deeply ingrained in
                  our expert management approach. Led by a team of seasoned
                  professionals with diverse backgrounds in agriculture,
                  agribusiness, and technology, Krishak Sahayak stands as a
                  beacon of guidance and innovation in the agricultural
                  landscape.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="assets/images/w2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Secure Investment</h5>
                <p>
                  Investing in Krishak Sahayak is more than a financial
                  decision; it's a partnership in cultivating sustainable and
                  prosperous agriculture. We understand the importance of your
                  investment and are committed to providing a secure and
                  rewarding opportunity.
                </p>
              </div>
            </div>
            <div className="btn-box">
              <a href="why.html"> Read More </a>
            </div>
          </div>
        </div>
      </section>

      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>
              What says our <span>Customers</span>
            </h2>
          </div>
          <div className="carousel-wrap">
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <img src="assets/images/1.jpg" alt="" className="box-img" />
                </div>
                <div className="detail-box">
                  <div className="client_id">
                    <div className="client_info">
                      <h6>Ramvilas Singh</h6>
                      <p>Manikapur, Unnao</p>
                    </div>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                  <p>
                    संपूर्ण ज्ञान प्राप्त करने के लिए यह साइट बहुत अच्छी है खेती
                    से जुड़ी सारी जानकारी, उपकरण और कीटनाशक खरीदने की जानकारी
                    यहाँ उपलब्ध है।
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <img src="assets/images/2.jpg" alt="" className="box-img" />
                </div>
                <div className="detail-box">
                  <div className="client_id">
                    <div className="client_info">
                      <h6>Bharat Singh</h6>
                      <p>Nagariya, Kannauj</p>
                    </div>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                  <p>
                    यह समूह किसानों को एक पहचान दिलाने और उनकी सभी आवश्यकताओं को
                    पूरा करने में मदद कर रहा है।
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <img src="assets/images/3.jpg" alt="" className="box-img" />
                </div>
                <div className="detail-box">
                  <div className="client_id">
                    <div className="client_info">
                      <h6>Harendra Pal</h6>
                      <p>Usarahar, Mainpuri</p>
                    </div>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                  <p>यह किसानों की भलाई के लिए की गई बहुत अच्छी पहल है।</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <img src="assets/images/4.jpeg" alt="" className="box-img" />
                </div>
                <div className="detail-box">
                  <div className="client_id">
                    <div className="client_info">
                      <h6>Harkisan Verma</h6>
                      <p>Dadupur, Sultanpur</p>
                    </div>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                  <p>
                    यह समूह वास्तव में हमें समूह में बांधने और बेहतर जीवन
                    प्राप्त करने में मदद कर रहा है क्योंकि इसने चीजों को किफायती
                    बना दिया है।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end client section --> */}

      {/* <!-- info section --> */}

      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span> IIIT LUCKNOW </span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span> Call +01 1234567890 </span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span> 123@gmail.com</span>
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
                <h4>Info</h4>
                <p>
                  necessary, making the first step towards the development of
                  the farmers,protecting them from exploitation
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <a className="active" href="index.html">
                    {" "}
                    Home{" "}
                  </a>
                  <a className="" href="about.html">
                    {" "}
                    About{" "}
                  </a>
                  <a className="" href="service.html">
                    {" "}
                    Services{" "}
                  </a>
                  <a className="" href="why.html">
                    {" "}
                    Why Us{" "}
                  </a>
                  <a className="" href="team.html">
                    {" "}
                    Team{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <h4>Subscribe</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit" >Subscribe</button>
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
            <a href="https://html.design/">Krishak Sahayak</a>
          </p>
        </div>
      </section>
      {/* <!-- footer section --> */}

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

export default Index;
