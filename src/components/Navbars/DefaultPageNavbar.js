import React from "react";
import { Link } from "react-router-dom";
import img1 from "./../../assets/img/brandlogomini3.png";
import img2 from "./../../assets/img/BRANDLOGOMINI2.png";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Modal,  Card,
  CardHeader,
  CardBody,
  CardTitle,
  ModalFooter,
  NavLink,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function ScrollTransparentNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [modalNotice, setModalNotice] = React.useState(false);
  const [modalNotice1, setModalNotice1] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(
    // (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
    //   ? ""
    //   : " navbar-transparent"
    ""
  );
  const [first1Focus, setFirst1Focus] = React.useState(false);
    const [last1Focus, setLast1Focus] = React.useState(false);
    const [email1Focus, setEmail1Focus] = React.useState(false);
    const [first2Focus, setFirst2Focus] = React.useState(false);
    const [email2Focus, setEmail2Focus] = React.useState(false);
  const [buyButtonColor, setBuyButtonColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? "info"
      : "neutral"
  );

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
        document.getElementById("logoimage").src = img2;
        setBuyButtonColor("info");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor("");
        //  navbar-transparent
        document.getElementById("logoimage").src = img2;
        setBuyButtonColor("neutral");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top" + navbarColor} color="white" expand="lg">
        <Container
          style={{ marginLeft: "5%", marginRight: "5%", display: "flex" }}
        >
          <div className="navbar-translate mr-2">
            <NavbarBrand href="/" style={{ maxWidth: "30vw" }}>
              <img
                alt="logo"
                id="logoimage"
                width="35%"
                src={require("assets/img/BRANDLOGOMINI2.png")}
              />
            </NavbarBrand>
            {/* <UncontrolledTooltip target="navbar-brand">
              Designed by Invision. Coded by Creative Tim
            </UncontrolledTooltip> */}
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
         
            <Nav className="ml-auto" id="ceva" navbar>
              <NavItem >
                <NavLink
                  className="nav-link btn-default "
                  color={buyButtonColor}
                  href="/home"
                  // target="_blank"
                >
                  <p>Home</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link btn-default "
                  color={buyButtonColor}
                  href="/about-us"
                  // target="_blank"
                >
                  <p>About Us</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link btn-default "
                  color={buyButtonColor}
                  href="/amenities"
                  // target="_blank"
                >
                  <p>Amenities</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link btn-default "
                  color={buyButtonColor}
                  href="/events"
                  // target="_blank"
                >
                  <p>Events</p>
                </NavLink>
              </NavItem>{" "}
              <NavItem>
                <NavLink
                  className="nav-link btn-default"
                  color={buyButtonColor}
                  href="/contact-us"
                  //   target="_blank"
                >
                  <p>Contact Us</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link btn-default pay-now-collapse-item"
                  color={buyButtonColor}
                  href="/contact-us"
                  style={{ textAlign: "center" }}
                  //   target="_blank"
                >
                  {" "}
                  <Button
                    className=" btn-round pay-now-collapse-btn"
                    id="tooltip511894367"
                    type="button"
                  >
                    Pay Now
                  </Button>
                </NavLink>
              </NavItem>
              <Button
            onClick={() => setModalNotice(true)}
            style={{
              // zIndex: "10000",
              // position: "absolute",
              // right: "0.5%",
            margin:'auto',

              marginTop: "1.7%",
            }}
            className="btn-icon btn-round call-now-mini-navbar-item"
            color="info"
          >
            <i className="fas fa-phone"></i>
            {/* <i className="fas fa-phone"></i> */}
          </Button>
            </Nav>

          </Collapse>
           <Modal isOpen={modalNotice} toggle={() => setModalNotice(false)}>
          <div className="modal-header">
            <button
              aria-hidden={true}
              className="close"
              onClick={() => setModalNotice(false)}
              type="button"
            >
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </button>
            <h5 className="modal-title" id="myModalLabel">
              Request A Call
            </h5>
          </div>
          <div className="modal-body">
            
             <Form id="contact-form1" method="post" role="form">
                    
                    <CardBody>
                      <Row>
                        <Col className="" md="12">
                          <label>Name</label>
                          <InputGroup
                            className={first1Focus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons users_circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Name..."
                              autoComplete="given-name"
                              placeholder="Name..."
                              required={true}
                              type="text"
                              onFocus={() => setFirst1Focus(true)}
                              onBlur={() => setFirst1Focus(false)}
                            ></Input>
                          </InputGroup>
                        </Col>
                     </Row>
                      <FormGroup>
                      <label>Contact No.</label>
                        <InputGroup>
                      <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons tech_mobile"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                          required={true}
                            // autoComplete="phone"
                            placeholder="12345-67890"
                            pattern="[0-9]{5}-[0-9]{5}"
                            type="tel"
                            onFocus={() => setEmail1Focus(true)}
                            onBlur={() => setEmail1Focus(false)}
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Your message</label>
                        <Input
                        required={true}
                          id="message"
                          name="message"
                          rows="6"
                          type="textarea"
                        ></Input>
                      </FormGroup>
                      <Row>
        
                        <Col md="12" className='text-center'>
                          <Button
                            className="btn-round "
                            color="info"
                            type="submit"
                          >
                            Send Message
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
            
          </div>
      
        </Modal>
    
        </Container>
        <Button
          className=" btn-round pay-now-btn "
          id="tooltip511894367"
          type="button"
        >
          Pay Now
        </Button>{" "}
        <Button
         
          onClick={() => setModalNotice1(true)}
          className="btn-icon btn-round call-now-btn ml-5"
          color='info'
        >
          <i className="fas fa-phone"></i>
          {/* <i className="fas fa-phone"></i> */}
        </Button>{" "}
        <Modal isOpen={modalNotice1} toggle={() => setModalNotice1(false)}>
          <div className="modal-header">
            <button
              aria-hidden={true}
              className="close"
              onClick={() => setModalNotice1(false)}
              type="button"
            >
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </button>
            <h5 className="modal-title" id="myModalLabel">
              Request A Call
            </h5>
          </div>
          <div className="modal-body">
            
             <Form id="contact-form1" method="post" role="form">
                    
                    <CardBody>
                      <Row>
                        <Col className="" md="12">
                          <label>Name</label>
                          <InputGroup
                            className={first1Focus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons users_circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                            required={true}
                              aria-label="Name..."
                              autoComplete="given-name"
                              placeholder="Name..."
                              type="text"
                              onFocus={() => setFirst1Focus(true)}
                              onBlur={() => setFirst1Focus(false)}
                            ></Input>
                          </InputGroup>
                        </Col>
                     </Row>
                      <FormGroup>
                      <label>Contact No.</label>
                        <InputGroup>
                      <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons tech_mobile"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                          required={true}
                            // autoComplete="phone"
                            placeholder="12345-67890"
                            pattern="[0-9]{5}-[0-9]{5}"
                            type="tel"
                            onFocus={() => setEmail1Focus(true)}
                            onBlur={() => setEmail1Focus(false)}
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Your message</label>
                        <Input
                        required={true}
                          id="message"
                          name="message"
                          rows="6"
                          type="textarea"
                        ></Input>
                      </FormGroup>
                      <Row>
        
                        <Col md="12" className='text-center'>
                          <Button
                            className="btn-round pull-center"
                            color="info"
                            type="submit"
                          >
                            Send Message
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
            
          </div>

        </Modal> </Navbar>
    </>
  );
}

export default ScrollTransparentNavbar;
