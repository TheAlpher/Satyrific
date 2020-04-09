import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingCards from "components/LandingPageCards.js";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Button,
  CardTitle
} from "reactstrap";


// core components
AOS.init();
function Pills(props) {
  // const [horizontalTabs, setHorizontalTabs] = React.useState("1");
  // const [verticalTabs, setVerticalTabs] = React.useState("1");
  // const [cards,setCards]=React.useState(<></>);
  const [iconHorizontalTabs, setIconHorizontalTabs] = React.useState("1");
  // const [iconVerticalTabs, setIconVerticalTabs] = React.useState("1");
  // const [justIconHorizontalTabs, setJustIconHorizontalTabs] = React.useState(
  //   "1"
  // );
  // const [justIconVerticalTabs, setJustIconVerticalTabs] = React.useState("1");
React.useEffect(()=>{


})
  return (
    <>

        <Container>
          <Row style={{ marginTop: "-15%" }}>
            <Col xs="12" md="12">
              <Nav
                className="nav-pills-info  my-5 nav-pills-icons"
                pills
                role="tablist"
                style={{
                  justifyContent: "center"
 
                }}
              >
                <NavItem data-aos="zoom-in" className="mx-3">
                  <NavLink
                    className={iconHorizontalTabs === "1" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setIconHorizontalTabs("1");
                    }}
                    style={{
                      // fontSize: "large",
                      border: "1px solid grey",
                      color: "black",
                      borderRadius: "10px",
                      paddingRight: "50px ",
                      paddingLeft: "50px ",
                      paddingTop: "30px",
                      paddingBottom: "30px",
                      backgroundColor: "white"
                    }}
                  >
                    <img src={require("../assets/img/hostel1.png")}  alt='Satya_Niketan'/>
                    <br />
                    Satya Niketan
                  </NavLink>
                </NavItem>
                <NavItem data-aos="zoom-in" className="mx-3">
                  <NavLink
                    className={iconHorizontalTabs === "2" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setIconHorizontalTabs("2");
                    }}
                    style={{
                      fontSize: "larger",
                      border: "1px solid grey",
                      color: "black",
                      borderRadius: "10px",
                      paddingRight: "50px ",
                      paddingLeft: "50px ",
                      paddingTop: "30px",
                      paddingBottom: "30px",
                      backgroundColor: "white"
                    }}
                  >
                    <img src={require("../assets/img/hostel2.png")} alt='Noida'/>
                    <br />
                    Noida
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent
                className="tab-space mt-3"
                activeTab={"iconHorizontalTabs" + iconHorizontalTabs}
              >
                <TabPane tabId="iconHorizontalTabs1" unmountOnExit='false'>
                <LandingCards items={props.items} />
                </TabPane>
                <TabPane tabId="iconHorizontalTabs2" transition='true'>
                <LandingCards items={props.items1}/> 
                                 </TabPane>
              </TabContent>
            </Col>
          </Row>
       
       
        </Container>
     
    </>
  );
}

export default Pills;
