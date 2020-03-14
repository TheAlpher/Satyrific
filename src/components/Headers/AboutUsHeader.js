import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
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

// core components

function AboutUsHeader() {
  const [navbarOpen3, setNavbarOpen3] = React.useState(false);
  
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
    
      {navbarOpen3 ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setNavbarOpen3(false);
          }}
        />
      ) : null}
 <Navbar  
          className="navbar-transparent  navbar-absolute"
          expand="lg"
        >
          <Container>
            <div className="navbar-translate">
              <button
                aria-expanded={navbarOpen3}
                className="navbar-toggler"
                data-toggle="collapse"
                type="button"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setNavbarOpen3(!navbarOpen3);
                }}
              >
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Aakriti Lighting
              </NavbarBrand>
            </div>
            <Collapse navbar isOpen={navbarOpen3}>
              <Nav className="ml-auto" navbar>
                <NavItem >
                <NavLink href="/" 
                  // onClick={e => e.preventDefault()}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem className="active">
                  <NavLink href="/about-us" 
                  // onClick={e => e.preventDefault()}
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/products?types=all" 
                  // onClick={e => e.preventDefault()}
                  >
                    Products
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
     
     
     <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/aboutusheader.jpeg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h1 className="title">About Us</h1>
              <h4>
                Find out more
                about how we work.
              </h4>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;
