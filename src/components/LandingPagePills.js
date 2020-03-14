import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

// core components
AOS.init();
function Pills() {

  const [horizontalTabs, setHorizontalTabs] = React.useState("1");
  const [verticalTabs, setVerticalTabs] = React.useState("1");
  const [iconHorizontalTabs, setIconHorizontalTabs] = React.useState("1");
  const [iconVerticalTabs, setIconVerticalTabs] = React.useState("1");
  const [justIconHorizontalTabs, setJustIconHorizontalTabs] = React.useState(
    "1"
  );
  const [justIconVerticalTabs, setJustIconVerticalTabs] = React.useState("1");

  return (
    <>
      <div className="section section-pills">
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
         We're the cool <b> CATS </b>
          </CardTitle>
            <Row>
     
              <Col md="12">
                <Nav
                  className="nav-pills-info  my-5 nav-pills-icons"
                  pills
                  role="tablist"
                  
                  style={{justifyContent:'center'}}
                >
                  <NavItem data-aos="zoom-in" className='mx-3'> 
                    <NavLink
                      className={iconHorizontalTabs === "1" ? "active" : "" }
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setIconHorizontalTabs("1");
                      }}
                      style={{fontSize:'larger',border:'1px solid grey',color:'black',  borderRadius:'10px',paddingRight:'50px ',paddingLeft:'50px ',paddingTop:'30px',paddingBottom:'30px',backgroundColor:'white'}}
                    >
                      <img src={require('../assets/img/temp13.svg')}/><br/>
                     <b>C</b>ommunity
                    </NavLink>
                  </NavItem>
                  <NavItem data-aos="zoom-in" className='mx-3'>
                    <NavLink
                      className={iconHorizontalTabs === "2" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setIconHorizontalTabs("2");
                      }}
                      style={{fontSize:'larger',border:'1px solid grey',color:'black',borderRadius:'10px',paddingRight:'50px ',paddingLeft:'50px ',paddingTop:'30px',paddingBottom:'30px',backgroundColor:'white'}}
                    >
                    <img src={require('../assets/img/temp14.svg')}/><br/>
                      <b>A</b>menities
                    </NavLink>
                  </NavItem>
                  <NavItem  data-aos="zoom-in" className='mx-3'>
                    <NavLink
                      className={iconHorizontalTabs === "3" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setIconHorizontalTabs("3");
                      }}
                      style={{fontSize:'larger',border:'1px solid grey',color:'black',borderRadius:'10px ',paddingRight:'50px ',paddingLeft:'50px ',paddingTop:'30px',paddingBottom:'30px',backgroundColor:'white'}}
                    >
                     <img src={require('../assets/img/temp15.svg')}/><br/>
                     <b>T</b>echnology
                    </NavLink>
                  </NavItem>
                  <NavItem  data-aos="zoom-in" className='mx-3'>
                    <NavLink
                      className={iconHorizontalTabs === "4" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setIconHorizontalTabs("4");
                      }}
                      style={{fontSize:'larger',border:'1px solid grey',color:'black',borderRadius:'10px ',paddingRight:'50px ',paddingLeft:'50px ',paddingTop:'30px',paddingBottom:'30px',backgroundColor:'white'}}
                    >
                     <img src={require('../assets/img/temp11.svg')}/><br/>
                     <b>S</b>ecurity
                    </NavLink>
                  </NavItem>
                
                
                </Nav>
                <TabContent
                  className="tab-space mt-3"
                  activeTab={"iconHorizontalTabs" + iconHorizontalTabs}
                >
                  <TabPane tabId="iconHorizontalTabs1">
                  <Row>
            <Col md='6' className='px-auto' data-aos="fade-right" style={{textAlign:'center'}} >
            <img  style={{alignSelf:'center',width:'50%'}} src={require('../assets/img/jug.png')}></img>
            </Col>
        
            <Col   className=" pl-5 mr-auto text-left" md="6">
                  <h2 className="title" data-aos="fade-left" style={{fontSize:'2rem'}}>History of surfing</h2>
                  <h5 className="description" data-aos="fade-left" style={{fontSize:'1rem'}}>
                    The riding of waves has likely existed since humans began
                    swimming in the ocean. In this sense, bodysurfing is the
                    oldest type of wave-catching. Standing up on what is now
                    called a surfboard is a relatively recent innovation
                    developed by the Polynesians.
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
                  <TabPane tabId="iconHorizontalTabs2">
                               <Row>
           
        
            <Col   className=" pl-5 mr-auto text-left" md="6">
                  <h2  data-aos="fade-right" className="title" style={{fontSize:'2rem'}}>History of surfing</h2>
                  <h5 data-aos="fade-right" className="description" style={{fontSize:'1rem'}}>
                    The riding of waves has likely existed since humans began
                    swimming in the ocean. In this sense, bodysurfing is the
                    oldest type of wave-catching. Standing up on what is now
                    called a surfboard is a relatively recent innovation
                    developed by the Polynesians.
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
          </Row>
                  </TabPane>
                  <TabPane tabId="iconHorizontalTabs3">
         <Row> 
                     <Col md='6' data-aos="fade-right" style={{textAlign:'center'}} >
               <img  style={{alignSelf:'center',width:'50%'}} src={require('../assets/img/jug.png')}></img>
            </Col>  
            <Col  className=" pl-5 mr-auto text-left" md="6">
                  <h2 data-aos="fade-left" className="title" style={{fontSize:'2rem'}}>History of surfing</h2>
                  <h5 data-aos="fade-left" className="description" style={{fontSize:'1rem'}}>
                    The riding of waves has likely existed since humans began
                    swimming in the ocean. In this sense, bodysurfing is the
                    oldest type of wave-catching. Standing up on what is now
                    called a surfboard is a relatively recent innovation
                    developed by the Polynesians.
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
             
            </Col></Row>
                  </TabPane>
                  <TabPane tabId="iconHorizontalTabs4">
                  <Row>
           
        
           <Col   className=" pl-5 mr-auto text-left" md="6">
                 <h2  data-aos="fade-right" className="title" style={{fontSize:'2rem'}}>History of surfing</h2>
                 <h5 data-aos="fade-right" className="description" style={{fontSize:'1rem'}}>
                   The riding of waves has likely existed since humans began
                   swimming in the ocean. In this sense, bodysurfing is the
                   oldest type of wave-catching. Standing up on what is now
                   called a surfboard is a relatively recent innovation
                   developed by the Polynesians.
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
