// import React from "react";
// import {Link} from 'react-router-dom';
// import Rellax from "rellax";
// import {
//   Badge,
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   CardTitle,
//   Label,
//   FormGroup,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   NavItem,
//   NavLink,
//   Nav,

//   TabContent,
//   TabPane,
//   Container,
//   Row,
//   Col,
//   CardFooter,
//   UncontrolledTooltip
// } from "reactstrap";
// import {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap,
//     Marker
//   } from "react-google-maps";
// import ContactUsNavbar from "components/Navbars/ContactUsPageNavbar.js";
// import SecondaryPageHeader from "components/Headers/SecondaryPageHeader.js";
// import Footer from 'components/Footers/Myfooter';
// const MapWrapper = withScriptjs(
//     withGoogleMap(props => (
//       <GoogleMap
//         defaultZoom={13}
//         defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
//         defaultOptions={{
//           scrollwheel: false,
//           styles: [
//             {
//               featureType: "water",
//               elementType: "geometry",
//               stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
//             },
//             {
//               featureType: "landscape",
//               elementType: "geometry",
//               stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
//             },
//             {
//               featureType: "road.highway",
//               elementType: "geometry.fill",
//               stylers: [{ color: "#ffffff" }, { lightness: 17 }]
//             },
//             {
//               featureType: "road.highway",
//               elementType: "geometry.stroke",
//               stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }]
//             },
//             {
//               featureType: "road.arterial",
//               elementType: "geometry",
//               stylers: [{ color: "#ffffff" }, { lightness: 18 }]
//             },
//             {
//               featureType: "road.local",
//               elementType: "geometry",
//               stylers: [{ color: "#ffffff" }, { lightness: 16 }]
//             },
//             {
//               featureType: "poi",
//               elementType: "geometry",
//               stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]
//             },
//             {
//               featureType: "poi.park",
//               elementType: "geometry",
//               stylers: [{ color: "#dedede" }, { lightness: 21 }]
//             },
//             {
//               elementType: "labels.text.stroke",
//               stylers: [
//                 { visibility: "on" },
//                 { color: "#ffffff" },
//                 { lightness: 16 }
//               ]
//             },
//             {
//               elementType: "labels.text.fill",
//               stylers: [
//                 { saturation: 36 },
//                 { color: "#333333" },
//                 { lightness: 40 }
//               ]
//             },
//             { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
//             {
//               featureType: "transit",
//               elementType: "geometry",
//               stylers: [{ color: "#f2f2f2" }, { lightness: 19 }]
//             },
//             {
//               featureType: "administrative",
//               elementType: "geometry.fill",
//               stylers: [{ color: "#fefefe" }, { lightness: 20 }]
//             },
//             {
//               featureType: "administrative",
//               elementType: "geometry.stroke",
//               stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }]
//             }
//           ]
//         }}
//       >
//         <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
//       </GoogleMap>
//     ))
//   );
// function ContactUsPage(props) {
//     const [first1Focus, setFirst1Focus] = React.useState(false);
//     const [last1Focus, setLast1Focus] = React.useState(false);
//     const [email1Focus, setEmail1Focus] = React.useState(false);
//     const [first2Focus, setFirst2Focus] = React.useState(false);
//     const [email2Focus, setEmail2Focus] = React.useState(false);
//     React.useEffect(()=>{
//         if (window.innerWidth >= 801) {
//             setTimeout(function() {
//               new Rellax(".rellax", {
//                 center: false
//               });
//             }, 100);
//             new Rellax(".rellax-header");
//             new Rellax(".rellax-text");
//           }
      
//     })
//   return (
//     <>
//     <div className='bg-elements ' style={{height:0,width:'100%',marginTop:"30vh", position:'absolute',zIndex:'-1000'}}>
//        <div className="bg-elements-1 rellax  ml-5 mr-auto"  data-rellax-speed="-7" style={{minHeight:'100px',maxWidth:'100px',borderRadius:'20%', backgroundColor:'rgba(255, 165, 0, 0.3)',transform:'rotate(45deg)'}}></div> 
//        <div className="bg-elements-2 rellax mr-5 ml-auto"  data-rellax-speed='-3' style={{ minHeight:'150px',maxWidth:' 150px',borderRadius:'20%', backgroundColor:'rgba(255, 165, 0, 0.3)',transform:'rotate(45deg)'}}></div>
//        <div className="bg-elements-3 rellax  mr-auto"  data-rellax-speed='10' style={{ zIndex:'-1000' ,marginLeft:'40vw',minHeight:'50px',maxWidth:'50px',borderRadius:'20%', backgroundColor:'rgba(255, 165, 0, 0.3)',transform:'rotate(45deg)'}}></div>
//        </div>      
//        <div id="hovericonscontainer">
//         <Link to="#">
//           <i
//             id="hovericons1"
//             className="mx-2 my-3  hovericons fab fa-2x fa-instagram"
//           ></i>
//         </Link>
//         <br />
//         <Link to="#">
//           <i
//             id="hovericons2"
//             className="mx-2 my-3 hovericons fab fa-2x fa-facebook"
//           ></i>
//         </Link>
//         <br />
//         <Link to="#">
//           {" "}
//           <i
//             id="hovericons3"
//             className="mx-2 my-3 hovericons fab fa-2x fa-twitter"
//           ></i>
//         </Link>
//         <br />
//         <Link to="#">
//           <i
//             id="hovericons4"
//             className="mx-2 my-3  hovericons fab fa-2x fa-linkedin"
//           ></i>
//         </Link>
//       </div>
// <ContactUsNavbar />
//       <div className="wrapper">
//         <SecondaryPageHeader title="Contact Us" />
//         <div className="cd-section mt-5 pt-5" id="contact-us" style={{background:'transparent'}}>

        
        
     
//                 <h2 className="title" style={{color:'black',textAlign:'center'}}>You need more information?</h2>
//                 {/* <h4 className="description" style={{color:'black',textAlign:'center'}}>
//                  <b>Contact Us</b>  
//                 </h4>   */}
              
//                 <Row className="contactus-2  mb-5" style={{background:'transparent'}} >
//        <Col  xs='12' sm='12' md='6'style={{paddingLeft:'2%',marginTop:'2%', paddingRight:'2%'}}>
//          <div
//           className="big-map"
//           id="contactUsMap"
//           style={{
//             // position: "relative",
           
//             overflow: "hidden",
//             height: "67vh",
         
//           }}
//         >
//           <MapWrapper
//             googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW85sBZkHfzpqR2TBk5pDm2Deq5Mt6paE"
//             loadingElement={<div style={{ height: `100%` }} />}
//             containerElement={<div style={{ height: `100%` }} />}
//             mapElement={<div style={{ height: `100%` }} />}
//           />
//         </div>
//         </Col>   
//           <Col xs='12' sm='12' lg="6" md="6" style={{marginTop:'2%',paddingRight:'2%'}} >
//           <Card className="card-contact card-raised" style={{maxWidth:'unset',height:'100%',marginLeft:0,marginTop:0}}>
//                   <Form id="contact-form1" method="post" role="form">
//                     <CardHeader className="text-center">
//                       <CardTitle tag="h4">Request a Call</CardTitle>
//                     </CardHeader>
//                     <CardBody>
//                       <Row>
//                         <Col className="pr-2" md="6">
//                           <label>First name</label>
//                           <InputGroup
//                             className={first1Focus ? "input-group-focus" : ""}
//                           >
//                             <InputGroupAddon addonType="prepend">
//                               <InputGroupText>
//                                 <i className="now-ui-icons users_circle-08"></i>
//                               </InputGroupText>
//                             </InputGroupAddon>
//                             <Input
//                             required={true}
//                               aria-label="First Name..."
//                               autoComplete="given-name"
//                               placeholder="First Name..."
//                               type="text"
//                               onFocus={() => setFirst1Focus(true)}
//                               onBlur={() => setFirst1Focus(false)}
//                             ></Input>
//                           </InputGroup>
//                         </Col>
//                         <Col className="pl-2" md="6">
//                           <FormGroup>
//                             <label>Last name</label>
//                             <InputGroup
//                               className={last1Focus ? "input-group-focus" : ""}
//                             >
//                               <InputGroupAddon addonType="prepend">
//                                 <InputGroupText>
//                                   <i className="now-ui-icons text_caps-small"></i>
//                                 </InputGroupText>
//                               </InputGroupAddon>
//                               <Input
//                               required={true}
//                                 aria-label="Last Name..."
//                                 autoComplete="family-name"
//                                 placeholder="Last Name..."
//                                 type="text"
//                                 onFocus={() => setLast1Focus(true)}
//                                 onBlur={() => setLast1Focus(false)}
//                               ></Input>
//                             </InputGroup>
//                           </FormGroup>
//                         </Col>
//                       </Row>
//                       <FormGroup>
//                         <InputGroup>
//                       <InputGroupAddon addonType="prepend">
//                             <InputGroupText>
//                               <i className="now-ui-icons tech_mobile"></i>
//                             </InputGroupText>
//                           </InputGroupAddon>
//                           <Input
//                           required={true}
//                             // autoComplete="phone"
//                             placeholder="12345-67890"
//                             pattern="[0-9]{5}-[0-9]{5}"
//                             type="tel"
//                             onFocus={() => setEmail1Focus(true)}
//                             onBlur={() => setEmail1Focus(false)}
//                           ></Input>
//                         </InputGroup>
//                       </FormGroup>
//                       <FormGroup>
//                         <label>Your message</label>
//                         <Input
//                         required={true}
//                           id="message"
//                           name="message"
//                           rows="6"
//                           type="textarea"
//                         ></Input>
//                       </FormGroup>
//                       <Row>
        
//                         <Col md="6">
//                           <Button
//                             className="btn-round pull-left"
//                             color="info"
//                             type="submit"
//                           >
//                             Send Message
//                           </Button>
//                         </Col>
//                       </Row>
//                     </CardBody>
//                   </Form>
//                 </Card>
//         </Col>
//       </Row>

     
     
     
      
//       </div>
  
//       </div>
//       <Footer/>
//     </>
//   );
// }
// export default ContactUsPage;