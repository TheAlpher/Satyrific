import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// reactstrap components
import {
    Button,
    Card,
    CardBody,
    Collapse,
    FormGroup,
    Form,
    Input,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselIndicators
  ,CardTitle
  } from "reactstrap";
  import MyNavbar from 'components/Navbars/WhiteNavbar';
  const items = [
    {
      src: "url(" + require("assets/img/bg20.jpg") + ")",
      content: (
        <div className="social-line social-line-big-icons social-line-white" 
        style={{backgroundColor:'rgba(255,255,255,0)'}} 
        ><CardTitle data-aos="zoom-in-up" data-aos-duration='500' tag='h3'  className='text-center pt-5' style={{color:'black'}}>Current Locations</CardTitle>
                      <Container className="text-center">
                  
              <Row style={{justifyContent:'center',display:'flex'}}>
                <Col md="3" sm='4' xs='4'>
                 
                 
                  {/* <Button
                    className="btn-neutral btn-icon btn-footer"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                 */}
                 <img data-aos="zoom-in-up" data-aos-duration='500' src={require('assets/img/hostel1.png')}/>
                 <CardTitle data-aos="zoom-in-up" data-aos-duration='500' tag='h4'  className='text-center' style={{color:'black',marginTop:0,marginBottom:0}}>Satya Niketan </CardTitle>
                </Col>
                <Col md="3" sm='4' xs='4'>
                 
                 
                 {/* <Button
                   className="btn-neutral btn-icon btn-footer"
                   color="twitter"
                   href="#pablo"
                   onClick={e => e.preventDefault()}
                 >
                   <i className="fab fa-twitter"></i>
                 </Button>
                */}
                <img data-aos="zoom-in-up" data-aos-duration='500' src={require('assets/img/hostel2.png')}/>
                <CardTitle data-aos="zoom-in-up" data-aos-duration='500' tag='h4'  className='text-center' style={{color:'black',marginTop:0,marginBottom:0}}>Noida </CardTitle>
               </Col>
            
             
              </Row>
            
                      </Container>
                      </div>
              
             
     ),
      altText: "",
      caption: ""
    },
    {
      src: "url(" + require("assets/img/bg15.jpg") + ")",
      content: (
        <div className="social-line social-line-big-icons social-line-white" 
        style={{backgroundColor:'rgba(255,255,255,0)'}} 
        ><CardTitle data-aos="zoom-in-up" data-aos-duration='500' tag='h3'  className='text-center pt-5' style={{color:'black'}}>Upcoming Locations</CardTitle>
                      <Container className="text-center">
                  
              <Row style={{justifyContent:'center',display:'flex'}}>
                <Col md="3" sm='3' xs='4' xs='4'>
                 
                 
                  {/* <Button
                    className="btn-neutral btn-icon btn-footer"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                 */}
                 <img data-aos="zoom-in-up" data-aos-duration='500' src={require('assets/img/hostel1.png')}/>
                 <CardTitle data-aos="zoom-in-up" data-aos-duration='500' tag='h4'  className='text-center' style={{color:'black',marginTop:0,marginBottom:0}}>Pune </CardTitle>
                </Col>
                <Col md="3" sm='3' xs='4' xs='4'>
                 
                 
                 {/* <Button
                   className="btn-neutral btn-icon btn-footer"
                   color="twitter"
                   href="#pablo"
                   onClick={e => e.preventDefault()}
                 >
                   <i className="fab fa-twitter"></i>
                 </Button>
                */}
                <img data-aos="zoom-in-up" data-aos-duration='500' src={require('assets/img/hostel2.png')}/>
                <CardTitle data-aos="zoom-in-up" data-aos-duration='500' tag='h4'  className='text-center' style={{color:'black',marginTop:0,marginBottom:0}}>Colombo </CardTitle>
               </Col>
               <Col md="3" sm='3' xs='4' xs='4'>
                 
                 
                 {/* <Button
                   className="btn-neutral btn-icon btn-footer"
                   color="twitter"
                   href="#pablo"
                   onClick={e => e.preventDefault()}
                 >
                   <i className="fab fa-twitter"></i>
                 </Button>
                */}
                <img data-aos="zoom-in-up" data-aos-duration='500' src={require('assets/img/hostel3.png')}/>
                <CardTitle data-aos="zoom-in-up" data-aos-duration='500' tag='h4'  className='text-center' style={{color:'black',marginTop:0,marginBottom:0}}> Lagos </CardTitle>
               </Col>
        
             
              </Row>
            
                      </Container>
                      </div>
              
        
      ),
      altText: "",
      caption: ""
    }
  ];
  AOS.init();
const MyHeader =()=>{
    const [navbarOpen1, setNavbarOpen1] = React.useState(false);
    const [navbarOpen2, setNavbarOpen2] = React.useState(false);
    const [navbarOpen3, setNavbarOpen3] = React.useState(false);
    // header 3 carousel states and functions
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
      setAnimating(true);
    };
    const onExited = () => {
      setAnimating(false);
    };
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
    const goToIndex = newIndex => {
      if (animating) return;
      setActiveIndex(newIndex);
    };

    return(
      <>
          <div className='wrapper1' style={{
            // backgroundColor:'#920ce8'
        }}>
        <Carousel activeIndex={activeIndex}  keyboard={false}

className='locationcarousel'
pause={false}
ride="carousel"
interval="5000000"
style={{maxHeight:'auto'}} 
next={next} previous={previous}
>
            {/* <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
              
            /> */}
            {items.map(item => {
              return (
                <CarouselItem
                  onExiting={onExiting}
                  onExited={onExited}
                  key={item.src}
                >
                  <div className="page-header my-page-header header-filter" style={{
                    minHeight:'unset',maxHeight:'auto',}} >
                    {/* <div
                      className="page-header-image"
                      style={{
                        backgroundImage: item.src,
                        maxHeight:'inherit'
                      }}
                    ></div> */}
      {item.content} 
                  </div>
                </CarouselItem>
              );
            })}
            <a
              className="left carousel-control carousel-control-prev"
              data-slide="prev"
              href="#pablo"
              onClick={e => {
                e.preventDefault();
                previous();
              }}
              style={{maxWidth:'7vw '}}
              role="button"
            >

              <div className="now-ui-icons arrows-1_minimal-left" style={{ backgroundColor:'white', borderRadius:'50%', border:'1px solid grey',color:'black',fontWeight:'bolder',padding:'10%'}} />
          
            </a>
            <a
              className="right carousel-control carousel-control-next"
              data-slide="next"
              href="#pablo"
              onClick={e => {
                e.preventDefault();
                next();
              }}
              style={{maxWidth:'7vw '}}
              role="button"
            >
              
              <div className="now-ui-icons arrows-1_minimal-right" style={{ backgroundColor:'white', borderRadius:'50%', border:'1px solid grey',color:'black',fontWeight:'bolder',padding:'10%'}} />
          
            </a>
          </Carousel>
          {/* <div id="clipped-div1" style={{

background:'transparent'}}>
  <img src={require('../../assets/img/Artboard7.svg')} width='100%'/>
   </div> */}
   
   </div>
</>
 
        
        )
}

export default MyHeader;




