import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link , animateScroll as scroll } from "react-scroll";

// reactstrap components
import {
  NavItem,
NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,Button,CardTitle
} from "reactstrap";
// import { defaultProps } from "react-select/src/Select";

// core components
AOS.init();
function Pills(props) {


  const [iconHorizontalTabs, setIconHorizontalTabs] = React.useState("1");


  return (
    <>
      <div className="section-pills">
        <Container>

            {/* <Row>
              <Col sm="6">
                <p className="category">Horizontal tabs</p>
                <Nav className="nav-pills-info" pills role="tablist">
                  <NavItem>
                    <NavLink
                      className={horizontalTabs === "1" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setHorizontalTabs("1");
                      }}
                    >
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={horizontalTabs === "2" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setHorizontalTabs("2");
                      }}
                    >
                      Settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={horizontalTabs === "3" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setHorizontalTabs("3");
                      }}
                    >
                      Options
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className="tab-space"
                  activeTab={"horizontalTabs" + horizontalTabs}
                >
                  <TabPane tabId="horizontalTabs1">
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits. <br></br>
                    <br></br>
                    Dramatically visualize customer directed convergence without
                    revolutionary ROI.
                  </TabPane>
                  <TabPane tabId="horizontalTabs2">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas. <br></br>
                    <br></br>
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions.
                  </TabPane>
                  <TabPane tabId="horizontalTabs3">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. <br></br>
                    <br></br>
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </TabPane>
                </TabContent>
              </Col>
              <Col md="6">
                <p className="category">Vertical tabs</p>
                <Row>
                  <Col md="4">
                    <Nav
                      className="nav-pills-info flex-column"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          className={verticalTabs === "1" ? "active" : ""}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setVerticalTabs("1");
                          }}
                        >
                          Profile
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={verticalTabs === "2" ? "active" : ""}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setVerticalTabs("2");
                          }}
                        >
                          Settings
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={verticalTabs === "3" ? "active" : ""}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setVerticalTabs("3");
                          }}
                        >
                          Options
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="8">
                    <TabContent activeTab={"verticalTabs" + verticalTabs}>
                      <TabPane tabId="verticalTabs1">
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br></br>
                        <br></br>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </TabPane>
                      <TabPane tabId="verticalTabs2">
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br></br>
                        <br></br>
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </TabPane>
                      <TabPane tabId="verticalTabs3">
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas. <br></br>
                        <br></br>
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </Col>
            </Row> */}
              <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h4'  className='text-center' style={{}}>
            What do you really look for when you are in a new city away from home, friends and family? Well, you look for exactly what you are away from. In a nutshell, that is what Stayrific is all about.
          </CardTitle>
          <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h3'  className='text-center mt-3 pt-3' style={{color:'danger'}}>
         We're the cool 
          </CardTitle>
          <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h1'  className='text-center my-0 py-0' style={{color:'rgb(241,93,34)'}}>
         CATS
          </CardTitle>
            <Row>
     
              <Col md="12">
                <Nav
                  className="nav-pills-info  my-5 nav-pills-icons"
                  pills
                  role="tablist"
                  
                  style={{justifyContent:'center',display:'flex'}}
                >
       <NavItem  data-aos="zoom-in" style={{margin:'0.5%'}}>
                    <Link
                      className={iconHorizontalTabs === "1" ? "active  nav-link pills-links" : "pills-links nav-link"}
                      to="HorizontalTabs"
                      smooth={true} offset={-50}
                      onClick={e => {
                        e.preventDefault();
                        setIconHorizontalTabs("1");
                      }}
                      style={{display:'block',textAlign:"center", textDecoration:'none',fontSize:'larger',border:'1px solid grey',color:'black',borderRadius:'10px ',paddingRight:'3.5vh ',paddingLeft:'3.5vh ',paddingTop:'30px',paddingBottom:'30px',backgroundColor:'white'}}
                    >
                     <img className='px-auto mx-auto' align='middle' src={require('../assets/img/temp13.svg')}/>
                   <p className='mx-auto my-0 py-0'style={{fontFamily:'Lato',fontWeight:'bold',background:'transparent'}}>  <b style={{color:'rgb(241,93,34)'}}>C</b>ommunity</p>
                    </Link>
                  </NavItem>
                
                  <NavItem  data-aos="zoom-in" style={{margin:'0.5%'}}>
                    <Link
                      className={iconHorizontalTabs === "2" ? "active  nav-link pills-links" : "pills-links  nav-link"}
                      to="HorizontalTabs"
                      smooth={true} 
                      offset={-50}
                      onClick={e => {
                        e.preventDefault();
                        setIconHorizontalTabs("2");
                      }}
                      style={{display:'block',textAlign:"center", textDecoration:'none',fontSize:'larger',border:'1px solid grey',color:'black',borderRadius:'10px ',paddingRight:'4.4vh ',paddingLeft:'4.4vh ',paddingTop:'30px',paddingBottom:'30px',backgroundColor:'white'}}
                    >
                     <img className='px-auto mx-auto' align='middle' src={require('../assets/img/temp14.svg')}/>
                   <p className='mx-auto my-0 py-0'style={{fontFamily:'Lato',fontWeight:'bold',background:'transparent'}}>  <b style={{color:'rgb(241,93,34)'}}>A</b>menities</p>
                    </Link>
                  </NavItem>
                
                  <NavItem  data-aos="zoom-in" style={{margin:'0.5%'}}>
                    <Link
                      className={iconHorizontalTabs === "3" ? "active  nav-link pills-links" : "pills-links  nav-link"}
                      to="HorizontalTabs"
                      smooth={true} offset={-50}
                      onClick={e => {
                        e.preventDefault();
                        setIconHorizontalTabs("3");
                      }}
                      style={{display:'block',textAlign:"center", textDecoration:'none',fontSize:'larger',border:'1px solid grey',color:'black',borderRadius:'10px ',paddingRight:'3.5vh ',paddingLeft:'3.5vh ',paddingTop:'30px',paddingBottom:'30px',backgroundColor:'white'}}
                    >
                     <img className='px-auto mx-auto' align='middle' src={require('../assets/img/temp15.svg')}/>
                   <p className='mx-auto my-0 py-0'style={{fontFamily:'Lato',fontWeight:'bold',background:'transparent'}}>  <b style={{color:'rgb(241,93,34)'}}>T</b>echnology</p>
                    </Link>
                  </NavItem>
                
                
                  <NavItem  data-aos="zoom-in" style={{margin:'0.5%'}}>
                    <Link
                      className={iconHorizontalTabs === "4" ? "active  nav-link pills-links" : "pills-links  nav-link"}
                      to="HorizontalTabs"
                      smooth={true} offset={-50}
                      onClick={e => {
                        e.preventDefault();
                        setIconHorizontalTabs("4");
                      }}
                      style={{display:'block',textAlign:"center", textDecoration:'none',fontSize:'larger',border:'1px solid grey',color:'black',borderRadius:'10px ',paddingRight:'5.2vh ',paddingLeft:'5.2vh ',paddingTop:'30px',paddingBottom:'30px',backgroundColor:'white'}}
                    >
                     <img className='px-auto mx-auto' align='middle' src={require('../assets/img/temp11.svg')}/>
                   <p className='mx-auto my-0 py-0'style={{fontFamily:'Lato',fontWeight:'bold',background:'transparent'}}>  <b style={{color:'rgb(241,93,34)'}}>S</b>ecurity</p>
                    </Link>
                  </NavItem>
                
                
                </Nav>
                <TabContent
                  className="tab-space mt-3" id="HorizontalTabs"
                  activeTab={"iconHorizontalTabs" + iconHorizontalTabs}
                >
                  <TabPane tabId="iconHorizontalTabs1" id="HorizontalTabs1">
                  <Row style={{overflowX:'hidden'}}>
            <Col md='6' xs="12" className='px-auto' data-aos="fade-right" style={{textAlign:'center'}} >
            <img  style={{alignSelf:'center',width:'50%'}} src={require('../assets/img/jug.png')}></img>
            </Col>
        
            <Col   className=" pl-5 mr-auto text-left"  md='6' xs="12">
                  <h2 className="title" data-aos="fade-left" style={{fontSize:'2rem'}}>Best Community</h2>
                  <h5 className="description" data-aos="fade-left" style={{fontSize:'0.95rem',fontFamily:'Lato'}}>
                  STAYRIFIC is a family where strangers meet with a smile and where laughter never ends. And to preserve this precious smiles we always offer innovative ideas to facilitate your lifestyle. We provide you with drop facility at your workplace(until its very near to the residential area) so that you don’t have to spend extra bucks on cabs an rickshaws. Also we provide you with fresh and hot lunch at your location at your preferred time. You just have to let us know your cravings. And there are much more services to make you feel the HOMELY feeling.
                  </h5>
                  <br></br>
                  <div  data-aos="fade-left" className="buttons">
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
          </Row>
                  </TabPane>
                 
                 
                  <TabPane tabId="iconHorizontalTabs2" id="HorizontalTabs2">
                               <Row>
           
        
            <Col   className=" pl-5 mr-auto text-left" md="6">
                  <h2  data-aos="fade-right" className="title" style={{fontSize:'2rem'}}>      Access to comfort </h2>
                  <h5 data-aos="fade-right" className="description" style={{fontSize:'0.95rem',fontFamily:'Lato'}}>
                  Cook delicacies in your microwave or hide your chocolates in your own mini fridge with a free gym, free laundry, every day cleaning of rooms, 24*7 wifi. Also adding to the list is our FSSAI certified food which can make you drool over the same.  And all these are not just mere services or products, these are our ways of making you feel the HOMELY feeling.
                  </h5>
                  <br></br>
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
                      href="/amenities"
                      
                      size="lg"
                    >
                      Read More
                    </Button>
                  </div>
             
            </Col>
            <Col data-aos="fade-left" md='6' style={{textAlign:'center'}} >
            <img  style={{alignSelf:'center',width:'55%'}} src={require('../assets/img/foreigner2.png')}></img>
            </Col>
          </Row>
                  </TabPane>
                
                  <TabPane tabId="iconHorizontalTabs3" id="HorizontalTabs3">
         <Row> 
                     <Col md='6' data-aos="fade-right" style={{textAlign:'center'}} >
               <img  style={{alignSelf:'center',width:'50%'}} src={require('../assets/img/jug.png')}></img>
            </Col>  
            <Col  className=" pl-5 mr-auto text-left" md="6">
                  <h2 data-aos="fade-left" className="title" style={{fontSize:'2rem'}}>Best in class Technology</h2>
                  <h5 data-aos="fade-left" className="description" style={{fontSize:'0.95rem',fontFamily:'Lato'}}>
                  When R. Buckminster Fuller said "Humanity is acquiring all the right technology for all the wrong reasons.” We felt him and evolved for an effective path of communication. The STAYRIFIC app is everything you need to modernize your solutions. The app records grievances,provides solutions,listens to the changes according you and spills them in front of us and also reminds you to pay us both love and invoices. You don’t have to worry just have to feel the HOMELY feeling.
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
                      onClick={e =>{e.preventDefault();
                    }}
                      size="lg"
                    >
                      Read More
                    </Button>
                  </div>
             
            </Col></Row>
                  </TabPane>
                  <TabPane tabId="iconHorizontalTabs4" id="HorizontalTabs4">
              
              
                  <Row>
           
        
           <Col   className=" pl-5 mr-auto text-left" md="6">
                 <h2  data-aos="fade-right" className="title" style={{fontSize:'2rem'}}>Security is a prime priority</h2>
                 <h5 data-aos="fade-right" className="description" style={{fontSize:'0.95rem',fontFamily:'Lato'}}>
                 STAYRIFIC is as secure as your mother’s lap is.
                  We not only believe in manual  security but also confer your security in your hands on the app.
                   The app generates out pass and in pass according to your concerns.
                    CCTV cameras are installed and monitored every moment to make the place safer.
                     You can sleep well because there’re people working hard to make you feel the HOMELY feeling.
                 </h5>
                 <br></br>
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
           <Col data-aos="fade-left" md='6' style={{textAlign:'center'}} >
           <img  style={{alignSelf:'center',width:'55%'}} src={require('../assets/img/foreigner2.png')}></img>
           </Col>
         </Row>                </TabPane>
               
               
                </TabContent>
              </Col>
             
             
           
            </Row>
       
        </Container>
      </div>
    </>
  );
}

export default Pills;
