import React from "react";
import Rellax from "rellax";
import { Link } from "react-router-dom";
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
  UncontrolledTooltip
} from "reactstrap";

// core components
import NavigationPills from 'components/AmenitiesPagePills.js';
import  AmenitiesNavbar from "components/Navbars/AmenitiesPageNavbar.js";
import SecondaryPageHeader from "components/Headers/SecondaryPageHeader.js";
import FooterDefault from "components/Footers/FooterDefault.js";
import Footer from 'components/Footers/Myfooter';
const satyaniketanamenities = [
  { title:"Air Conditioner",
  info:' All Rooms are fiited with dedicated Air Conditioners',
    src: require("../assets/img/AC.png") ,
 
    altText: "AC"

  },
  { title:"Gym",
  info:'  All students have access to our world class gym facilities',
    src: require("../assets/img/gym.png") ,
 
    altText: "Gym"

  },
  { title:" Housekeeping",
  info:' Housekeeping service is available for all students',
    src: require("../assets/img/housekeeping.png") ,
 
    altText: "Housekeeping"

  },
   { title:"Meals",
  info:' Students are provided 4 nutritious meals everyday with alonger list of choices',
    src: require("../assets/img/meals.png") ,
 
    altText: "Meals"

  },
   { title:" Laundry",
  info:' Laundry service is available for all students',
    src: require("../assets/img/laundry.png") ,
 
    altText: "Laundry"

  },
  { title:"Reading Room",
  info:' All students have access to our Reading Room',
    src: require("../assets/img/library.png") ,
 
    altText: "Reading Room"

  }
];
const noidaamenities = [
  
  { title:"Gym",
  info:'  All students have access to our world class gym facilities',
    src: require("../assets/img/gym.png") ,
 
    altText: "Gym"

  },

   { title:"Meals",
  info:' Students are provided 4 nutritious meals everyday with a long list of choices',
    src: require("../assets/img/meals.png") ,
 
    altText: "Meals"

  },{ title:"Air Conditioner",
  info:' All Rooms are fiited with dedicated Air Conditioners',
    src: require("../assets/img/AC.png") ,
 
    altText: "AC"

  },
   { title:" Laundry",
  info:' Laundry service is available for all students',
    src: require("../assets/img/laundry.png") ,
 
    altText: "Laundry"

  },
  { title:"Reading Room",
  info:' All students have access to our Reading Room',
    src: require("../assets/img/library.png") ,
 
    altText: "Reading Room"

  },  { title:" Housekeeping",
  info:' Housekeeping service is available for all students',
    src: require("../assets/img/housekeeping.png") ,
 
    altText: "Housekeeping"

  }
];
// reactstrap components


function AmenitiesPage() {
  const [pills, setPills] = React.useState("1");
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
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
   
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>  <div
    className="bg-elements "
    style={{
      height: 0,
      width: "100%",
      marginTop: "50vh",
      position: "absolute",
      zIndex: "-1000"
    }}
  >    <div
  className="bg-elements-3 rellax  mr-auto"
  data-rellax-speed="-8"
  style={{
    marginLeft: "60vw",
    minHeight: "50px",
    maxWidth: "50px",
    borderRadius: "20%",
    backgroundColor: "rgba(255, 165, 0, 0.3)",
    transform: "rotate(45deg)"
  }}
></div>
    <div
      className="bg-elements-2 rellax mr-5 ml-auto"
      data-rellax-speed="-3"
      style={{
        minHeight: "150px",
        maxWidth: " 150px",
        borderRadius: "20%",
        backgroundColor: "rgba(255, 165, 0, 0.3)",
        transform: "rotate(45deg)"
      }}
    ></div>
    <div
      className="bg-elements-1 rellax  ml-5 mr-auto"
      data-rellax-speed="-4"
      style={{
        marginTop: "20vh",
        minHeight: "100px",
        maxWidth: "100px",
        borderRadius: "20%",
        backgroundColor: "rgba(255, 165, 0, 0.3)",
        transform: "rotate(45deg)"
      }}
    ></div>{" "}

  </div>
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

      <AmenitiesNavbar />
      <div className="wrapper" style={{background:'transparent'}}>
        <SecondaryPageHeader title='Amenities' />
        <NavigationPills items={satyaniketanamenities} items1={noidaamenities}style={{background:'transparent'}} />
        
        <Container className='my-5'>
         <Row>  <h2 data-aos="fade-left" className="title col-12" style={{fontSize:'2rem',textAlign:'center'}}>Best in class Technology</h2>
                     <Col md='6' data-aos="fade-right" style={{textAlign:'center'}} >
                    
               <img  style={{alignSelf:'center',width:'50%'}} src={require('../assets/img/jug.png')}></img>
            </Col>  
            <Col  className=" pl-5 mr-auto text-left" md="6">
                 
                  <h5 data-aos="fade-left" className="description" style={{fontSize:'0.95rem',fontFamily:'Lato'}}>
                  When R. Buckminster Fuller said "Humanity is acquiring all the right technology for all the wrong reasons.” We felt him and evolved for an effective path of communication. The STAYRIFIC app is everything you need to modernize your solutions. The app records grievances,provides solutions,listens to the changes according you and spills them in front of us and also reminds you to pay us both love and invoices. You don’t have to worry just have to feel the HOMELY feeling.
                  </h5>
                  
                  <div data-aos="fade-left" className="buttons">
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
                    </Button> */}
                    <Button
                      className="mr-3 btn-warning"
                      color="info"
                      href="#pablo"
                      onClick={e =>{e.preventDefault();
                    }}
                      size="lg"
                    >
                      Read More
                    </Button>
                  </div>
             
            </Col></Row>
                  </Container>
                  <Container className='my-5'>
              
              
                  <Row>
           
                  <h2  data-aos="fade-right" className="title col-12" style={{fontSize:'2rem',textAlign:'center'}}>Security is a prime priority</h2>
         <Col data-aos="fade-left" md='6' style={{textAlign:'center'}} >
           <img  style={{alignSelf:'center',width:'55%'}} src={require('../assets/img/foreigner2.png')}></img>
           </Col>
           <Col   className=" pl-5 mr-auto text-left" md="6">
               
               <h5 data-aos="fade-right" className="description" style={{fontSize:'0.95rem',fontFamily:'Lato'}}>
               STAYRIFIC is as secure as your mother’s lap is.
                We not only believe in manual  security but also confer your security in your hands on the app.
                 The app generates out pass and in pass according to your concerns.
                  CCTV cameras are installed and monitored every moment to make the place safer.
                   You can sleep well because there’re people working hard to make you feel the HOMELY feeling.
               </h5>
          
               <div  data-aos="fade-right" className="buttons">
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
                 </Button> */}
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
          
         </Col>
           </Row>                </Container>
               
                    
        
      

      </div>
    <Footer/>
    </>
  );
}

export default AmenitiesPage;
