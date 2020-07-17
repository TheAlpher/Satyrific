import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  Input,
  Media,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { Link } from "react-router-dom";
// core components
import DefaultNavbar from "components/Navbars/DefaultPageNavbar.js";
import BlogPostHeader from "components/Headers/BlogPostHeader1.js";
import FooterBlack from "components/Footers/FooterBlack.js";
import Footer from 'components/Footers/Myfooter';
import { isTemplateExpression } from "typescript";
import { useHistory } from "react-router-dom";
function BlogPost(props) {
let [title,setTitle]=React.useState(null);
let [author,setAuthor]=React.useState(null);
let [event_header_bg,set_event_header_bg]=React.useState(null);

let facebooklink='https://www.facebook.com/sharer/sharer.php?u=https://stayrific.in'+ props.match.url ;
 let twitterlink='http://twitter.com/share?text=Check Out this cool event!&url=https://stayrific.in'+ props.match.url +'&hashtags=Stayrific,StayTerrific';
  React.useEffect(() => {

        fetch("https://www.googleapis.com/blogger/v3/blogs/3261234612673840962/posts/"+props.match.params.id+"/?fetchBodies=true&&fetchImages=true&&key=AIzaSyBM0DKpr4ruF4cJJBfPc7m0bQrALMLSEPA ")
          .then(res => res.json())
          .then(res =>{
            if(res.error){
             props.history.push('/home');
            }
            else{
              setTitle(res.title);
              setAuthor(res.author.displayName);
              set_event_header_bg(res.images[0].url)
   let data=res.content;
        var template = document.createElement('div');
        template.innerHTML=data;
        document.getElementById('post-container').appendChild(template)
            // console.log(typeof(res.data.items[0].blog.published))
          }
   }
          );


    document.body.classList.add("blog-post");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-post");
      document.body.classList.remove("sidebar-collapse");
    };
  },[]);
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

      <DefaultNavbar />
      <div className="wrapper">
        <BlogPostHeader title={title} author={author} bg={event_header_bg}/>
        <div className="section">
          <Container>
            <Row>
              <Col md="12">
                <div className="button-container" style={{display:'flex'}}>
                  
                  <Button
                    className="btn-icon btn-round ml-auto"
                    color="twitter"
                    size="lg"
                  >
                 <a href={twitterlink} style={{textDecoration:'none',color:'white'}} >
                    <i className="fab fa-twitter"></i></a>
                  </Button>
                  <Button
                    className="btn-icon btn-round mx-2"
                    color="facebook"
                    size="lg"
                  ><a href={facebooklink} style={{textDecoration:'none',color:'white'}} >
                    <i className="fab fa-facebook-square"></i></a>
                  </Button>
                  <Button
                    className="btn-icon btn-round mr-auto" 
                    color="google"
                    size="lg"
                  >
                    <i className="fab fa-google"></i>
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="section">
            <Container id='post-container'>

            </Container>
          </div>
         
      </div></div>
      <Footer/>
    </>
  );
}

export default BlogPost;
