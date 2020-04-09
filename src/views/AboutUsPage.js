import React from "react";
import Rellax from "rellax";
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  CardFooter,
  UncontrolledTooltip
} from "reactstrap";

// core components

import AboutUsNavbar from "components/Navbars/AboutUsPageNavbar.js";
import SecondaryPageHeader from "components/Headers/SecondaryPageHeader.js";
import Footer from 'components/Footers/Myfooter';

const amenitiesitems = [
  {
    title: "Air Conditioner",
    info: " All Rooms are fiited with dedicated Air Conditioners",
    src: require("../assets/img/AC.png"),

    altText: "AC"
  },
  {
    title: "Gym",
    info: "  All students have access to our world class gym facilities",
    src: require("../assets/img/gym.png"),

    altText: "Gym"
  },
  {
    title: " Housekeeping",
    info: " Housekeeping service is available for all students",
    src: require("../assets/img/housekeeping.png"),

    altText: "Housekeeping"
  },
  {
    title: "Meals",
    info:
      " Students are provided 4 nutritious meals everyday with alonger list of choices",
    src: require("../assets/img/meals.png"),

    altText: "Meals"
  },
  {
    title: " Laundry",
    info: " Laundry service is available for all students",
    src: require("../assets/img/laundry.png"),

    altText: "Laundry"
  },
  {
    title: "Library",
    info: " All students have access to our Library",
    src: require("../assets/img/library.png"),

    altText: "Library"
  }
];
// reactstrap components

function AboutUsPage() {
  React.useEffect(() => {
    if (window.innerWidth >= 801) {
        setTimeout(function() {
          new Rellax(".rellax", {
            center: false
          });
        }, 100);
        new Rellax(".rellax-header");
        new Rellax(".rellax-text");
      }
    
    
 
  });
  return (
    <>
      <div className='bg-elements ' style={{height:0,width:'100%',marginTop:"30vh", position:'absolute',zIndex:'-1000'}}>
       <div className="bg-elements-1 rellax  ml-5 mr-auto"  data-rellax-speed="-4" style={{minHeight:'100px',maxWidth:'100px',borderRadius:'20%', backgroundColor:'rgba(255, 165, 0, 0.3)',transform:'rotate(45deg)'}}></div> 
       <div className="bg-elements-2 rellax mr-5 ml-auto"  data-rellax-speed='-6' style={{ minHeight:'150px',maxWidth:' 150px',borderRadius:'20%', backgroundColor:'rgba(255, 165, 0, 0.3)',transform:'rotate(45deg)'}}></div>
       <div className="bg-elements-3 rellax  mr-auto"  data-rellax-speed='-2' style={{ zIndex:'-1000' ,marginLeft:'40vw',minHeight:'50px',maxWidth:'50px',borderRadius:'20%', backgroundColor:'rgba(255, 165, 0, 0.3)',transform:'rotate(45deg)'}}></div>
       </div> 
      <AboutUsNavbar />
      <div className="wrapper">
        <SecondaryPageHeader title="About Us" />
        <div className="section" style={{background:'transparent'}}>
          <Container style={{background:'transparent'}}>
            <h3 className="title" style={{textAlign:'center'}}>Stay Terrific</h3>
            <h5
              className="description text-center"
              style={{ fontFamily: "Lato" }}
            >
              As the name suggests Stayrific is a provider of Student Housing &
              Living Solutions with World Class, Tech Enabled, Neo & Vibrant
              Outlook, Best Amenities and Yet affordable on Pocket.
            </h5>
          </Container>
          <Container style={{background:'transparent'}}>
            <Row>
              <Col md="6" style={{ alignSelf: "center" }}>
                <img
                  data-aos="fade-up"
                  style={{ alignSelf: "center" }}
                  src={require("../assets/img/temp12.png")}
                ></img>
              </Col>
              <Col className=" pr-5 ml-auto text-center" md="6">
                <h2
                  data-aos="fade-up"
                  className="title"
                  style={{ fontSize: "2rem" ,textAlign:'center'}}
                >
                  Vision <b>&</b> Mission
                </h2>
                <h5
                  data-aos="fade-down"
                  className="description"
                  style={{ fontSize: "1.3rem", fontFamily: "Lato" }}
                >
                  Offer superior living experience to college students across
                  the Length and Breadth of Indian Sub-Continent by leveraging
                  technology for a seamless user experience.
                </h5>
                <br></br>
                {/* <div data-aos="fade-left" className="buttons">
              {/* <Button
                      className="btn-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-get-pocket"></i>
                    </Button> 
              <Button
                className="mr-3 btn-warning"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
                size="lg"
              >
                Read More
              </Button>
            </div>
          */}
              </Col>
            </Row>
          </Container>
          <Container className="pt-2 mt-5" style={{background:'transparent',textAlign:'center'}}>
            <h2 className="title">Why Delhi-NCR</h2>
            <Row>
              <Col md="6">
                <div
                  className="info info-horizontal"
                  style={{ maxWidth: "unset" ,paddingTop:'unset'}}
                >
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons business_chart-bar-32"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Student Enrollment</h4>
                    <p>
                      The student enrolment has grown by 13.3% and stands at
                      36.64 million students as of 2018–19 across India.
                    </p>
                  </div>
                </div>
                <div
                  className="info info-horizontal"
                  style={{ maxWidth: "unset",paddingTop:'unset' }}
                >
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons education_agenda-bookmark"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Major Education Hub</h4>
                    <p>
                      DELHI/NCR being a major education hub in the country with
                      DU itself accommodating 132,435 regular students
                    </p>
                  </div>
                </div>
                <div
                  className="info info-horizontal"
                  style={{ maxWidth: "unset",paddingTop:'unset' }}
                >
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons objects_spaceship"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Launch Pad</h4>
                    <p>
                      50% of these regular stuents look for living options in
                      and around their colleges, thus we consider Delhi /NCR as
                      our Initial Launch Pad.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md="6">
                <div className="tablet-container">
                  <img
                    alt="..."
                    src={require("assets/img/ipad2-inverted.png")}
                  ></img>
                </div>
              </Col>
            </Row>
          </Container>
          <Container style={{background:'transparent'}}>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Team </h2>
                <h4 className="description">
                  We are an experienced team with a total work experience of 50
                  Years, from Varied Verticals with Customer First, Think Big
                  and Bias for Action always being displayed. We are absolutely
                  passionate about our work and like what we do.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/examples/card-profile2.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Deepak Gera</CardTitle>
                    <h6 className="category">CEO</h6>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="instagram"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-instagram"></i>
                      </Button>{" "}
                      <Button
                        className="btn-icon btn-round"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="facebook"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/examples/card-profile2.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Sahil Bajaj</CardTitle>
                    <h6 className="category">CEO</h6>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="instagram"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-instagram"></i>
                      </Button>{" "}
                      <Button
                        className="btn-icon btn-round"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="facebook"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/examples/card-profile2.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Deepak Dagar</CardTitle>
                    <h6 className="category">CEO</h6>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="instagram"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-instagram"></i>
                      </Button>{" "}
                      <Button
                        className="btn-icon btn-round"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="facebook"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/examples/card-profile2.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Sanchit Mahajan</CardTitle>
                    <h6 className="category">CEO</h6>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="instagram"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-instagram"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="facebook"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/examples/card-profile2.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Chaman Joshi</CardTitle>
                    <h6 className="category">CEO</h6>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="instagram"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-instagram"></i>
                      </Button>{" "}
                      <Button
                        className="btn-icon btn-round"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="facebook"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    
      <Footer/>
    </>
  );
}

export default AboutUsPage;
