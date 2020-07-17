import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import CarouselSlider from "react-carousel-slider";

import {
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardFooter,
    Container,
    Row,
    Col,
    Modal,
    ModalFooter,
    Button,
  } from "reactstrap";
    class PropertiesModal extends Component{
constructor(props){
    super(props);

}
        render(){




  
    return(
        <Modal  isOpen={this.props.modalNotice} toggle={() => this.props.changeModalNotice(false)}>
        <div className="modal-header">
          <button
            aria-hidden={true}
            className="close"
            onClick={() =>  this.props.changeModalNotice(false)}
            type="button"
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h5 className="modal-title" id="myModalLabel">
            How Do You Become an Affiliate?
          </h5>
        </div>
        <div className="modal-body">
          <div className="instruction">
            <Row>
              <Col md="8">
                <strong>1. Register</strong>
                <p className="description">
                  The first step is to create an account at{" "}
                  <a
                    href="http://www.creative-tim.com/?ref=nuk-pro-react-index"
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                  . You can choose a social network or go for the classic
                  version, whatever works best for you.
                </p>
              </Col>
              <Col md="4">
                <div className="picture">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/pricing1.jpg")}
                  ></img>
                </div>
              </Col>
            </Row>
          </div>
          <div className="instruction">
            <Row>
              <Col md="8">
                <strong>2. Apply</strong>
                <p className="description">
                  The first step is to create an account at{" "}
                  <a
                    href="http://www.creative-tim.com/?ref=nuk-pro-react-index"
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                  . You can choose a social network or go for the classic
                  version, whatever works best for you.
                </p>
              </Col>
              <Col md="4">
                <div className="picture">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/project9.jpg")}
                  ></img>
                </div>
              </Col>
            </Row>
          </div>
          <p>
            If you have more questions, don't hesitate to contact us or send
            us a tweet @creativetim. We{"'"}re here to help!
          </p>
        </div>
        <ModalFooter className="justify-content-center">
          <Button
            className="btn-round"
            color="info"
            onClick={() =>  this.props.changeModalNotice(false)}
          >
            Sounds good!
          </Button>
        </ModalFooter>
      </Modal>

    )
}
    }

    export default PropertiesModal;