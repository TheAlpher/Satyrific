import React from "react";
import AOS from "aos";
import transparentcurve from '../../assets/img/Artboard7.svg';
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
  } from "reactstrap";
  import MyNavbar from '../Navbars/LandingPageNavbar';
//   import MyNavbar from 'components/Navbars/WhiteNavbar';
const items = [
    {
      src: "url(" + require("assets/img/bg20.jpg") + ")",
      content: (
        <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
          <h1 className="title">Island of legends.</h1>
          <h4 className="description">
            The islands of Malta and Gozo are brilliant for a family holiday,
            packed with fun places to visit whatever your children’s ages. The
            islands’ small size means everywhere is within easy reach.
          </h4>
          <br></br>
          {/* <h5>Connect with us on:</h5>
          <div className="buttons">
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-twitter"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-facebook-square"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-google-plus"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-instagram"></i>
            </Button>
          </div>
        */}
        </Col>
      </Row>
     ),
      altText: "",
      caption: ""
    },
    {
      src: "url(" + require("assets/img/bg15.jpg") + ")",
      content: (
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h1 className="title">Island of legends.</h1>
            <h4 className="description">
              The islands of Malta and Gozo are brilliant for a family holiday,
              packed with fun places to visit whatever your children’s ages. The
              islands’ small size means everywhere is within easy reach.
            </h4>
            <br></br>
            {/* <h5>Connect with us on:</h5>
            <div className="buttons">
              <Button
                className="btn-icon btn-neutral btn-round mt-2 mr-1"
                color="danger"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                className="btn-icon btn-neutral btn-round mt-2 mr-1"
                color="danger"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button
                className="btn-icon btn-neutral btn-round mt-2 mr-1"
                color="danger"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-google-plus"></i>
              </Button>
              <Button
                className="btn-icon btn-neutral btn-round mt-2"
                color="danger"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-instagram"></i>
              </Button>
            </div> */}
          </Col>
        </Row>
      
      ),
      altText: "",
      caption: ""
    },
    {
      src: "url(" + require("assets/img/bg17.jpg") + ")",
      content: (
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h1 className="title">Island of legends.</h1>
            <h4 className="description">
              The islands of Malta and Gozo are brilliant for a family holiday,
              packed with fun places to visit whatever your children’s ages. The
              islands’ small size means everywhere is within easy reach.
            </h4>
            <br></br>
{/*         
            <h5>Connect with us on:</h5>
         
            <div className="buttons">
              <Button
                className="btn-icon btn-neutral btn-round mt-2 mr-1"
                color="danger"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                className="btn-icon btn-neutral btn-round mt-2 mr-1"
                color="danger"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button
                className="btn-icon btn-neutral btn-round mt-2 mr-1"
                color="danger"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-google-plus"></i>
              </Button>
              <Button
                className="btn-icon btn-neutral btn-round mt-2"
                color="danger"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-instagram"></i>
              </Button>
            </div> */}
          </Col>
        </Row>
       
     ),
      altText: "",
      caption: ""
    }
  ];

  AOS.init();
const MyHeader =()=>{
    // const [navbarOpen1, setNavbarOpen1] = React.useState(false);
    // const [navbarOpen2, setNavbarOpen2] = React.useState(false);
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
      {navbarOpen3 ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setNavbarOpen3(false);
          }}
        />
      ) : null}
 {/* <Navbar
          className="navbar-absolute navbar-white"
          expand="lg"
        >
          <Container>
            <div className="navbar-translate">
              <button
                aria-expanded={navbarOpen3}
                className="navbar-toggler"
                data-toggle="collapse"
                type="button"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setNavbarOpen3(!navbarOpen3);
                }}
              >
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()} style={{maxWidth:'30vw'}}>
                <img width='35%' src={require('../../assets/img/BRANDLOGOMINI2.png')}/>
              </NavbarBrand>
            </div>
            <Collapse navbar isOpen={navbarOpen3}>
              <Nav className="ml-auto" navbar>
                <NavItem className="active">
                <NavLink href="/" 
                  // onClick={e => e.preventDefault()}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem >
                  <NavLink href="/about-us" 
                  // onClick={e => e.preventDefault()}
                  >
                    About Us
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink href="/products?types=all" 
                  // onClick={e => e.preventDefault()}
                  >
                    Products
                  </NavLink>
                </NavItem> 
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      */}
      <MyNavbar/>
        {/* <div className="page-header header-filter"> 
                            <div
                              className="page-header-image"
                              style={{
                                backgroundImage: "url(" + require("assets/img/bg15.jpg") + ")",
                              }}
                            ></div>
                            <div className="content" style= {{marginTop:'15%'}} >


                              
                            </div>
                          </div>    */}
                          <div className='wrapper1' >
 <Carousel activeIndex={activeIndex} className='carousel-fade' keyboard={false}


pause={false}
ride="carousel"
interval="5000"
style={{minHeight:'80vh',maxHeight:'80vh'}} 
next={next} previous={previous}
>
  {/* <div id="clipped-div" className='carousel-indicators' style={{minHeight:'fit-content',

background:'transparent'}}>
  
   </div>  */}
            <CarouselIndicators
            className='mycarouselindicators px-auto'
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
              
            ></CarouselIndicators>
            {items.map(item => {
              return (
                <CarouselItem
                  onExiting={onExiting}
                  onExited={onExited}
                  key={item.src}
                >
                  <div className="page-header  header-filter" style={{
                    minHeight:'80vh',maxHeight:'80vh'}}>
                    <div
                      className="page-header-image"
                      style={{
                        backgroundImage: item.src,
                        maxHeight:'inherit'
                      }}
                    ></div>                       

 
   
                    <div className="content">
                      <Container className="text-center">
                        {item.content}

                      </Container>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
            {/* <a
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

              <div className="now-ui-icons arrows-1_minimal-left" style={{ backgroundColor:'white', borderRadius:'40%', border:'1px solid white',color:'black',fontWeight:'bolder',padding:'10%'}} />
          
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
              
              <div className="now-ui-icons arrows-1_minimal-right" style={{ backgroundColor:'white', borderRadius:'40%', border:'1px solid white',color:'black',fontWeight:'bolder',padding:'10%'}} />
          
            </a> */}
       
       
          </Carousel>
       
         
       
       
       
       
            </div>   
            
            


</>
 
        
        )
}

export default MyHeader;




