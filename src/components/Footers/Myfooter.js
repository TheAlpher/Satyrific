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
  Col
} from "reactstrap";

// core components

function Footer(props) {
    React.useEffect(()=>{
        // fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2').then(res=>{
        //     console.log(res);res.json();
        // }).then(res=>{
        //     console.log(res);
        // })
    })
  return (
    <>
      
       
         
          <footer className="footer footer-big footer-white">
            <Container>
              <div className="content">
                <Row>
                  <Col md="4">
                    <h5>About Us</h5>
                    <br/>
                    <p>
                    Stayrific is a provider of Student Housing &
              Living Solutions with World Class, Tech Enabled, Neo & Vibrant
              Outlook, Best Amenities and Yet affordable on Pocket.
                    </p>
                    <br/>
                  </Col>
                  <Col md="4">
                    <h5>Social Feed</h5>
                    <div className="social-feed">
                      <div className="feed-line">
                        <i className="fab fa-twitter"></i>
                        <p>
                          How to handle ethical disagreements with your clients.
                        </p>
                      </div>
                      <div className="feed-line">
                        <i className="fab fa-twitter"></i>
                        <p>
                          The tangible benefits of designing at 1x pixel
                          density.
                        </p>
                      </div>
                      <div className="feed-line">
                        <i className="fab fa-facebook-square"></i>
                        <p>
                          A collection of 25 stunning sites that you can use for
                          inspiration.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <h5>Instagram Feed</h5>
                    <div className="gallery-feed">
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/olivia.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/james.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/michael.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/emily.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/marie.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/usher.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/mike.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/julie.jpg")}
                      ></img>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <ul className="pull-left">
                <li>
                  <a href="/faq" target='_blank'>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/work-with-us" target='_blank'>
                    Work with Us
                  </a>
                </li>
                <li>
                  <a href="/our-news" target='_blank'>
                    Stayrific in The News
                  </a>
                </li>
                {/* <li>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Payment
                  </a>
                </li>
                <li>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Contact Us
                  </a>
                </li> */}
              </ul>
              <div className="copyright pull-right">
                Copyright © {new Date().getFullYear()} Stayrific All Rights
                Reserved.
              </div>
            </Container>
          </footer>
          
  

    </>
  );
}

export default Footer;
