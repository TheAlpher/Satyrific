import React from "react";
import {Link} from 'react-router-dom';
import Rellax from "rellax";
import { tns } from "tiny-slider/src/tiny-slider";
// declare module 'react-carousel-slider'
import CarouselSlider from "react-carousel-slider";
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
import PropertiesCards from 'components/PropertiesPageCards';
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

function PropertiesPage(props) {

    const [first1Focus, setFirst1Focus] = React.useState(false);
    const [last1Focus, setLast1Focus] = React.useState(false);
    const [email1Focus, setEmail1Focus] = React.useState(false);
    const [first2Focus, setFirst2Focus] = React.useState(false);
    const [email2Focus, setEmail2Focus] = React.useState(false);
    let data = [
        {
            des: "1",
            imgSrc: "https://i.imqur.com/yourImage.jpg"
        },
        {
            des: "2",
            imgSrc: "https://i.imqur.com/yourImage2.jpg"
        }
    ];
        var items= [
            {
                imgSrc: require('../assets/img/satyaniketan1.jpg')
            },
            {
                imgSrc: require('../assets/img/satyaniketan3.jpg')
            },
            {
                imgSrc: require('../assets/img/satyaniketan1.jpg')
            },
            {
                imgSrc: require('../assets/img/satyaniketan2.jpg')
            },
            {
                imgSrc:require('../assets/img/satyaniketan3.jpg')
            },
            {
                imgSrc: require('../assets/img/satyaniketan2.jpg')
            }
        ];
    
    let manner = {
        autoSliding: {interval: "3s"},
        duration: "2s"
    };
    
    // let accEleSetting;

    // let mobileRegx = /Mobi|Tablet|iPad|iPhone/;
    // if (mobileRegx.test(navigator.userAgent)) {
    //     accEleSetting.button = false;
    // }

    let buttonSetting = {
        placeOn: "middle-inside",
        hoverEvent: true,
        style: {
            left: {
                height: "35px",
                width: "35px",
                color: "#929393",
                background: "rgba(225, 228, 232, 0.8)",
                borderRadius: "50%"
            },
            right: {
                height: "35px",
                width: "35px",
                color: "#929393",
                background: "rgba(225, 228, 232, 0.8)",
                borderRadius: "50%"
            }
        }
    };
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
            " Students are provided 4  meals everyday with a lot of choices",
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
          title: "Reading Room",
          info: " All students have access to our Reading Room",
          src: require("../assets/img/library.png"),
      
          altText: "Reading Room"
        }
      ];
    React.useEffect(()=>{
        // var slider = tns({
        //     container: '.my-slider',
        //   controls:true,
          
        //  controlsContainer:'.my-controls',
        //     items: 3,
        //     slideBy:1,
        // nav:true,
        // navPosition:'bottom',
        //     responsive: {
        //       640: {
        //         edgePadding: 20,
        //         gutter: 20,
        //         items: 2
        //       },
        //       700: {
        //         gutter: 30
        //       },
        //       900: {
        //         items: 3,
        //         gutter: 50
        //       }
        //     }
        //   });
        //   let x=document.getElementById('slider-container').style.width;
        // document.getElementById('customize-controls').style.width=x;

        // let x1=document.getElementById('slider-internal').getBoundingClientRect().top;
        // let x2=document.getElementById('slider-internal').style.height;
        // let x1=document.getElementById('customize-controls').getBoundingClientRect().top;
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
        <SecondaryPageHeader title={props.match.params.location} />
        {/* <Container>
        <div id='slider-container'>
        <ul class="my-controls mx-auto" id="customize-controls" aria-label="Carousel Navigation" tabindex="0">
        <li class="prev" data-controls="prev" aria-controls="customize" tabindex="1">
            <i class="fas fa-angle-left fa-5x"></i>
        </li>
        <li class="next" data-controls="next" aria-controls="customize" tabindex="1">
            <i class="fas fa-angle-right fa-5x"></i>          
        </li>
    </ul>
        <div class="my-slider mx-auto" id='slider-internal'>
  <div><img src= {require('../assets/img/temp13.svg')} width="100%"/></div>
  <div><img src= {require('../assets/img/temp11.svg')} width="100%"/></div>
  <div><img src= {require('../assets/img/temp11.svg')} width="100%"/></div>
  <div><img src= {require('../assets/img/temp13.svg')} width="100%"/></div>
  <div><img src= {require('../assets/img/temp11.svg')} width="100%"/></div>
</div>
 </div> </Container>{/* <Faqs/> */}
  <Container className=' pt-5 ' >
  <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h3'   className='text-left mt-4 mb-2 ' style={{fontWeight:'bold'}}><i class="far fa-building"></i> &nbsp; 2nd Lane, Satya Niketan</CardTitle>
  <CarouselSlider slideItems = {items}  
                                manner = {manner} 
                                buttonSetting = {buttonSetting} 
                                />
                                <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h5'   className='text-center' style={{fontWeight:'bold'}}>Amenities</CardTitle>
                                <PropertiesCards items={amenitiesitems}/>



                               
        <Row
          className="contactus-2  mx-5 mb-5"
          style={{
            backgroundColor: "white",
            position: "relative",
            zIndex: "1",
          }}
        >
          <Col xs="12" sm="12" md="6" style={{ marginTop: "2%" }}>
            <div
              className="big-map"
              id="contactUsMap"
              style={{
                // position: "relative",

                overflowX: "hidden",
                height: "62vh",
              }}
            >
              <MapWrapper
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW85sBZkHfzpqR2TBk5pDm2Deq5Mt6paE"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>

            {/* <div id="map" data-aos="fade-down" data-aos-duration="1500" >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.291506663627!2d77.31577431464314!3d28.591030482434224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f6e191a8a7%3A0xb52a042cdb14632d!2sPranav%20Arts!5e0!3m2!1sen!2sin!4v1583912853373!5m2!1sen!2sin"
           frameborder="0" style={{border:"0",height:'400%',width:'100%'}} allowfullscreen="" aria-hidden="false"
              tabindex="0"></iframe>
          </div>
        */}
          </Col>
          <Col xs="12" sm="12" lg="6" md="6" style={{ marginTop: "2%" }}>
            <Card
              className="card-contact  "
              style={{
                maxWidth: "unset",
                height: "100%",
                marginLeft: 0,
                marginTop: 0,
                boxShadow: "none",
              }}
            >
           
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Contact Us</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                    <div className="info " style={{margin:'0 auto'}}>
                        <div className="icon icon-info">
                          <i className="now-ui-icons tech_mobile"></i>
                        </div>
                        <div className="description m-0">
                          <h5 className="info-title">Give us a ring</h5>
                          <p>
                            Michael Jordan <br></br>
                            +40 762 321 762 <br></br>
                            Mon - Fri, 8:00-22:00
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md="12">
                      <div className="info " style={{margin:'0 auto'}}>
                        <div className="icon icon-info">
                          <i className="now-ui-icons location_pin"></i>
                        </div>
                        <div className="description m-0">
                          <h5 className="info-title">Find us at the office</h5>
                          <p>
                            Bld Mihail Kogalniceanu, nr. 8, <br></br>
                            7652 Bucharest, <br></br>
                            Romania
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                     </CardBody>
        
            </Card>
          </Col>
        </Row>

                     
  </Container>
  <Container className=' pt-5 ' >
  <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h3'   className='text-left mt-4 mb-2 ' style={{fontWeight:'bold'}}><i class="far fa-building"></i> &nbsp; Satya Niketan Road, Satya Niketan</CardTitle>
  <CarouselSlider slideItems = {items}  
                                manner = {manner} 
                                buttonSetting = {buttonSetting} 
                                />
                                <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h5'   className='text-center' style={{fontWeight:'bold'}}>Amenities</CardTitle>
                                <PropertiesCards items={amenitiesitems}/>



                               
        <Row
          className="contactus-2  mx-5 mb-5"
          style={{
            backgroundColor: "white",
            position: "relative",
            zIndex: "1",
          }}
        >
          <Col xs="12" sm="12" md="6" style={{ marginTop: "2%" }}>
            <div
              className="big-map"
              id="contactUsMap"
              style={{
                // position: "relative",

                overflowX: "hidden",
                height: "62vh",
              }}
            >
              <MapWrapper
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW85sBZkHfzpqR2TBk5pDm2Deq5Mt6paE"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>

            {/* <div id="map" data-aos="fade-down" data-aos-duration="1500" >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.291506663627!2d77.31577431464314!3d28.591030482434224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f6e191a8a7%3A0xb52a042cdb14632d!2sPranav%20Arts!5e0!3m2!1sen!2sin!4v1583912853373!5m2!1sen!2sin"
           frameborder="0" style={{border:"0",height:'400%',width:'100%'}} allowfullscreen="" aria-hidden="false"
              tabindex="0"></iframe>
          </div>
        */}
          </Col>
          <Col xs="12" sm="12" lg="6" md="6" style={{ marginTop: "2%" }}>
            <Card
              className="card-contact  "
              style={{
                maxWidth: "unset",
                height: "100%",
                marginLeft: 0,
                marginTop: 0,
                boxShadow: "none",
              }}
            >
           
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Contact Us</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                    <div className="info " style={{margin:'0 auto'}}>
                        <div className="icon icon-info">
                          <i className="now-ui-icons tech_mobile"></i>
                        </div>
                        <div className="description m-0">
                          <h5 className="info-title">Give us a ring</h5>
                          <p>
                            Michael Jordan <br></br>
                            +40 762 321 762 <br></br>
                            Mon - Fri, 8:00-22:00
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md="12">
                      <div className="info " style={{margin:'0 auto'}}>
                        <div className="icon icon-info">
                          <i className="now-ui-icons location_pin"></i>
                        </div>
                        <div className="description m-0">
                          <h5 className="info-title">Find us at the office</h5>
                          <p>
                            Bld Mihail Kogalniceanu, nr. 8, <br></br>
                            7652 Bucharest, <br></br>
                            Romania
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                     </CardBody>
        
            </Card>
          </Col>
        </Row>

                     
  </Container>
  <Container className=' pt-5 ' >
  <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h3'   className='text-left mt-4 mb-2 ' style={{fontWeight:'bold'}}><i class="far fa-building"></i> &nbsp; Nanakpura Road, Satya Niketan</CardTitle>
  <CarouselSlider slideItems = {items}  
                                manner = {manner} 
                                buttonSetting = {buttonSetting} 
                                />
                                <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h5'   className='text-center' style={{fontWeight:'bold'}}>Amenities</CardTitle>
                                <PropertiesCards items={amenitiesitems}/>



                               
        <Row
          className="contactus-2  mx-5 mb-5"
          style={{
            backgroundColor: "white",
            position: "relative",
            zIndex: "1",
          }}
        >
          <Col xs="12" sm="12" md="6" style={{ marginTop: "2%" }}>
            <div
              className="big-map"
              id="contactUsMap"
              style={{
                // position: "relative",

                overflowX: "hidden",
                height: "62vh",
              }}
            >
              <MapWrapper
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW85sBZkHfzpqR2TBk5pDm2Deq5Mt6paE"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>

            {/* <div id="map" data-aos="fade-down" data-aos-duration="1500" >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.291506663627!2d77.31577431464314!3d28.591030482434224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f6e191a8a7%3A0xb52a042cdb14632d!2sPranav%20Arts!5e0!3m2!1sen!2sin!4v1583912853373!5m2!1sen!2sin"
           frameborder="0" style={{border:"0",height:'400%',width:'100%'}} allowfullscreen="" aria-hidden="false"
              tabindex="0"></iframe>
          </div>
        */}
          </Col>
          <Col xs="12" sm="12" lg="6" md="6" style={{ marginTop: "2%" }}>
            <Card
              className="card-contact  "
              style={{
                maxWidth: "unset",
                height: "100%",
                marginLeft: 0,
                marginTop: 0,
                boxShadow: "none",
              }}
            >
           
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Contact Us</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                    <div className="info " style={{margin:'0 auto'}}>
                        <div className="icon icon-info">
                          <i className="now-ui-icons tech_mobile"></i>
                        </div>
                        <div className="description m-0">
                          <h5 className="info-title">Give us a ring</h5>
                          <p>
                            Michael Jordan <br></br>
                            +40 762 321 762 <br></br>
                            Mon - Fri, 8:00-22:00
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md="12">
                      <div className="info " style={{margin:'0 auto'}}>
                        <div className="icon icon-info">
                          <i className="now-ui-icons location_pin"></i>
                        </div>
                        <div className="description m-0">
                          <h5 className="info-title">Find us at the office</h5>
                          <p>
                            Bld Mihail Kogalniceanu, nr. 8, <br></br>
                            7652 Bucharest, <br></br>
                            Romania
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                     </CardBody>
        
            </Card>
          </Col>
        </Row>

                     
  </Container>
  
    {/* <CustomUpload/> */}
      </div>
      <Footer/>
    </>
  );
}
export default PropertiesPage;