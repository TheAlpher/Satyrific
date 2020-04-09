import React from "react";
import { Link } from "react-router-dom";
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
import EventsNavbar from "components/Navbars/EventsPageNavbar";
import SecondaryHeader from "components/Headers/SecondaryPageHeader";
import axios from "axios";
import { Divider } from "@material-ui/core";

function EventsPage(props) {
    
  let content1 = null;
  const [content, setContent] = React.useState([]);
  const [myState, setMyState] = React.useState(0);

  React.useEffect(() => {
    fetch(
      "https://www.googleapis.com/blogger/v3/blogs/3261234612673840962/posts/?orderBy=updated&&prettyPrint=true&&fetchBodies=true&&fetchImages=true&&maxResults=10&&key=AIzaSyBM0DKpr4ruF4cJJBfPc7m0bQrALMLSEPA "
    )
      .then(res => res.json())
      .then(res =>
        // let data=res.data.items[0].content;
        // var template = document.createElement('div');
        // template.innerHTML=data;
        // document.getElementById('mycontainer').appendChild(template)
        // console.log(typeof(res.data.items[0].blog.published))

        setContent(res.items)
      );
    // content1=res.data.items;
  }, []);

  return (
    <>
      {" "}
      <EventsNavbar />
      <SecondaryHeader title="Events" />
      <Container id="mycontainer"></Container>
      <div className="blogs-1" id="blogs-1">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <h2 className="title">Latest Events</h2>
              <br></br>

              {content.map((item, index) => {
                let img = require("assets/img/examples/card-blog6.jpg");
                let data = item.content;
                let template = document.createElement("div");
                template.innerHTML = data;

                let content = template.firstChild.innerHTML.split("<br>")[0];
                if (item.images != undefined) {
                  img = item.images[0].url;
                }
                if (index % 2 == 0) {
                  return (
                    <Card className="card-plain card-blog">
                      <Row>
                        <Col md="5">
                          <div className="card-image">
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              style={{ height: "100%" }}
                              src={img}
                            ></img>
                          </div>
                        </Col>
                        <Col md="7">
                          <h6 className="category text-info mt-3">
                            {item.updated.split("T")[0]}
                          </h6>
                          <CardTitle tag="h3">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              {item.title}
                            </a>
                          </CardTitle>
                          <p className="card-description">
                            {content}...
                            <a href={"events/" + item.id} target="_blank">
                              <b>Read More</b>
                            </a>
                          </p>
                          <p className="author">
                            by{" "}
                        
                              <b>{item.author.displayName}</b>
                            
                            {/* <br/> {item.updated.split('T')[0]} */}
                          </p>
                        </Col>
                      </Row>
                    </Card>
                  );
                } else {
                  return (
                    <Card className="card-plain card-blog">
                      <Row>
                        <Col md="7">
                          <h6 className="category text-info mt-3">
                            {item.updated.split("T")[0]}
                          </h6>
                          <CardTitle tag="h3">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              {item.title}
                            </a>
                          </CardTitle>
                          <p className="card-description">
                            {content}...
                            <a href={"events/" + item.id} target="_blank">
                              <b>Read More</b>
                            </a>
                          </p>
                          <p className="author">
                            by{" "}
                        
                              <b>{item.author.displayName}</b>
                            
                            {/* <br/>{item.updated.split('T')[0]} */}
                          </p>
                        </Col>
                        <Col md="5">
                          <div className="card-image">
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              style={{ height: "100%" }}
                              src={img}
                            ></img>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  );
                }
              })}

              {/* <Card className="card-plain card-blog">
          <Row>
            <Col md="7">
              <h6 className="category text-danger">
                <i className="now-ui-icons now-ui-icons media-2_sound-wave"></i>{" "}
                Startup
              </h6>
              <CardTitle tag="h3">
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Insticator raises $5.2M to help publishers
                </a>
              </CardTitle>
              <p className="card-description">
                Insticator is announcing that it has raised $5.2 million
                in Series A funding. The startup allows online
                publishers to add quizzes, polls and other interactive
                elements (either created by Insticator or by the
                publisher themselves) to their stories.{" "}
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <b>Read More</b>
                </a>
              </p>
              <p className="author">
                by{" "}
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <b>Anthony Ha</b>
                </a>
                , 5 days ago
              </p>
            </Col>
            <Col md="5">
              <div className="card-image">
                <img
                  alt="..."
                  className="img img-raised rounded"
                  style={{height:'100%'}}
                  src={require("assets/img/examples/card-blog6.jpg")}
                ></img>
              </div>
            </Col>
          </Row>
        </Card>
      */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default EventsPage;
