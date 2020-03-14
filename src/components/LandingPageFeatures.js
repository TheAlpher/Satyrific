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
  Card,
  CardBody,CardTitle,
  Col,Button
} from "reactstrap";

// core components
AOS.init();
function Pills() {
  
  return (
    <>

<div className='wrapper' style={{background:' #920ce8'}}>
        <div id="clipped-div-upside" style={{minHeight:'fit-content',

background:'transparent'}}>
  <img src={require('../assets/img/Artboard7.svg')} width='100%'/>
   </div> 
            
       <Container>
         <Row>
           <Col data-aos="fade-left" data-aos-duration='1000'  md='8'>
          <Row>
          <Col md="6">
                <div className='mt-5' style={{display:'flex',}}>
               
                    <img src= {require('../assets/img/temp11.svg')} width="100%"/>
              
                  <div className="description ml-3">
                    <h5 className="info-title " style={{color:'white'}}>Beautifully Designed</h5>
                    <p style={{fontSize:'small',color:'white'}}>
                      The moment you use Now UI Kit, you know you’ve never felt
                      anything like it. With a single use lets you do more than
                      ever before.
                    </p>
                  </div>
                </div>
                <div  className='my-5'style={{display:'flex',marginTop:"0px" }}>
               
                    <img src= {require('../assets/img/temp11.svg')} width="100%"/>
              
                  <div className="description ml-3  ">
                    <h5 className="info-title " style={{color:'white'}}>Hundreds of Components</h5>
                    <p style={{fontSize:'small',color:'white'}}>
                      The moment you use Now UI Kit, you know you’ve never felt
                      anything like it. With a single use lets you do more than
                      ever before.
                    </p>
                  </div>
                </div>
                <div   className='my-5' style={{display:'flex',margin:"0px" }}>
               
                    <img src= {require('../assets/img/temp11.svg')} width="100%"/>
              
                  <div className="description ml-3">
                    <h5 className="info-title " style={{color:'white'}}>Hundreds of Components</h5>
                    <p style={{fontSize:'small',color:'white'}}>
                      The moment you use Now UI Kit, you know you’ve never felt
                      anything like it. With a single use lets you do more than
                      ever before.
                    </p>
                  </div>
                </div>
              </Col>
            
              <Col md="6">
                <div className='mt-5' style={{display:'flex',}}>
               
                    <img src= {require('../assets/img/temp11.svg')} width="100%"/>
              
                  <div className="description ml-3">
                    <h5 className="info-title " style={{color:'white'}}>Beautifully Designed</h5>
                    <p style={{fontSize:'small',color:'white'}}>
                      The moment you use Now UI Kit, you know you’ve never felt
                      anything like it. With a single use lets you do more than
                      ever before.
                    </p>
                  </div>
                </div>
                <div  className='my-5' style={{display:'flex',marginTop:"0px" }}>
               
                    <img src= {require('../assets/img/temp11.svg')} width="100%"/>
              
                  <div className="description ml-3 ">
                    <h5 className="info-title " style={{color:'white'}}>Hundreds of Components</h5>
                    <p style={{fontSize:'small',color:'white'}}>
                      The moment you use Now UI Kit, you know you’ve never felt
                      anything like it. With a single use lets you do more than
                      ever before.
                    </p>
                  </div>
                </div>
                <div  className='my-5'  style={{display:'flex',margin:"0px" }}>
               
                    <img src= {require('../assets/img/temp11.svg')} width="100%"/>
              
                  <div className="description ml-3">
                    <h5 className="info-title " style={{color:'white'}}>Hundreds of Components</h5>
                    <p style={{fontSize:'small',color:'white'}}>
                      The moment you use Now UI Kit, you know you’ve never felt
                      anything like it. With a single use lets you do more than
                      ever before.
                    </p>
                  </div>
                </div>
              </Col>
          
          </Row>
          </Col>    
           <Col  lg="4" md="4">
                <Card data-aos="fade-up" data-aos-duration='2000' className="card-pricing" data-background-color="white" style={{color:'black'}}>
                  <CardBody>
                    <CardTitle><img src={require('../assets/img/temp12.png')} width="70%"/></CardTitle>
                    <CardTitle tag='h3' style={{color:'black'}}>What makes us different!</CardTitle><br/>
                    <ul  >
                      <li className="text-left" style={{color:'black'}}>
                      <img src='https://assets.website-files.com/5e09f044743608547fe6e12a/5e132702946b12f09cc0bb35_check-circle-dark.svg'/>
                        &nbsp; Unlimited MB
                      </li>
                      <li className="text-left" style={{color:'black'}}>
                        <img src='https://assets.website-files.com/5e09f044743608547fe6e12a/5e132702946b12f09cc0bb35_check-circle-dark.svg'/>
                          &nbsp;  Unlimited emails
                      </li>
                      <li className="text-left" style={{color:'black'}}>
                      <img src='https://assets.website-files.com/5e09f044743608547fe6e12a/5e132702946b12f09cc0bb35_check-circle-dark.svg'/>
                      &nbsp; Unlimited Databases
                      </li>
                      <li  className="text-left" style={{color:'black'}}>
                      <img src='https://assets.website-files.com/5e09f044743608547fe6e12a/5e132702946b12f09cc0bb35_check-circle-dark.svg'/>
                      &nbsp; Full Support
                      </li>
                    </ul>

                    {/* <CardTitle tag='h1' style={{color:'black',fontWeight:'bolder'}}>$15</CardTitle> */}
                    <br/>
                    <Button
                      className="btn-warning btn-lg px-5"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Get A Call
                    </Button>
                  </CardBody>
                </Card>
              </Col>
           </Row> 
           </Container>
           <div id="clipped-div" style={{minHeight:'fit-content',

background:'transparent'}}>
  <img src={require('../assets/img/Artboard7.svg')} width='100%'/>
   </div> 


   
             </div>
      

       </>
  );
}

export default Pills;
