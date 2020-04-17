import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {ScrollRotate} from 'react-scroll-rotate';
// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";
import { setGlobalCssModule } from "reactstrap/lib/utils";
import { Container } from "@material-ui/core";

// core components

const items = [
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src="https://s3.amazonaws.com/creativetim_bucket/photos/154001/thumb.JPG?1501184024"
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "Awesome Design and very well organized code structure! Also, it
            contains numerous elements using which achieving the perfect or
            required template can be done with ease. Great job!"    </h5>
            <CardTitle tag="h4"className='my-1'>Stefan</CardTitle>
      
          
          {/* <h6 className="category text-muted">Web Designer</h6>
          <CardFooter>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter> */}
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src="https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg"
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "It looks great and its somewhat futuristics cant wait to use it on
            a project here in nigeria i'm sure it would put me ahead.. I cant
            wait to hv enough money to buy ur product."
            </h5> <CardTitle tag="h4"className='my-0'>Mr. Bones</CardTitle>
         
          {/* <h6 className="category text-muted">Web Designer</h6>
          <CardFooter>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter> */}
        </CardBody>
      </Card>
    ),
    src: "1",
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src="https://s3.amazonaws.com/creativetim_bucket/photos/123124/thumb.?1480480048"
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "Everything is perfect. Codes are really organized. It's easy to
            edit for my own purposes. It's great that it is built on top of
            Bootstrap 4." <br/> <CardTitle tag="h4"className='my-0'>DOĞA</CardTitle>
          </h5>
         
          {/* <h6 className="category text-muted">Web Developer</h6>
          <CardFooter>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter> */}
        </CardBody>
      </Card>
    ),
    src: "2",
    altText: "",
    caption: ""
  }
];
AOS.init();
function Testimonials() {
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
    setAnimating(true)

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
  return (
    <>
      <div
        className=" section-testimonials "  id='mytestimonials'
        // data-background-color="orange" 
      >      
        <div id="clipped-div-upside" style={{height:'8vh',position:'relative',zIndex:'1000',
          width:'100%',
      backgroundImage:"url("+require('../../assets/img/Artboard7.svg')+")" ,backgroundSize:"cover",transform:'rotate(180deg)',  backgroundPosition: 'center' }}>
        {/* <img src={require('../../assets/img/Artboard7.svg')} width='100%'/> */}
         </div> 
        {/* <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            
          </Col>
        </Row> */}
        <div className='p-3'>
        <Row className='text-center' >
  <Col md={12}>
        <h2       data-aos="zoom-in-up"
            data-aos-duration="1000" className="title my-0 pt-0" style={{width:'100%',fontFamily:'Lato'}}> TESTIMONIALS</h2>
     </Col >   <Col md={12}>   
      <h4        data-aos="zoom-in-up"
            data-aos-duration="1000" className="description" >
          <b> What Our Customers Say</b> 
            </h4>
            </Col> 
            <Col md={12}>  <hr
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            style={{
              width: "20vw",
              border: "3px solid white",
              borderRadius: "3px"
            }}
          /></Col>
          <Col md="2">
            <div className="testimonials-people">
            {/* <div
  className="bg-elements rellax left-first-person "
  data-rellax-speed="-8"
  style={{

    minHeight: "50px",
    maxWidth: "50px",
    borderRadius: "20%",
    backgroundColor: "rgba(255, 165, 0, 0.3)",
    transform: "rotate(45deg)"
  }}
></div> */}
<ScrollRotate   loops={0.1}  method={"perc"}  from={0} to={30} >
               <div
      className="bg-elements rellax left-second-person" id='bg-elements-2'
      data-rellax-speed="-3"
      style={{
        minHeight: "10vw",
        minWidth:'10vw',
        maxWidth: " 10vw",
        borderRadius: "20%",
        backgroundColor: "rgba(255, 165, 0, 0.3)",
        rotate:('27deg')

      }}
    ></div> </ScrollRotate>

    <br/>
    <br/>
 <ScrollRotate  loops={3}  method={"perc"} from={0} to={30} > 
  <div
      className="bg-elements   left-fifth-person" id="bg-elements-1"
      data-rellax-speed="-4"
      style={{
        marginLeft:'5vw',
        minHeight: "25vw",
        maxHeight:'25vvw',
        maxWidth: "25vw",
        minWidth: "25vw",
        borderRadius: "20%",
        backgroundColor: "rgba(255, 165, 0, 0.3)",
        transform: "rotate(45deg)"
      }}
    ></div></ScrollRotate> 
              {/* <img
                alt="..."
                className="left-second-person img-raised rellax"
                data-rellax-speed="1"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
              ></img> */}
              {/* <img
                alt="..."
                className="left-second-person img-raised rellax"
                data-rellax-speed="3"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg"
              ></img> */}
              {/* <img
                alt="..."
                className="left-third-person img-raised rellax"
                data-rellax-speed="2"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
              ></img>
              <img
                alt="..."
                className="left-sixth-person img-raised rellax"
                data-rellax-speed="5"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/kerem/128.jpg"
              ></img>
              <img
                alt="..."
                className="left-fifth-person img-raised rellax"
                data-rellax-speed="7"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
              ></img> */}
            </div>
          </Col>
          <Col md="8">
            <Carousel activeIndex={activeIndex} className='carousel-fade'  next={next} previous={previous}  keyboard={false}


pause={false}
ride="carousel"
interval="5000"
           >
              <CarouselIndicators
                items={items}
                className="my-0 review-carousel-indicators"
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {items.map((item, key) => {
                return (
                  <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={key}
                  className='reviewcarouselitems'>
                    {item.content}
                  </CarouselItem>
                );
              })}
              <a
                className="left carousel-control review-carousel-controls carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
              >
                <span className="now-ui-icons arrows-1_minimal-left" />
            
              </a>
              <a
                className="right carousel-control review-carousel-controls carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  next();
                }}
                role="button"
              >
                <span className="now-ui-icons arrows-1_minimal-right" />
              
              </a>
            </Carousel>
          </Col>
          <Col md="2">
            <div className="testimonials-people">
            <ScrollRotate  loops={3}  method={"perc"} from={110} to={150} > 
  <div
      className="bg-elements   right-fifth-person" id="bg-elements-4"
      data-rellax-speed="-4"
      style={{
 
        minHeight: "20vw",
        maxHeight:'20vw',
        maxWidth: "20vw",
        minWidth: "20vw",
        borderRadius: "20%",
        backgroundColor: "rgba(255, 165, 0, 0.3)",
        transform: "rotate(45deg)"
      }}
    ></div></ScrollRotate> 
           
            </div>
          </Col>
        </Row>
        </div>
        <div id="clipped-div-upside" style={{height:'8vh',position:'relative',zIndex:'1000',
          width:'100%',
      backgroundImage:"url("+require('../../assets/img/Artboard7.svg')+")" ,backgroundSize:"cover",  backgroundPosition: 'center' }}>
      </div>
   
   </div> </>
  );
}

export default Testimonials;
