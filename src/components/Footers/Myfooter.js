/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  NavLink,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Footer(props) {
  React.useEffect(() => {
    // fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2').then(res=>{
    //     console.log(res);res.json();
    // }).then(res=>{
    //     console.log(res);
    // })
  });
  return (
    <>
      <footer
        className="footer footer-big footer-white pt-5 "
        style={{ position: "relative", zIndex: "1" }}
      >
        <Container style={{ maxWidth: "1250px" }}>
          <div className="content">
            <Row style={{}}>
              <Col md={3} sm={12} xs={12}>
                <h4
                  className="p-1 pl-2 m-0"
                  style={{
                    color: "white",
                    backgroundColor: "#f96332",
                    borderRadius: "5px",
                  }}
                >
                  Stayrific Hostels
                </h4>
                <br />
                <p style={{ fontSize: "1.1em" }}>
                  Stayrific is a provider of Student Housing & Living Solutions
                  with World Class, Tech Enabled, Neo & Vibrant Outlook, Best
                  Amenities and Yet affordable on Pocket.
                </p>
                <br />
              
              </Col>
              <Col md={2} sm={6} xs={6}>
                <h3 className="mt-0 mb-2" style={{ color: "#f96332",fontWeight:'lighter' }}>
                  <b>A</b>bout
                </h3>

                <ul className="pull-left">
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>

                  <li>
                    <a href="/amenities">Amenities</a>
                  </li>
                  <li>
                    <a href="/events">Community</a>
                  </li>
                  <li>
                    <a href="/our-news">Technology</a>
                  </li>
                  <li>
                    <a href="/notices">Security</a>
                  </li>
                </ul>
              </Col>
              <Col md={2} sm={6} xs={6}>
                <h3 className="mt-0 mb-2" style={{ color: "#f96332",fontWeight:'lighter' }}>
               <b>L</b>atest
                </h3>

                <ul className="pull-left">
                  <li>
                    <a href="/events">Events</a>
                  </li>
                  <li>
                    <a href="/notices">Notices</a>
                  </li>

                  <li>
                    <a href="/blogs">Blogs</a>
                  </li>

                  <li>
                    <a href="/our-news">In the News</a>
                  </li>
                </ul>
              </Col>
              <Col md={2} sm={6} xs={6}>
                <h3 className="mt-0 mb-2" style={{ color: "#f96332",fontWeight:'lighter' }}>
                 <b>C</b>ontact
                </h3>

                <ul className="pull-left">
                  <li>
                    <a href="/faq">Mail Us</a>
                  </li>
                  <li>
                    <a href="/about-us">Call Us</a>
                  </li>

                  <li>
                    <a href="/amenities">Visit Us</a>
                  </li>
                  <li>
                    <a href="/events">Request CallBack</a>
                  </li>
                  <li>
                    <a href="/work-with-us">Work with Us</a>
                  </li>
    
                </ul>
              </Col>
              <Col md={3} sm={6} xs={6}>
                <h4 className="mt-0 mb-2" style={{ color: "#f96332",fontWeight:'lighter'}}>
                 <b>P</b>opular Links
                </h4>

                <ul className="pull-left">
                  <li>
                    <a href="/faq">Hostel in Satya Niketan</a>
                  </li>
                  <li>
                    <a href="/about-us">Hostel in Noida</a>
                  </li>

                  <li>
                    <a href="/amenities" style={{fontSize:'medium'}}>Hostel in South Campus</a>
                  </li>
                </ul>
              </Col>
           </Row>
          </div>
          <hr style={{borderBottom:'4px solid #f96332',borderRadius:'8px'}}/>
          <Row style={{justifyContent:'center'}}>
                  <Col className='pr-0' md='2' sm='6' xs='6' >
                    <a
                      className=" "
                      href="/"
                      style={{ textDecoration: "none", display: "block" }}
                    >
                      {/* <div className='btn btn-light mx-auto android-btn'> */}
                      <img
                        className=""
                        style={{ objectFit: "cover"}}
                        src={require("../../assets/img/googleplay1.png")}
                      />
                      {/* <div className="btn-text pull-right"><small>Available on</small><br/><strong>Google Play</strong> */}
                      {/* </div> */}
                      {/* </div> */}
                    </a>
                  </Col>
                  <Col  className='pl-0' md='2' sm='6' xs='6'  >
                    <a
                      className="  "
                      href="/"
                      style={{ textDecoration: "none", display: "block",margin:'5% 0' }}
                    >
                      {/* <div className=' btn btn-light mx-auto android-btn'> */}
                      <img
                        className=""
                        style={{
                          objectFit: "cover",
                         width:'82%'
                        }}
                        src={require("../../assets/img/applelogo1.svg")}
                      />
                      {/* <div className="btn-text pull-right"><small>Available on</small><br/><strong>Apple Store</strong>
          </div></div> */}
                    </a>
                  </Col>
                  {/*  <
                Col md="5" sm="5">
                <Button color="google">
                <i class="fab fa-google-play"></i>  Find us on Google
                </Button>
              </Col> */}
                  <span
                    style={{
                      fontSize: "0.5rem",
                      width: "100%",
                      fontWeight:'unset',
                      textAlign: "center",
                      color:'black'
                    }}
                  >
                    Google Play and the Google Play logo are trademarks of
                    Google LLC.
                  </span>
                </Row>
            
          <div className="copyright float-center" style={{        fontWeight:'lighter'}}>
            Copyright © {new Date().getFullYear()} Stayrific All Rights
            Reserved.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
