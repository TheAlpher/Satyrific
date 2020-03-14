import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Footer1 from "components/Footers/FooterSocial";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// reactstrap components
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavItem,
  NavLink,
  Nav,
  Label,
  Form,
  FormGroup,
  CardHeader,
  Container,
  Row,
  Col,
  TabContent,
  TabPane
} from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link to='#'> for styles
// ..
import Features1 from "components/LandingPageFeatures";
import GridContainer from "assets/jss/GridContainer";
import GridItem from "assets/jss/GridItem";
// core components
// import DropdownFixedNavbar from "components/Navbars/DropdownFixedNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import LandingPageHeader2 from "components/Headers/MyHeader";
import LandingPageHeader3 from "components/Headers/Myheader1";
import ReviewsCarousel from "components/Headers/ReviewCarousel";
import LandingPills from "components/LandingPagePills";
import LandingPageHeader1 from "components/Headers/LandingPageHeader1.js";
import Subject from "@material-ui/icons/Subject";
import Success from "assets/jss/Success";
import Faqs from "components/LandingPageFaqs";
import { Link } from "react-router-dom";
import styles from "assets/jss/sectionCards.js";
// import FooterDefault from "components/Footers/FooterDefault.js";
AOS.init();
const useStyles = makeStyles(styles);
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
function LandingPage(props) {
  const [first1Focus, setFirst1Focus] = React.useState(false);
  const [last1Focus, setLast1Focus] = React.useState(false);
  const [email1Focus, setEmail1Focus] = React.useState(false);
  const [first2Focus, setFirst2Focus] = React.useState(false);
  const [email2Focus, setEmail2Focus] = React.useState(false);
  const [activeRotate1, setActiveRotate1] = React.useState("");
  const [activeRotate2, setActiveRotate2] = React.useState("");
  const [activeRotate3, setActiveRotate3] = React.useState("");
  const classes = useStyles();
  function addbackground(e) {
    e.target.classList.add("card-background");
    e.target.classList.add("card-raised");
  }
  function removebackground(e) {
    e.target.classList.remove("card-background");
    e.target.classList.remove("card-raised");
  }
  let add = null;
  const [pills, setPills] = React.useState("1");
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [additionaldetails, setDetails] = React.useState(null);
  const [toggledetailsbuttonvalue, settoggledetailsbutton] = React.useState(
    "See Details"
  );
  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }
    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  return (
    <React.Fragment>
        <div id='hovericonscontainer'>
    <Link to='#'><i  id='hovericons1'
        className="mx-2 my-3  hovericons fab fa-2x fa-instagram"></i></Link><br />
    <Link to='#'><i  id='hovericons2'
        className="mx-2 my-3 hovericons fab fa-2x fa-facebook"></i></Link><br />
    <Link to='#'> <i  id='hovericons3'
        className="mx-2 my-3 hovericons fab fa-2x fa-twitter"></i></Link><br />
    <Link to='#'><i  id='hovericons4'
        className="mx-2 my-3  hovericons fab fa-2x fa-pinterest"></i></Link>
  </div>
      <LandingPageHeader3 />
      <LandingPageHeader2 /> 
      {/* <Container>
        <div
          className=" social-line social-line-big-icons social-line-white"
          // style={{background:'#920ce8'}}
        >
          <CardTitle
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            tag="h4"
            className="text-center"
            style={{}}
          >
            Current Locations
          </CardTitle>
          <Container className="text-center">
            <Row style={{ justifyContent: "center" }}>
              <Col md="4" sm="4">
                {/* <Button
                    className="btn-neutral btn-icon btn-footer"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                
                <img src={require("assets/img/hostel1.png")} />
                <CardTitle
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  tag="h4"
                  className="text-center"
                  style={{ marginTop: 0, marginBottom: 0 }}
                >
                  Satya Niketan{" "}
                </CardTitle>
              </Col>
              <Col md="4" sm="4">
                {/* <Button
                   className="btn-neutral btn-icon btn-footer"
                   color="twitter"
                   href="#pablo"
                   onClick={e => e.preventDefault()}
                 >
                   <i className="fab fa-twitter"></i>
                 </Button>
           
                <img src={require("assets/img/hostel2.png")} />
                <CardTitle
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  tag="h4"
                  className="text-center"
                  style={{ marginTop: 0, marginBottom: 0 }}
                >
                  Noida{" "}
                </CardTitle>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
     */}
    
      <LandingPills />
      
      <Container className="mb-5">
        <CardTitle
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          tag="h2"
          className="text-center py-5"
          style={{}}
        >
          Amenities{" "}
        </CardTitle>
        <GridContainer className="my-2 py-3">
          <GridItem data-aos="zoom-in-up" xs={12} sm={6} md={6} lg={4}>
            <div className={classes.rotatingCardContainer}>
              <Card className={classes.cardRotate}>
                <div className={classes.front}>
                  <CardBody
                    className={classes.cardBodyRotate}
                    style={{ minHeight: "35vh" }}
                  >
                               <h5
                      className={classes.cardTitle}
                      style={{ fontFamily: "Lato",textAlign:'center' }}
                    >
                      Air Conditioner
                    </h5>
                    <img
                      className="mx-auto my-auto"
                      src={require("../assets/img/AC.png")}
                      width="80%"
                    />
                    {/* <Success>
                      <h5 className={classes.cardCategorySocial}>
                        <i className="far fa-newspaper" />
                        TechCrunch
                      </h5>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        This Card is Doing a Full Rotation on Hover...
                      </Link>
                    </h4>
                    <p className={classes.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth And I love you like
                      Kanye loves Kanye I love Rick Owens’ bed design but the
                      back is...
                    </p> */}
                  </CardBody>
                </div>
                <div className={classes.back}>
                  <CardBody
                    className={classes.cardBodyRotate}
                    style={{ border: "1px solid orange" }}
                  >
         
                    <p className={classes.cardDescription}>
                      All Rooms are fiited with dedicated Air Conditioners
                    </p>
                    {/* <div className={classes.textCenter}>
                      <Button round color="rose">
                        <Subject /> Read
                      </Button>
                      <Button round justIcon color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button round justIcon color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button round justIcon color="facebook">
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  */}
                  </CardBody>
                </div>
              </Card>
            </div>
          </GridItem>

          <GridItem data-aos="zoom-in-up" xs={12} sm={6} md={6} lg={4}>
            <div className={classes.rotatingCardContainer}>
              <Card className={classes.cardRotate}>
                <div className={classes.front}>
                  <CardBody
                    className={classes.cardBodyRotate}
                    style={{ minHeight: "35vh" }}
                  ><h5
                  className={classes.cardTitle}
                  style={{ fontFamily: "Lato",textAlign:'center' }}
                >
                  Gym
                </h5>
                    <img
                      className="mx-auto my-auto"
                      src={require("../assets/img/gym.png")}
                      width="80%"
                    />
                    {/* <Success>
                      <h5 className={classes.cardCategorySocial}>
                        <i className="far fa-newspaper" />
                        TechCrunch
                      </h5>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        This Card is Doing a Full Rotation on Hover...
                      </Link>
                    </h4>
                    <p className={classes.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth And I love you like
                      Kanye loves Kanye I love Rick Owens’ bed design but the
                      back is...
                    </p> */}
                  </CardBody>
                </div>
                <div className={classes.back}>
                  <CardBody
                    className={classes.cardBodyRotate}
                    style={{ border: "1px solid orange" }}
                  >
                    
                    <p className={classes.cardDescription}>
                      All students have access to our world class gym facilities
                    </p>
                    {/* <div className={classes.textCenter}>
                      <Button round color="rose">
                        <Subject /> Read
                      </Button>
                      <Button round justIcon color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button round justIcon color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button round justIcon color="facebook">
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  */}
                  </CardBody>
                </div>
              </Card>
            </div>
          </GridItem>
          <GridItem data-aos="zoom-in-up" xs={12} sm={6} md={6} lg={4}>
            <div className={classes.rotatingCardContainer}>
              <Card className={classes.cardRotate}>
                <div className={classes.front}>
                  <CardBody
                    className={classes.cardBodyRotate}
                    style={{ minHeight: "35vh" }}
                  > <h5
                  className={classes.cardTitle}
                  style={{ fontFamily: "Lato",textAlign:'center' }}
                >
                  Housekeeping
                </h5>
                    <img
                      className="mx-auto my-auto"
                      src={require("../assets/img/housekeeping.png")}
                      width="80%"
                    />
                    {/* <Success>
                      <h5 className={classes.cardCategorySocial}>
                        <i className="far fa-newspaper" />
                        TechCrunch
                      </h5>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        This Card is Doing a Full Rotation on Hover...
                      </Link>
                    </h4>
                    <p className={classes.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth And I love you like
                      Kanye loves Kanye I love Rick Owens’ bed design but the
                      back is...
                    </p> */}
                  </CardBody>
                </div>
                <div className={classes.back}>
                  <CardBody
                    className={classes.cardBodyRotate}
                    style={{ border: "1px solid orange" }}
                  >
                   
                    <p className={classes.cardDescription}>
                      Housekeeping service is available for all students
                    </p>
                    {/* <div className={classes.textCenter}>
                      <Button round color="rose">
                        <Subject /> Read
                      </Button>
                      <Button round justIcon color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button round justIcon color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button round justIcon color="facebook">
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  */}
                  </CardBody>
                </div>
              </Card>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer className="my-2 py-3">
          <GridItem data-aos="zoom-in-up" xs={12} sm={6} md={6} lg={4}>
            <div className={classes.rotatingCardContainer}>
              <Card className={classes.cardRotate}>
                <div className={classes.front}>
                  <CardBody
                    className={classes.cardBodyRotate}
                    style={{ minHeight: "35vh" }}
                  >               <h5
                  className={classes.cardTitle}
                  style={{ fontFamily: "Lato",textAlign:'center' }}
                >
                  Meals
                </h5>
                    <img
                      className="mx-auto my-auto"
                      src={require("../assets/img/meals.png")}
                      width="80%"
                    />
                    {/* <Success>
                      <h5 className={classes.cardCategorySocial}>
                        <i className="far fa-newspaper" />
                        TechCrunch
                      </h5>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        This Card is Doing a Full Rotation on Hover...
                      </Link>
                    </h4>
                    <p className={classes.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth And I love you like
                      Kanye loves Kanye I love Rick Owens’ bed design but the
                      back is...
                    </p> */}
                  </CardBody>
                </div>
                <div className={classes.back}>
                  <CardBody
                    className={classes.cardBodyRotate}
                    style={{ border: "1px solid orange" }}
                  >
     
                    <p className={classes.cardDescription}>
                      Students are provided 4 nutritious meals everyday with a
                      longer list of choices
                    </p>
                    {/* <div className={classes.textCenter}>
                      <Button round color="rose">
                        <Subject /> Read
                      </Button>
                      <Button round justIcon color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button round justIcon color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button round justIcon color="facebook">
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  */}
                  </CardBody>
                </div>
              </Card>
            </div>
          </GridItem>

          <GridItem data-aos="zoom-in-up" xs={12} sm={6} md={6} lg={4}>
            <div className={classes.rotatingCardContainer}>
              <Card className={classes.cardRotate}>
                <div className={classes.front}>
                  <CardBody
                    className={classes.cardBodyRotate}
                    style={{ minHeight: "35vh" }}
                  >      <h5
                  className={classes.cardTitle}
                  style={{ fontFamily: "Lato",textAlign:'center' }}
                >
                  Laundry
                </h5>
                    <img
                      className="mx-auto my-auto"
                      src={require("../assets/img/laundry.png")}
                      width="80%"
                    />
                    {/* <Success>
                      <h5 className={classes.cardCategorySocial}>
                        <i className="far fa-newspaper" />
                        TechCrunch
                      </h5>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        This Card is Doing a Full Rotation on Hover...
                      </Link>
                    </h4>
                    <p className={classes.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth And I love you like
                      Kanye loves Kanye I love Rick Owens’ bed design but the
                      back is...
                    </p> */}
                  </CardBody>
                </div>
                <div className={classes.back}>
                  <CardBody
                    className={classes.cardBodyRotate}
                    style={{ border: "1px solid orange" }}
                  >
              
                    <p className={classes.cardDescription}>
                      Laundry service is available for all students
                    </p>
                    {/* <div className={classes.textCenter}>
                      <Button round color="rose">
                        <Subject /> Read
                      </Button>
                      <Button round justIcon color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button round justIcon color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button round justIcon color="facebook">
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  */}
                  </CardBody>
                </div>
              </Card>
            </div>
          </GridItem>

          <GridItem data-aos="zoom-in-up" xs={12} sm={6} md={6} lg={4}>
            <div className={classes.rotatingCardContainer}>
              <Card className={classes.cardRotate}>
                <div className={classes.front}>
                  <CardBody
                    className={classes.cardBodyRotate}
                    style={{ minHeight: "35vh" }}
                  >                 <h5
                  className={classes.cardTitle}
                  style={{ fontFamily: "Lato",textAlign:'center' }}
                >
                  Library
                </h5>
                    <img
                      className="mx-auto my-auto"
                      src={require("../assets/img/library.png")}
                      width="80%"
                    />
                    {/* <Success>
                      <h5 className={classes.cardCategorySocial}>
                        <i className="far fa-newspaper" />
                        TechCrunch
                      </h5>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        This Card is Doing a Full Rotation on Hover...
                      </Link>
                    </h4>
                    <p className={classes.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth And I love you like
                      Kanye loves Kanye I love Rick Owens’ bed design but the
                      back is...
                    </p> */}
                  </CardBody>
                </div>
                <div className={classes.back}>
                  <CardBody
                    className={classes.cardBodyRotate}
                    style={{ border: "1px solid orange" }}
                  >
   
                    <p className={classes.cardDescription}>
                      All students have access to our Library
                    </p>
                    {/* <div className={classes.textCenter}>
                      <Button round color="rose">
                        <Subject /> Read
                      </Button>
                      <Button round justIcon color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button round justIcon color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button round justIcon color="facebook">
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  */}
                  </CardBody>
                </div>
              </Card>
            </div>
          </GridItem>
        </GridContainer>
      </Container>

      <ReviewsCarousel />
      {/* <Features1 /> */}
      {/* <Faqs /> */}
      {/* <div className="wrapper">
        <Container>
          <Row>
            <Col md="4">
              {" "}
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="title"
                style={{ fontSize: "2rem" }}
              >
                History of surfing
              </h2>
              <hr
                data-aos="zoom-in-right"
                data-aos-duration="2000"
                style={{
                  width: "25%",
                  marginLeft: "0px",
                  alignSelf: "flex-start",
                  border: "3px solid orange",
                  borderRadius: "3px"
                }}
              />
              <h5
                data-aos="fade-right"
                data-aos-duration="1000"
                className="description"
                style={{ fontSize: "1rem" }}
              >
                The riding of waves has likely existed since humans began
                swimming in the ocean. In this sense, bodysurfing is the oldest
                type of wave-catching. Standing up on what is now called a
                surfboard is a relatively recent innovation developed by the
                Polynesians.
              </h5>
              <br />
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="buttons"
              >
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
            <Col md="8">
              <Row>
                <Col md="6">
                  {" "}
                  <Card
                    data-aos="zoom-in-up"
                    data-aos-duration="2000"
                    className="card-blog"
                  >
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          src={require("assets/img/card-blog2.jpg")}
                        ></img>
                      </Link>
                    </div>
                    <CardBody>
                      <h6 className="category text-info">Features</h6>
                      <CardTitle tag="h5">
                        That’s One Way To Ditch Your Passenger
                      </CardTitle>
                      <p className="card-description">
                        As near as we can tell, this guy must have thought he
                        was going over backwards and tapped the rear...
                      </p>
                      <CardFooter>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/julie.jpg")}
                          ></img>
                          <span>Mike John</span>
                        </div>
                        <div className="stats stats-right">
                          <i className="now-ui-icons tech_watch-time"></i>5 min
                          read
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  {" "}
                  <Card
                    data-aos="zoom-in-up"
                    data-aos-duration="2000"
                    className="card-blog"
                  >
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          src={require("assets/img/card-blog2.jpg")}
                        ></img>
                      </Link>
                    </div>
                    <CardBody>
                      <h6 className="category text-info">Features</h6>
                      <CardTitle tag="h5">
                        That’s One Way To Ditch Your Passenger
                      </CardTitle>
                      <p className="card-description">
                        As near as we can tell, this guy must have thought he
                        was going over backwards and tapped the rear...
                      </p>
                      <CardFooter>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/julie.jpg")}
                          ></img>
                          <span>Mike John</span>
                        </div>
                        <div className="stats stats-right">
                          <i className="now-ui-icons tech_watch-time"></i>5 min
                          read
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    */}

      <Row className="contactus-2  mb-5" >
       <Col  xs='12' sm='12' md='8'style={{paddingLeft:'2%',paddingRight:'2%'}}>
         <div
          className="big-map"
          id="contactUsMap"
          style={{
            // position: "relative",
           
            overflow: "hidden",
            height: "65vh",
         
          }}
        >
          <MapWrapper
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW85sBZkHfzpqR2TBk5pDm2Deq5Mt6paE"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        </Col>   
          <Col xs='12' sm='12' lg="4" md="4"  >
          <Card className="card-contact card-raised " style={{marginLeft:0,marginTop:'2%'}}>
            <Form id="contact-form" method="post" role="form">
              <CardHeader className="text-center">
                <CardTitle tag="h4">Contact Us</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <div className="info info-horizontal">
                      <div className="icon icon-info">
                        <i className="now-ui-icons tech_mobile"></i>
                      </div>
                      <div className="description">
                        <h5 className="info-title">Give us a ring</h5>
                        <p>
                          Michael Jordan <br></br>
                          +40 762 321 762 <br></br>
                          Mon - Fri, 8:00-22:00
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="info info-horizontal">
                      <div className="icon icon-info">
                        <i className="now-ui-icons location_pin"></i>
                      </div>
                      <div className="description">
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
                <Row>
                  <Col className="pr-2" md="6">
                    <label>Full name</label>
                    <InputGroup
                      className={first2Focus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="given-name"
                        placeholder="First Name..."
                        type="text"
                        onFocus={() => setFirst2Focus(true)}
                        onBlur={() => setFirst2Focus(false)}
                      ></Input>
                    </InputGroup>
                  </Col>
                  <Col className="pl-2" md="6">
                    <label>Email address</label>
                    <InputGroup
                      className={email2Focus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="email"
                        placeholder="Email Here..."
                        type="email"
                        onFocus={() => setEmail2Focus(true)}
                        onBlur={() => setEmail2Focus(false)}
                      ></Input>
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    {/* <FormGroup check>
                      <Label check>
                        <Input type="checkbox"></Input>
                        <span className="form-check-sign"></span>
                        I'm not a robot
                      </Label>
                    </FormGroup> */}
                  </Col>
                  <Col md="6">
                    <Button
                      className="btn-round pull-right"
                      color="info"
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* <Footer1 /> */}
      <Container>
        <Row>
  

          <Col className=" pl-5 mr-auto text-left" md="6">
            <h2
              data-aos="fade-left"
              className="title"
              style={{ fontSize: "2rem" }}
            >
               Mansehej 's History
            </h2>
            <h5
              data-aos="fade-left"
              className="description"
              style={{ fontSize: "1rem" }}
            >
              The riding of waves has likely existed since humans began swimming
              in the ocean. In this sense, bodysurfing is the oldest type of
              wave-catching. Standing up on what is now called a surfboard is a
              relatively recent innovation developed by the Polynesians.
            </h5>
            <br></br>
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
                onClick={e => e.preventDefault()}
                size="lg"
              >
                Read More
              </Button>
            </div>
          </Col>
          <Col md="6" style={{ alignSelf: "center" }}>
            <img
              data-aos="fade-up"
              style={{ alignSelf: "center" }}
              src={require("../assets/img/temp12.png")}
            ></img>
          </Col>  </Row>
      </Container>
     
    </React.Fragment>
  );
}

export default LandingPage;
