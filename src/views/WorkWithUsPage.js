import React from "react";
import {Link} from 'react-router-dom';
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
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
  } from "react-google-maps";
import DefaultNavbar from "components/Navbars/DefaultPageNavbar.js";
import SecondaryPageHeader from "components/Headers/SecondaryPageHeader.js";

import Footer from 'components/Footers/Myfooter';
const MapWrapper = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
        defaultOptions={{
          scrollwheel: false,
          styles: [
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [{ color: "#ffffff" }, { lightness: 17 }]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }]
            },
            {
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }, { lightness: 18 }]
            },
            {
              featureType: "road.local",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }, { lightness: 16 }]
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#dedede" }, { lightness: 21 }]
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                { visibility: "on" },
                { color: "#ffffff" },
                { lightness: 16 }
              ]
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                { saturation: 36 },
                { color: "#333333" },
                { lightness: 40 }
              ]
            },
            { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#f2f2f2" }, { lightness: 19 }]
            },
            {
              featureType: "administrative",
              elementType: "geometry.fill",
              stylers: [{ color: "#fefefe" }, { lightness: 20 }]
            },
            {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }]
            }
          ]
        }}
      >
        <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
      </GoogleMap>
    ))
  );
function FAQPage(props) {
    const [first1Focus, setFirst1Focus] = React.useState(false);
    const [last1Focus, setLast1Focus] = React.useState(false);
    const [email1Focus, setEmail1Focus] = React.useState(false);
    const [first2Focus, setFirst2Focus] = React.useState(false);
    const [email2Focus, setEmail2Focus] = React.useState(false);
    React.useEffect(()=>{
        // if (window.innerWidth >= 801) {
        //     setTimeout(function() {
        //       new Rellax(".rellax", {
        //         center: false
        //       });
        //     }, 100);
        //     new Rellax(".rellax-header");
        //     new Rellax(".rellax-text");
        //   }
      
    })
  return (
    <>
    <div id="hovericonscontainer">
        <Link to="#">
          <i
            id="hovericons1"
            className="mx-2 my-3  hovericons fab fa-2x fa-instagram"
          ></i>
        </Link>
        <br />
        <Link to="#">
          <i
            id="hovericons2"
            className="mx-2 my-3 hovericons fab fa-2x fa-facebook"
          ></i>
        </Link>
        <br />
        <Link to="#">
          {" "}
          <i
            id="hovericons3"
            className="mx-2 my-3 hovericons fab fa-2x fa-twitter"
          ></i>
        </Link>
        <br />
        <Link to="#">
          <i
            id="hovericons4"
            className="mx-2 my-3  hovericons fab fa-2x fa-linkedin"
          ></i>
        </Link>
      </div>

    <div className='bg-elements ' style={{height:0,width:'100%',marginTop:"30vh", position:'absolute',zIndex:'-1000'}}>
       <div className="bg-elements-1 rellax  ml-5 mr-auto"  data-rellax-speed="-7" style={{minHeight:'100px',maxWidth:'100px',borderRadius:'20%', backgroundColor:'rgba(255, 165, 0, 0.3)',transform:'rotate(45deg)'}}></div> 
       <div className="bg-elements-2 rellax mr-5 ml-auto"  data-rellax-speed='-3' style={{ minHeight:'150px',maxWidth:' 150px',borderRadius:'20%', backgroundColor:'rgba(255, 165, 0, 0.3)',transform:'rotate(45deg)'}}></div>
       <div className="bg-elements-3 rellax  mr-auto"  data-rellax-speed='10' style={{ zIndex:'-1000' ,marginLeft:'40vw',minHeight:'50px',maxWidth:'50px',borderRadius:'20%', backgroundColor:'rgba(255, 165, 0, 0.3)',transform:'rotate(45deg)'}}></div>
       </div>      <DefaultNavbar />
      <div className="wrapper">
        <SecondaryPageHeader title="Work With Us" />
<div className='wrapper'>
<Container>    <Form id="contact-form1" method="post" role="form">
                    <CardHeader className="text-center">
                      <CardTitle tag="h4">Let us Know</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="pr-2" md="6">
                          <label>First name</label>
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
                              aria-label="First Name..."
                              autoComplete="given-name"
                              placeholder="First Name..."
                              type="text"
                              onFocus={() => setFirst1Focus(true)}
                              onBlur={() => setFirst1Focus(false)}
                            ></Input>
                          </InputGroup>
                        </Col>
                        <Col className="pl-2" md="6">
                          <FormGroup>
                            <label>Last name</label>
                            <InputGroup
                              className={last1Focus ? "input-group-focus" : ""}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons text_caps-small"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                              required={true}
                                aria-label="Last Name..."
                                autoComplete="family-name"
                                placeholder="Last Name..."
                                type="text"
                                onFocus={() => setLast1Focus(true)}
                                onBlur={() => setLast1Focus(false)}
                              ></Input>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <label>Email address</label>
                        <InputGroup
                          className={email1Focus ? "input-group-focus" : ""}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons ui-1_email-85"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                          required={true}
                            autoComplete="email"
                            placeholder="Email Here..."
                            type="email"
                            onFocus={() => setEmail1Focus(true)}
                            onBlur={() => setEmail1Focus(false)}
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Contact Number</label>
                        <InputGroup
                          className={email1Focus ? "input-group-focus" : ""}
                        >
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
                        <label>Why do you want to join us</label>
                        <Input
                          id="message"
                          name="message"
                          rows="6"
                          type="textarea"
                          placeholder='Why ?'
                          required={true}
                        ></Input>
                      </FormGroup>
                    
          
                      <Row>
                        {/* <Col md="6">
                      <FormGroup check>
            <Label check>
              <Input type="checkbox"></Input>
             I understand the Terms and Conditions {" "}
              <span className="form-check-sign">
                <span className="check"></span>
              </span>
            </Label>
          </FormGroup></Col> */}
                        <Col md="12">
                          <Button
                            className="btn-round pull-right"
                            color="info"
                            type="submit"
                          >
                            Send It !
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
            </Container></div>
      </div>
      <Footer/>
    </>
  );
}
export default FAQPage;