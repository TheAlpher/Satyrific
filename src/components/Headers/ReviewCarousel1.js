import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Rellax from 'rellax';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Collapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";
//   import MyNavbar from 'components/Navbars/WhiteNavbar';
const items = [
  {
    src: "url(" + require("assets/img/bg20.jpg") + ")",
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
          <h1 className="title">Island of legends.</h1>
          <h4 className="description">
            The islands of Malta and Gozo are brilliant for a family holiday,
            packed with fun places to visit whatever your children’s ages. The
            islands’ small size means everywhere is within easy reach.
          </h4>
          <br></br>
          <h5>Connect with us on:</h5>
          <div className="buttons">
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-twitter"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-facebook-square"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-google-plus"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-instagram"></i>
            </Button>
          </div>
        </Col>
      </Row>
    ),
    altText: "",
    caption: ""
  },
  {
    src: "url(" + require("assets/img/bg15.jpg") + ")",
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
          <h1 className="title">Island of legends.</h1>
          <h4 className="description">
            The islands of Malta and Gozo are brilliant for a family holiday,
            packed with fun places to visit whatever your children’s ages. The
            islands’ small size means everywhere is within easy reach.
          </h4>
          <br></br>
          <h5>Connect with us on:</h5>
          <div className="buttons">
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-twitter"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-facebook-square"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-google-plus"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-instagram"></i>
            </Button>
          </div>
        </Col>
      </Row>
    ),
    altText: "",
    caption: ""
  },
  {
    src: "url(" + require("assets/img/bg17.jpg") + ")",
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
          <h1 className="title">Island of legends.</h1>
          <h4 className="description">
            The islands of Malta and Gozo are brilliant for a family holiday,
            packed with fun places to visit whatever your children’s ages. The
            islands’ small size means everywhere is within easy reach.
          </h4>
          <br></br>
          <h5>Connect with us on:</h5>
          <div className="buttons">
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-twitter"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-facebook-square"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-google-plus"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-instagram"></i>
            </Button>
          </div>
        </Col>
      </Row>
    ),
    altText: "",
    caption: ""
  }
];

AOS.init();
const MyHeader = () => {
  // const [navbarOpen1, setNavbarOpen1] = React.useState(false);
  // const [navbarOpen2, setNavbarOpen2] = React.useState(false);
  const [navbarOpen3, setNavbarOpen3] = React.useState(false);
  // header 3 carousel states and functions
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
React.useEffect(()=>{
  if (window.innerWidth >= 801) {
    setTimeout(function() {
      new Rellax(".rellax", {
        center: false
      });
    }, 100);
    new Rellax(".rellax-header");
    new Rellax(".rellax-text");
  }
})
  return (
    <>
      <div className="wrapper pt-5" style={{backgroundColor:'rgb(241,93,34)'}}>
      <div
        className="bg-elements "
        style={{
          height: 0,
          width: "100%",
         
          position: "relative",
          // zIndex: "10000"
        }}
      >
        <div
          className="bg-elements-2 rellax"
          data-rellax-speed="3"
          style={{
            minHeight: "150px",
            maxWidth: " 150px",
            borderRadius: "20%",
            backgroundColor: "rgba(255, 165, 0, 1)",
            transform: "rotate(45deg)"
          }}
        ></div>
        <div
          className="bg-elements-1 rellax "
          data-rellax-speed="4"
          style={{
            
            minHeight: "100px",
            maxWidth: "100px",
            borderRadius: "20%",
            backgroundColor: "rgba(255, 165, 0, 1)",
            transform: "rotate(45deg)"
          }}
        ></div>
        <div
          className="bg-elements-3 rellax  "
          data-rellax-speed="3"
          style={{
           
            minHeight: "50px",
            maxWidth: "50px",
            borderRadius: "20%",
            backgroundColor: "rgba(255, 165, 0, 1)",
            transform: "rotate(45deg)"
          }}
        ></div>
      </div>
                     
                     
        <Container style={{background:'transparent'}}>
          <CardTitle
            tag="h6"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="text-center"
            style={{ color: "grey" }}
          >
            TESTIMONIALS
          </CardTitle>
          <CardTitle
            tag="h3"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="text-center"
            style={{ fontWeight: "bold" }}
          >
            What Our Customers Say
          </CardTitle>
          <hr
            data-aos="zoom-in"
            data-aos-duration="2000"
            style={{
              width: "20%",
              border: "3px solid white",
              borderRadius: "3px"
            }}
          />
        </Container>
        <Container data-aos="zoom-in" data-aos-duration="1000" style={{background:'transparent'}}>
          <Row style={{ justifyContent: "space-around" }}>
            <Col md="12" className="mx-auto">
              <Carousel
                activeIndex={activeIndex}
                keyboard={false}
                className="review-carousel"
                pause={false}
                ride="carousel"
                interval="500000"
                style={{ maxHeight: "59vh", boxShadow: "none" }}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map(item => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      
                      <div
                        className="page-header header-filter"
                        style={{
                          minHeight: "unset",
                          maxHeight: "59vh"
                        }}
                      >
                        
                        <div
                          className="page-header-image"
                          style={{
                            backgroundColor: " #ffffff00 ",
                            maxHeight: "inherit"
                          }}
                        >
                               
                        </div>
                        <div className="content">
                          <Card className="card-testimonial card-plain">
                            <div className="card-avatar">
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <img
                                  alt="..."
                                  className="img img-raised rounded"
                                  src={require("assets/img/james.jpg")}
                                ></img>
                              </a>
                            </div>
                            <CardBody
                              style={{ marginTop: 0, paddingTop: "1%" }}
                            >
                              <h4
                                className="card-description"
                                style={{ color: "white", fontSize: "0.8rem" }}
                              >
                                "Take up one idea. Make that one idea your life
                                - think of it, dream of it, live on that idea.
                                Let the brain, muscles, nerves, every part of
                                your body, be full of that idea, "
                              </h4>
                              <CardTitle tag="p">Isaac Hunter</CardTitle>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="left carousel-control carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    previous();
                  }}
                  style={{ maxWidth: "7vw ", background: "transparent" }}
                  role="button"
                >
                  {/* <div id='prev-btn1' style={{ padding:'10%',
           width:'50%',

     
     
            borderRadius:'50%',
          
            backgroundColor:'#f1efec' }}> */}
                  <div
                    className="now-ui-icons arrows-1_minimal-left"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      border: "1px solid white",
                      color: "black",
                      fontWeight: "bolder",
                      padding: "10%"
                    }}
                  />
                  {/* </div> */}
                </a>
                <a
                  className="right carousel-control carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  style={{ maxWidth: "7vw ", background: "transparent" }}
                  role="button"
                >
                  <div
                    className="now-ui-icons arrows-1_minimal-right"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      border: "1px solid white",
                      color: "black",
                      fontWeight: "bolder",
                      padding: "10%"
                    }}
                  />
                </a>
              </Carousel>
            </Col>{" "}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyHeader;
