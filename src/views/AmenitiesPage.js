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
  UncontrolledTooltip
} from "reactstrap";

// core components
import NavigationPills from 'components/AmenitiesPagePills.js';
import  AmenitiesNavbar from "components/Navbars/AmenitiesPageNavbar.js";
import SecondaryPageHeader from "components/Headers/SecondaryPageHeader.js";
import FooterDefault from "components/Footers/FooterDefault.js";
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
  { title:"Library",
  info:' All students have access to our Library',
    src: require("../assets/img/library.png") ,
 
    altText: "Library"

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
  { title:"Library",
  info:' All students have access to our Library',
    src: require("../assets/img/library.png") ,
 
    altText: "Library"

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
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
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

      <AmenitiesNavbar />
      <div className="wrapper" style={{background:'transparent'}}>
        <SecondaryPageHeader title='Amenities' />
        <NavigationPills items={satyaniketanamenities} items1={noidaamenities}style={{background:'transparent'}} />
        
        <Container className='my-5'>
         <Row>  <h2 data-aos="fade-left" className="title col-12" style={{fontSize:'2rem'}}>Best in class Technology</h2>
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
           
                  <h2  data-aos="fade-right" className="title col-12" style={{fontSize:'2rem'}}>Security is a prime priority</h2>
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
               
                    
        
        {/* <div className="section">
          <Container>
            <div className="button-container">
              <Button
                className="btn-round mr-1"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
                size="lg"
              >
                Follow
              </Button>
              <Button
                className="btn-round btn-icon mr-1"
                color="default"
                href="#pablo"
                id="tooltip871723210"
                onClick={e => e.preventDefault()}
                size="lg"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip871723210">
                Follow me on Twitter
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="default"
                href="#pablo"
                id="tooltip259363830"
                onClick={e => e.preventDefault()}
                size="lg"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip259363830">
                Follow me on Instagram
              </UncontrolledTooltip>
            </div>
            <h3 className="title">About me</h3>
            <h5 className="description text-center">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </h5>
            <Row>
              <Col md="12">
                <h4 className="title text-center">My Portfolio</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        onClick={e => {
                          e.preventDefault();
                          setPills("1");
                        }}
                        className={pills === "1" ? "active" : ""}
                        role="tablist"
                        href="#pablo"
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                        className={pills === "2" ? "active" : ""}
                        role="tablist"
                        href="#pablo"
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={e => {
                          e.preventDefault();
                          setPills("3");
                        }}
                        className={pills === "3" ? "active" : ""}
                        role="tablist"
                        href="#pablo"
                      >
                        <i className="now-ui-icons design-2_ruler-pencil"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <TabContent className="gallery" activeTab={"pills" + pills}>
                  <TabPane tabId="pills1">
                    <Row>
                      <Col className="ml-auto mr-auto" md="5">
                        <Card
                          className="card-background card-background-product card-raised"
                          style={{
                            backgroundImage:
                              "url(" + require("assets/img/bg23.jpg") + ")"
                          }}
                        >
                          <CardBody>
                            <CardTitle tag="h2">Chair remake.</CardTitle>
                            <p className="card-description text-white">
                              Trello’s boards, lists, and cards enable you to
                              organize and prioritize your projects in a fun,
                              flexible and rewarding way. It was a great project
                              and I would be more than happy to do it again.
                            </p>
                            <Badge className="badge-neutral">Trello</Badge>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="5">
                        <div className="info info-horizontal">
                          <div className="icon icon-warning">
                            <i className="now-ui-icons users_single-02"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">Work With Any Team</h5>
                            <p className="description">
                              Whether it’s for work or even the next family
                              vacation, Trello helps your team.
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-warning">
                            <i className="now-ui-icons business_chart-bar-32"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">
                              A Productivity Platform
                            </h5>
                            <p className="description">
                              Integrate the apps your team already uses directly
                              into your workflow.
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="pills2">
                    <Row>
                      <Col className="ml-auto mr-auto" md="5">
                        <Card
                          className="card-background card-background-product card-raised"
                          style={{
                            backgroundImage:
                              "url(" + require("assets/img/project8.jpg") + ")"
                          }}
                        >
                          <CardBody>
                            <CardTitle tag="h2">Social Analytics</CardTitle>
                            <p className="card-description">
                              Insight to help you create, connect, and convert.
                              Understand Your Audience's Interests, Influence,
                              Interactions, and Intent. Discover emerging topics
                              and influencers to reach new audiences.
                            </p>
                            <Badge className="badge-neutral">Analytics</Badge>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="5">
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="now-ui-icons ui-2_chat-round"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">
                              Listen to Social Conversations
                            </h5>
                            <p className="description">
                              Gain access to the demographics, psychographics,
                              and location of unique people who talk about your
                              brand.
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="now-ui-icons design-2_ruler-pencil"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">Social Conversions</h5>
                            <p className="description">
                              Track actions taken on your website that
                              originated from social, and understand the impact
                              on your bottom line.
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="pills3">
                    <Row>
                      <Col className="ml-auto mr-auto" md="5">
                        <Card
                          className="card-background card-background-product card-raised"
                          style={{
                            backgroundImage:
                              "url(" + require("assets/img/bg25.jpg") + ")"
                          }}
                        >
                          <CardBody>
                            <CardTitle tag="h2">Interior Redesign</CardTitle>
                            <p className="card-description">
                              Insight to help you create, connect, and convert.
                              Understand Your Audience's Interests, Influence,
                              Interactions, and Intent. Discover emerging topics
                              and influencers to reach new audiences.
                            </p>
                            <Badge className="badge-neutral">Interior</Badge>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="5">
                        <div className="info info-horizontal">
                          <div className="icon icon-info">
                            <i className="now-ui-icons design_palette"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">Colors adjustments</h5>
                            <p className="description">
                              Gain access to the demographics, psychographics,
                              and location of unique people who talk about your
                              brand.
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-info">
                            <i className="now-ui-icons design_scissors"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">Performance Clothing</h5>
                            <p className="description">
                              Unify data from Facebook, Instagram, Twitter,
                              LinkedIn, and Youtube to gain rich insights from
                              easy-to-use reports.
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contactus-2">
          <div className="map" id="contactUsMap"></div>
          <Col lg="6" md="10">
            <Card className="card-contact card-raised">
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
                        className={firstFocus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="First Name..."
                          type="text"
                          onFocus={() => setFirstFocus(true)}
                          onBlur={() => setFirstFocus(false)}
                        ></Input>
                      </InputGroup>
                    </Col>
                    <Col className="pl-2" md="6">
                      <label>Email address</label>
                      <InputGroup
                        className={emailFocus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email Here..."
                          type="text"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                        ></Input>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox"></Input>
                          <span className="form-check-sign"></span>
                          I'm not a robot
                        </Label>
                      </FormGroup>
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
        </div>
        <FooterDefault /> */}

      </div>
    </>
  );
}

export default AmenitiesPage;
