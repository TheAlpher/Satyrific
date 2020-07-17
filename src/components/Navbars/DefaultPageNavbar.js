import React from "react";
import { Link } from "react-router-dom";
import img1 from "./../../assets/img/brandlogomini3.png";
import img2 from "./../../assets/img/BRANDLOGOMINI2.png";
import axios from'axios';
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Modal,  Card,
  CardHeader,
  CardBody,
  CardTitle,
  ModalFooter,
  NavLink,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function ScrollTransparentNavbar(props) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [modalNotice, setModalNotice] = React.useState(false);
  const [modalNotice1, setModalNotice1] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(
    // (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
    //   ? ""
    //   : " navbar-transparent"
    ""
  );
  const [first1Focus, setFirst1Focus] = React.useState(false);
    const [last1Focus, setLast1Focus] = React.useState(false);
    const [email1Focus, setEmail1Focus] = React.useState(false);
    const [first2Focus, setFirst2Focus] = React.useState(false);
    const [email2Focus, setEmail2Focus] = React.useState(false);
    const [dropdownOpen, setdropdownOpen]=React.useState(false);
    const [dropdownOpen1, setdropdownOpen1]=React.useState(false);
  const[fullNameNavbar,setFullNameNavbar]=React.useState('');
const [messageNavbar,setMessageNavbar]=React.useState('');
const [contactNavbar,setContactNavbar]=React.useState('');
const [emailNavbar,setEmailNavbar]=React.useState('');
  const [buyButtonColor, setBuyButtonColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? "info"
      : "neutral"
  );

  const handleInputChangeNavbar=(event)=>{
   let target = event.target;
    console.log(target.value)
   let value =target.value;

    let name = target.name;
if(name == 'Navbarcontact'){
  setContactNavbar(value)
}
else if(name == 'Navbarname')
   {
    setFullNameNavbar(value)
   }
   else if(name =='Navbarmessage'){
setMessageNavbar(value)
   }
   else if(name=='Navbaremail'){
     setEmailNavbar(value)
   }
}

const handleSubmitNavbar=(event)=>{
  event.preventDefault();
  console.log("submitting")
console.log(contactNavbar.length)

  if(contactNavbar =='' && emailNavbar =='') {
    let post = {'name':fullNameNavbar,'phone':contactNavbar,"message":messageNavbar,'email':emailNavbar,type:'enquiry',sender: "stayrificWebsite"};
    console.log(" bad post")
    console.log(post)
    document.getElementById('modal-error').style.opacity=1; 
    document.getElementById('modal-error').innerHTML="* Please add Contact Number or Email"
  setTimeout(function(){

document.getElementById('modal-error').style.opacity=0;
return;},1500)

  }
  else{
  let post = {'name':fullNameNavbar,'phone':contactNavbar,"message":messageNavbar,'email':emailNavbar,type:'enquiry',sender: "stayrificWebsite"};
  // createPost(post).then(res => console.log(res));
console.log(post)
axios.post('https://us-central1-website-d02cf.cloudfunctions.net/mailer',post).then((res)=>{
console.log(res)
if(res.status==200){
  document.getElementById('modal-error').style.color='green'; 
  document.getElementById('modal-error').style.opacity=1; 
  document.getElementById('modal-error').innerHTML="We will get in touch with you soon"
setTimeout(function(){


setModalNotice(false);
setFullNameNavbar('');
setMessageNavbar('');
setContactNavbar('');
setEmailNavbar('')

return;},1500)


}
else{
  document.getElementById('modal-error').style.opacity=1; 
  document.getElementById('modal-error').innerHTML="Request Attempt Failed ,Try Again";
  setTimeout(function(){

    document.getElementById('modal-error').style.opacity=0;
    return;},1500)
    
   
}  


})

}
}


const navToggle=()=>{
 setdropdownOpen(!dropdownOpen);
}

const navMouseEnter=()=>{
 setdropdownOpen(true);
}

const navMouseLeave=()=>{
 setdropdownOpen(false);
}


const navToggle1=()=>{
  setdropdownOpen1(!dropdownOpen1);
 }
 
 const navMouseEnter1=()=>{
  setdropdownOpen1(true);
 }
 
 const navMouseLeave1=()=>{
  setdropdownOpen1(false);
 }
 



  React.useEffect(() => {
    if(props.activelink){
   let x= document.getElementsByClassName('navbar-item');
// Arrx.push(document.getElementsByClassName('dropdown-toggle'))
let y=[]
let k=Array.from(x);
// k.forEach((item)=>{
//   y.push(item.firstChild)
// })
k.push(Array.from(document.getElementsByClassName('dropdown-toggle'))[0])
k.push(Array.from(document.getElementsByClassName('dropdown-toggle'))[1])

let z=Array.from(document.getElementsByClassName('dropdown-item'));

z.forEach((item1)=>{
  k.push(item1)
})
console.log(k)
console.log(props.activelink)

   k.forEach((item)=>{
    //  console.log(item.firstChild.innerHTML)
     
    if(item.firstChild.firstChild.innerHTML==props.activelink){
      console.log(item.firstChild.firstChild.innerHTML)
      item.classList.add('active')
    }
    else if(item.firstChild.innerHTML==props.activelink){
      console.log(item.firstChild.innerHTML)
      item.classList.add('active') 
    }
   })
  
  }
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
        document.getElementById("logoimage").src = img2;
        setBuyButtonColor("info");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor("");
        //  navbar-transparent
        document.getElementById("logoimage").src = img2;
        setBuyButtonColor("neutral");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });


  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top" + navbarColor}  expand="lg" >
        <Container
          style={{ marginLeft: "5%", marginRight: "0%",paddingRight:'0', display: "flex" }}
        >
          <div className="navbar-translate mr-2">
            <NavbarBrand href="/" style={{ maxWidth: "30vw" }}>
              <img
                alt="logo"
                id="logoimage"
                width="35%"
                src={require("assets/img/BRANDLOGOMINI2.png")}
              />
            </NavbarBrand>
            {/* <UncontrolledTooltip target="navbar-brand">
              Designed by Invision. Coded by Creative Tim
            </UncontrolledTooltip> */}
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
         
            <Nav className="ml-auto" id="ceva" navbar>
              <NavItem className="navbar-item">
                <Link
                  className="nav-link btn-default "
                  color={buyButtonColor}
                  to="/home"
                  // target="_blank"
                  onClick={()=>{
                  document.documentElement.classList.toggle("nav-open");
                  // setCollapseOpen(!collapseOpen)
                }}
                >
                  <p>Home</p>
                </Link>
              </NavItem>
              <NavItem className="navbar-item"       onClick={()=>{
                  document.documentElement.classList.toggle("nav-open");
                    // setCollapseOpen(!collapseOpen)
                  }}>
                <Link
                  className="nav-link btn-default "
                  color={buyButtonColor}
                  to="/about-us"
            
                  // target="_blank"
                >
                  <p>About Us</p>
                </Link>
              </NavItem>
              <UncontrolledDropdown  onMouseOver={navMouseEnter} onMouseLeave={navMouseLeave} isOpen={dropdownOpen} toggle={navToggle}>
                <DropdownToggle 
                  caret
                  color="default"
                  tag={Link}
                  className="nav-link btn-default "
                 to='#'
                  id="navbarDropdownMenuLink"
                  // nav
                  // onClick={e => e.preventDefault()}
                >
                  {/* <i
                    aria-hidden={true}
                    className="now-ui-icons design_image"
                  ></i> */}
                  <p>Features</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" style={{backgroundColor:'rgb(213, 251, 254)'}} right>
                <DropdownItem tag={Link} to="/amenities"           onClick={()=>{
                  document.documentElement.classList.toggle("nav-open");
        
                }} style={{textAlign:'center'}}>
                    {/* <i className="now-ui-icons design_bullet-list-67"></i> */}
                    <p>Amenities</p>
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/about-us"            onClick={()=>{
                  document.documentElement.classList.toggle("nav-open");
        
                }}style={{textAlign:'center'}}>
                    {/* <i className="now-ui-icons business_bulb-63"></i> */}
                    <p>Community</p>
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/faq"           onClick={()=>{
                  document.documentElement.classList.toggle("nav-open");
        
                }} style={{textAlign:'center'}}>
                    {/* <i className="now-ui-icons text_align-left"></i> */}
                    <p>Technology</p>
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/blog-posts"           onClick={()=>{
                  document.documentElement.classList.toggle("nav-open");
        
                }} style={{textAlign:'center'}}>
                    {/* <i className="now-ui-icons design_bullet-list-67"></i> */}
                    <p>Security</p>
                  </DropdownItem>
  
               
                </DropdownMenu>
              </UncontrolledDropdown>
            
            
              <UncontrolledDropdown  onMouseOver={navMouseEnter1} onMouseLeave={navMouseLeave1} isOpen={dropdownOpen1} toggle={navToggle1}>
                <DropdownToggle 
                  caret
                  color="default"
                  tag={Link}
                  to='#'
                  className="nav-link btn-default "
                 
                  id="navbarDropdownMenuLink"
                  // nav
                  // onClick={e => e.preventDefault()}
                >
                  {/* <i
                    aria-hidden={true}
                    className="now-ui-icons design_image"
                  ></i> */}
                  <p>Locations</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" style={{backgroundColor:'rgb(213, 251, 254)'}} right>
                <DropdownItem tag={Link} to="/properties/Satya Niketan"           onClick={()=>{
                  document.documentElement.classList.toggle("nav-open");
        
                }} style={{textAlign:'center'}}>
                    {/* <i className="now-ui-icons design_bullet-list-67"></i> */}
                    <p>Satya Niketan</p>
                  </DropdownItem>
                 
  
               
                </DropdownMenu>
              </UncontrolledDropdown>
            
              {/* <NavItem className="navbar-item">
                <NavLink
                  className="nav-link btn-default "
                  color={buyButtonColor}
                  href="/amenities"
                  // target="_blank"
                >
                  <p>Amenities</p>
                </NavLink> 
              </NavItem> */}
              <NavItem className="navbar-item">
                <Link
                  className="nav-link btn-default "
                  color={buyButtonColor}
                  to="/blog"
                  // target="_blank"  
                  onClick={()=>{
                  document.documentElement.classList.toggle("nav-open");
        
                }}
                >
                  <p>Blog</p>
                </Link>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  className="nav-link btn-default"
                  color={buyButtonColor}
                  href="/contact-us"
                  //   target="_blank"
                >
                  <p>Contact Us</p>
                </NavLink>
              </NavItem> */}
              <NavItem >
                <NavLink
                  className="nav-link btn-default pay-now-collapse-item"
                  color={buyButtonColor}
             
                  style={{ textAlign: "center" }}
                  //   target="_blank"
                >
              <Button
            onClick={() => setModalNotice(true)}
            style={{
              // zIndex: "10000",
              // position: "absolute",
              // right: "0.5%",
            margin:'auto',

              marginTop: "1.7%",
            }}
            className=" btn-round call-now-mini-navbar-item"
            color="primary"
          >
         Contact Us
            {/* <i className="fas fa-phone"></i> */}
          </Button>   </NavLink>
              </NavItem>
          
              <NavItem >
                <NavLink
                  className="nav-link btn-default pay-now-collapse-item"
                  // color={buyButtonColor}
       
                  style={{ textAlign: "center" }}
                  //   target="_blank"
                >
                  {/* {" "} */}
                  <Button
                  
                    className=" btn-round pay-now-collapse-btn btn-info"
                    id="tooltip511894367"
                    type="button"
                    color="info"
                  >
                    Pay Now
                  </Button>
                </NavLink>
              </NavItem>
              
            </Nav>

          </Collapse>
           <Modal isOpen={modalNotice} toggle={() => setModalNotice(false)}>
          <div className="modal-header">
            <button
              aria-hidden={true}
              className="close"
              onClick={() => setModalNotice(false)}
              type="button"
            >
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </button>
            <h5 className="modal-title" id="myModalLabel">
              Request A Call
            </h5>
          </div>
          <div className="modal-body">
            
             <Form id="contact-form1" onSubmit={handleSubmitNavbar}  role="form">
                    
                    <CardBody>
                      <Row>
                        <Col className="" md="12">
                          <label>Name</label>
                          <InputGroup
                            className={first1Focus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons users_circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Name..."
                              autoComplete="given-name"
                              placeholder="Name..."
                              required={true}
                              name='Navbarname'
                              type="text"
                              value={fullNameNavbar}
                              onChange={handleInputChangeNavbar}
                              onFocus={() => setFirst1Focus(true)}
                              onBlur={() => setFirst1Focus(false)}
                            ></Input>
                          </InputGroup>
                        </Col>
                     </Row>
                      <FormGroup>
                      <label>Contact No.</label>
                        <InputGroup>
                      <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons tech_mobile"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                  
                            // autoComplete="phone"
                            placeholder="Contact No."
                            maxLength="10"
                            minLength="10"
                            type="tel"
                            value={contactNavbar}
                            name='Navbarcontact'
                            onChange={handleInputChangeNavbar}
                            onFocus={() => setEmail1Focus(true)}
                            onBlur={() => setEmail1Focus(false)}
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Email address</label>
                        <InputGroup
                          className={email1Focus ? "input-group-focus" : ""}
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
                            name='Navbaremail'
                            value={emailNavbar}
                            onChange={handleInputChangeNavbar}
                           
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                  
                  
                      <FormGroup>
                        <label>Your message</label>
                        <Input
                    
                          id="message"
                          name="Navbarmessage"
                          rows="6"
                          value={messageNavbar}
                          onChange={handleInputChangeNavbar}
                          type="textarea"
                        ></Input>
                      </FormGroup>
                  <div id='modal-error' style={{color:'red',textAlign:'center',width:'100%'}}>&nbsp;</div>
                      <Row>
        
                        <Col md="12" className='text-center'>
                          <Button
                            className="btn-round "
                            color="info"
                            type="submit"
                          id='modal-send'
                          >
                            Request
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
            
          </div>
      
        </Modal>
       
       
       
        </Container>
 
        <Button
         
          onClick={() => setModalNotice(true)}
          className=" btn-round call-now-btn mr-3"
       color="primary"
        >
        Contact Us
          {/* <i className="fas fa-phone"></i> */}
        </Button>
        <Button
          className=" btn-round pay-now-btn "
          id="tooltip511894367"
          type="button"
          color='info'
        >
          Pay Now
        </Button>
       
        </Navbar>
    </>
  );
}

export default ScrollTransparentNavbar;
