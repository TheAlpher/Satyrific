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
import FixedNavbar from "components/Navbars/EventNavbar.js";
import BlogPostHeader from "components/Headers/BlogPostHeader1.js";
import FooterBlack from "components/Footers/FooterBlack.js";
import { isTemplateExpression } from "typescript";
import { useHistory } from "react-router-dom";
function BlogPost(props) {
let [title,setTitle]=React.useState(null);
let [author,setAuthor]=React.useState(null);
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
   let data=res.content;
        var template = document.createElement('div');
        template.innerHTML=data;
        document.getElementById('post-container').appendChild(template)
            // console.log(typeof(res.data.items[0].blog.published))
          }
   }
          );

console.log(props.match.params.id)
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
      <FixedNavbar />
      <div className="wrapper">
        <BlogPostHeader title={title} author={author}/>
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
    </>
  );
}

export default BlogPost;
