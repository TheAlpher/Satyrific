import React from "react";
import {Link} from 'react-router-dom';
import Rellax from "rellax";

import {
  Badge,
  Button,

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

import DefaultNavbar from "components/Navbars/DefaultPageNavbar.js";

import PropertiesPagePills from 'components/PropertiesPagePills1';
import SecondaryPageHeader from "components/Headers/SecondaryPageHeader.js";
import Footer from 'components/Footers/Myfooter';



function PropertiesPage(props) {
  const [horizontalTabs, setHorizontalTabs] = React.useState("1");
    const [first1Focus, setFirst1Focus] = React.useState(false);
    const [last1Focus, setLast1Focus] = React.useState(false);
    const [email1Focus, setEmail1Focus] = React.useState(false);
    const [first2Focus, setFirst2Focus] = React.useState(false);
    const [email2Focus, setEmail2Focus] = React.useState(false);
    let data = [
        {
            des: "1",
            imgSrc: "https://i.imqur.com/yourImage.jpg"
        },
        {
            des: "2",
            imgSrc: "https://i.imqur.com/yourImage2.jpg"
        }
    ];

    React.useEffect(()=>{
        // var slider = tns({
        //     container: '.my-slider',
        //   controls:true,
          
        //  controlsContainer:'.my-controls',
        //     items: 3,
        //     slideBy:1,
        // nav:true,
        // navPosition:'bottom',
        //     responsive: {
        //       640: {
        //         edgePadding: 20,
        //         gutter: 20,
        //         items: 2
        //       },
        //       700: {
        //         gutter: 30
        //       },
        //       900: {
        //         items: 3,
        //         gutter: 50
        //       }
        //     }
        //   });
        //   let x=document.getElementById('slider-container').style.width;
        // document.getElementById('customize-controls').style.width=x;

        // let x1=document.getElementById('slider-internal').getBoundingClientRect().top;
        // let x2=document.getElementById('slider-internal').style.height;
        // let x1=document.getElementById('customize-controls').getBoundingClientRect().top;
          if (window.innerWidth >= 801) {
            setTimeout(function() {
              new Rellax(".rellax", {
                center: false
              });
            }, 100);
            new Rellax(".rellax-header");
            new Rellax(".rellax-text");
          }
      
    })

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
       </div>     
        <DefaultNavbar activelink={props.match.params.location} />
     <div className='wrapper'>
        <SecondaryPageHeader title={props.match.params.location} />
       
         <PropertiesPagePills/> 
         </div>
    {/* <CustomUpload/> */}
 
      <Footer/>
    </>
  );
}
export default PropertiesPage;