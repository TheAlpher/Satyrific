import React,{Component} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Link , animateScroll as scroll } from "react-scroll";
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'; 
import { tns } from "tiny-slider/src/tiny-slider";
// declare module 'react-carousel-slider'
import CarouselSlider from "react-carousel-slider";
// import LandingPageCards from './LandingPageCards.js';
import PropertiesCards from 'components/PropertiesPageCards';
import PropertiesCarousel from './PropertiesPageCarousel';
// reactstrap components
import {
  NavItem,
NavLink,
  Nav,
  TabContent,
  TabPane,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,Button,
} from "reactstrap";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
  } from "react-google-maps";
// import { defaultProps } from "react-select/src/Select";

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
// core components
AOS.init();
function renderCarousel(){

}

const  items1= [
 
  {
      imgSrc: require('../assets/img/satyaniketan3.jpg'),
      
  },
  {
    imgSrc:  require('../assets/img/satyaniketan2.jpg'),
    
},
  {
      imgSrc: require('../assets/img/satyaniketan1.jpg'),
      
  },
  {
      imgSrc: require('../assets/img/satyaniketan2.jpg'),
      
  },
  {
      imgSrc:require('../assets/img/satyaniketan3.jpg'),
      
  },
  {
      imgSrc: require('../assets/img/satyaniketan1.jpg'),
      
  }
];
const  items= [
  {
      imgSrc: require('../assets/img/satyaniketan1.jpg'),
      
  },
  {
      imgSrc: require('../assets/img/satyaniketan2.jpg'),
      
  },
  {
      imgSrc: require('../assets/img/satyaniketan1.jpg'),
      
  },
  {
      imgSrc: require('../assets/img/satyaniketan2.jpg'),
      
  },
  {
      imgSrc:require('../assets/img/satyaniketan1.jpg'),
      
  },
  {
      imgSrc: require('../assets/img/satyaniketan2.jpg'),
      
  }
];
let autoSliding1={
  items:items1
}
let autoSliding2={
  items:items
}
let autoSliding3={
  items:items1
}
const amenitiesitems = [
    {
      title: "Air Conditioner",
      info: " All Rooms are fiited with dedicated Air Conditioners",
      src: require("../assets/img/AC.png"),
  
      altText: "AC",
    },
    {
      title: "Gym",
      info: "  All students have access to our world class gym facilities",
      src: require("../assets/img/gym.png"),
  
      altText: "Gym",
    },
    {
      title: " Housekeeping",
      info: " Housekeeping service is available for all students",
      src: require("../assets/img/housekeeping.png"),
  
      altText: "Housekeeping",
    },
    {
      title: "Meals",
      info: " Students are provided 4  meals everyday with a lot of choices",
      src: require("../assets/img/meals.png"),
  
      altText: "Meals",
    },
    {
      title: " Laundry",
      info: " Laundry service is available for all students",
      src: require("../assets/img/laundry.png"),
  
      altText: "Laundry",
    },
    {
      title: "Reading Room",
      info: " All students have access to our Reading Room",
      src: require("../assets/img/library.png"),
  
      altText: "Reading Room",
    },
  ];
const communityitems = [
  {
    title: "Weekly Events",
    info: " All Rooms are fiited with dedicated Air Conditioners",
    src: require("../assets/img/AC.png"),

    altText: "AC",
  },
  {
    title: "Movie Nights",
    info: "  All students have access to our world class gym facilities",
    src: require("../assets/img/gym.png"),

    altText: "Gym",
  },
  
];
const technologyitems = [
  {
    title: "App Based Stay",
    info: " All Rooms are fiited with dedicated Air Conditioners",
    src: require("../assets/img/AC.png"),

    altText: "AC",
  },
  {
    title: "Online Payments",
    info: "  All students have access to our world class gym facilities",
    src: require("../assets/img/gym.png"),

    altText: "Gym",
  },
  
];
const securityitems = [
  {
    title: "Fully Guarded Campus",
    info: " All Rooms are fiited with dedicated Air Conditioners",
    src: require("../assets/img/AC.png"),

    altText: "AC",
  },
  {
    title: "Biometrics",
    info: "  All students have access to our world class gym facilities",
    src: require("../assets/img/gym.png"),

    altText: "Gym",
  },
  
];
function Pills(props) {

    
  const [horizontalTabs, setHorizontalTabs] = React.useState("1");
const [imgitems,SetImgItems]=React.useState(autoSliding1);

  return (
    <>
     <div className='mx-1 pt-5 mt-5 '>
<Nav className="mx-2 propertiestabs" pills role="tablist" style={{justifyContent:'center'}}>
                  <NavItem className='mx-1 my-1 propertiespillslink' >
                    <NavLink
                      className={horizontalTabs === "1" ? "nav-link1 active " : "nav-link1 "}
                      href="#pablo"
                      style={{ border:'0 ',border:'1px solid transparent !important'}}
                      onClick={e => {
                        e.preventDefault();
                        setHorizontalTabs("1");
                        SetImgItems(autoSliding1);
                      }}
                    >&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-building"></i>
                       <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h4'   className='text-left mt-3 mb-2 ' style={{display:'flex'}}> &nbsp; 2nd Lane, Satya Niketan</CardTitle>
                       &nbsp; &nbsp;  </NavLink>
                  </NavItem>
                  <NavItem className='mx-1 my-1 propertiespillslink'>
                    <NavLink
                      className={horizontalTabs === "2" ? "nav-link1 active " : "nav-link1"}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setHorizontalTabs("2");
                        SetImgItems(autoSliding2);
                      }}
                    ><i className="far fa-building"></i>
             <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h5'   className='text-left mt-3 mb-2 ' style={{display:'flex'}}> &nbsp; Satya Niketan Road, Satya Niketan</CardTitle>
                    </NavLink>
                  </NavItem>
                  <NavItem className='mx-1 my-1 propertiespillslink'>
                    <NavLink
                      className={horizontalTabs === "3" ? "nav-link1 active " : "nav-link1"}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setHorizontalTabs("3");
                        SetImgItems(autoSliding3);
                      }}
                    >
                        <i className="far fa-building"></i>
                     <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h5'   className='text-left mt-3 mb-2 ' style={{display:'flex'}}> &nbsp; Nanakpura Road, Satya Niketan</CardTitle>
                    </NavLink>
                  </NavItem>
                </Nav>
                <PropertiesCarousel items={imgitems}/>

                <TabContent
                  className="tab-space"
                  activeTab={"horizontalTabs" + horizontalTabs}
                >
                  <TabPane tabId="horizontalTabs1" className=' pt-5 ' style={{marginLeft:'9%',marginRight:'9%'}} >
             

                              <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h5'   className='text-center' style={{fontWeight:'bold'}}>Amenities</CardTitle>
                              <PropertiesCards items={amenitiesitems}/>



                             
      <Row
        className="contactus-2   mb-5"
        style={{
          backgroundColor: "white",
          position: "relative",
          zIndex: "1",
        }}
      >
        <Col xs="12" sm="12" md="6" style={{ marginTop: "2%" }}>
          <div
            className="big-map"
            id="contactUsMap1"
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

                   


                  </TabPane>
                  <TabPane tabId="horizontalTabs2" className=' pt-5 ' style={{marginLeft:'9%',marginRight:'9%'}}>

                  
                               <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h5'   className='text-center' style={{fontWeight:'bold'}}>Amenities</CardTitle>
                               <PropertiesCards items={amenitiesitems}/>



                              
       <Row
         className="contactus-2   mb-5"
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

                    


                  </TabPane>
                  <TabPane tabId="horizontalTabs3" className=' pt-5 ' style={{marginLeft:'9%',marginRight:'9%'}}>

                  
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

                    

 
                  </TabPane>
                </TabContent>
                </div>           
       </>
  );
}

export default Pills;
