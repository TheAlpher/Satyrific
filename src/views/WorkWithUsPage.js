import React,{Component} from "react";
import {Link} from 'react-router-dom';
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
  CardFooter,
  UncontrolledTooltip
} from "reactstrap";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
  } from "react-google-maps";
import DefaultNavbar from "components/Navbars/DefaultPageNavbar.js";
import SecondaryPageHeader from "components/Headers/SecondaryPageHeader.js";
import axios from 'axios';
import Footer from 'components/Footers/Myfooter';

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


class FAQPage extends Component{
  constructor(props){
    super(props);
    this.state={
      email1Focus:false,
      first1Focus:false,
      last1Focus:false,
      firstname:'',
      lastname:'',
      message:'',
      phone:'',
      email:'',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const name = target.name;

    this.setState({
        [name]: value
    });
    //this.setState({post: {[name]: value}})

}

handleSubmit(event) {
  event.preventDefault();
  console.log("submitting")
  let post = {name: this.state.firstname+ ' '+ this.state.lastname, message: this.state.message,email:this.state.email,phone:this.state.phone,type:'work',sender: "stayrificWebsite" };
  // createPost(post).then(res => console.log(res));
console.log(post)

axios.post('https://us-central1-website-d02cf.cloudfunctions.net/mailer',post).then((res)=>{

if(res.status==200){
  document.getElementById('work-form-error').style.color='green'; 
  document.getElementById('work-form-error').style.textAlign='center';
  document.getElementById('work-form-error').style.opacity=1; 
  document.getElementById('work-form-error').innerHTML="Request Sent Successfully"
setTimeout(function(){

document.getElementById('work-form-error').style.opacity=0;
return;},1800)


this.setState({
  firstname:'',
  lastname:'',
  message:'',
  phone:'',
  email:''

})
}
else{
  document.getElementById('work-form-error').style.opacity=1; 
  document.getElementById('work-form-error').style.textAlign='center';
  document.getElementById('work-form-error').innerHTML="Request Attempt Failed ,Try Again";
  setTimeout(function(){

    document.getElementById('work-form-error').style.opacity=0;
    return;},1800)
    

}  


})
}
   
    
render(){
  return (
    <>
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

    <div className='bg-elements ' style={{height:0,width:'100%',marginTop:"30vh", position:'absolute',zIndex:'-1000'}}>
       <div className="bg-elements-1 rellax  ml-5 mr-auto"  data-rellax-speed="-7" style={{minHeight:'100px',maxWidth:'100px',borderRadius:'20%', backgroundColor:'rgba(255, 165, 0, 0.3)',transform:'rotate(45deg)'}}></div> 
       <div className="bg-elements-2 rellax mr-5 ml-auto"  data-rellax-speed='-3' style={{ minHeight:'150px',maxWidth:' 150px',borderRadius:'20%', backgroundColor:'rgba(255, 165, 0, 0.3)',transform:'rotate(45deg)'}}></div>
       <div className="bg-elements-3 rellax  mr-auto"  data-rellax-speed='10' style={{ zIndex:'-1000' ,marginLeft:'40vw',minHeight:'50px',maxWidth:'50px',borderRadius:'20%', backgroundColor:'rgba(255, 165, 0, 0.3)',transform:'rotate(45deg)'}}></div>
       </div>      <DefaultNavbar />
      <div className="wrapper">
        <SecondaryPageHeader title="Work With Us" />
<div className='wrapper'>
<Container>   
  
   <Form id="contact-form1"  onSubmit={this.handleSubmit}
  //  onSubmit={()=>{formsubmit()}}
     >
                    <CardHeader className="text-center">
                      <CardTitle tag="h4">Let us Know</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="pr-2" md="6">
                          <label>First name</label>
                          <InputGroup
                            className={this.state.first1Focus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons users_circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                            required={true}
                              aria-label="First Name..."
                              autoComplete="given-name"
                              placeholder="First Name..."
                              type="text"
                              name='firstname'
                              value={this.state.firstname}
                              onChange={this.handleInputChange}
                              onFocus={() => this.setState({first1Focus:true})}
                              onBlur={() => this.setState({first1Focus:false})}
                            ></Input>
                          </InputGroup>
                        </Col>
                        <Col className="pl-2" md="6">
                          <FormGroup>
                            <label>Last name</label>
                            <InputGroup
                              className={this.state.last1Focus ? "input-group-focus" : ""}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons text_caps-small"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                              required={true}
                                aria-label="Last Name..."
                                autoComplete="family-name"
                                placeholder="Last Name..."
                                type="text"
                                value={this.state.lastname}
                                name='lastname'
                                onChange={this.handleInputChange}
                                onFocus={() => this.setState({last1Focus:true})}
                                onBlur={() => this.setState({last1Focus:false})}
                              ></Input>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <label>Email address</label>
                        <InputGroup
                          className={this.state.email1Focus ? "input-group-focus" : ""}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons ui-1_email-85"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                          required={true}
                            autoComplete="email"
                            placeholder="Email Here..."
                            type="email"
                            value={this.state.email}
                            name='email'
                            onChange={this.handleInputChange}
                            onFocus={() => this.setState({email1Focus:true})}
                            onBlur={() =>this.setState({email1Focus:false})}
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                  
                  
                      <FormGroup>
                        <label>Contact Number</label>
                        <InputGroup
                          className={this.state.email1Focus ? "input-group-focus" : ""}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons tech_mobile"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                          required={true}
                            // autoComplete="phone"
                            placeholder="Contact No."
                            maxLength="10"
                            minLength='10'
                            type="tel"
                            name='phone'
                            value={this.state.phone}
                            onChange={this.handleInputChange}
                            onFocus={() => this.setState({email1Focus:true})}
                            onBlur={() =>this.setState({email1Focus:false})}
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                                     
                      <FormGroup>
                        <label>Why do you want to join us</label>
                        <Input
                          id="message"
                          name="message"
                          rows="6"
                          value={this.state.message}
                          type="textarea"
                          placeholder='Why ?'
                          onChange={this.handleInputChange}
                          required={true}
                        ></Input>
                      </FormGroup>
                    
          <div id='work-form-error' tyle={{color:'red', textAlign:'center', width:'100%'}}>&nbsp;</div>
                      <Row>

                        <Col md="12">
                          <Button
                            className="btn-round pull-right"
                            color="info"
                       type='submit'
                       id='work-form-send'
                      
                          >
                            Send It !
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
            </Container></div>
      </div>
      <Footer/>
    </>
  );
}
}
export default FAQPage;