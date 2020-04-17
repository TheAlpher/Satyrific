import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "assets/jss/GridContainer";
import GridItem from "assets/jss/GridItem";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Input,
    InputGroupAddon,
    InputGroupText,

    InputGroup,
    NavItem,
    NavLink,
    Nav,
    Label,
    Form,
    FormGroup,
    CardHeader,
    Container,
    Row,
    Col,
    TabContent,
    TabPane
  } from "reactstrap";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import styles from "assets/jss/sectionCards.js";
  const useStyles = makeStyles(styles);
function LandingPageCards(props){
    const classes = useStyles();
    React.useEffect(() => {
        if (window) {
          window.addEventListener("resize", addStylesForRotatingCards);
        }
        addStylesForRotatingCards();
        return function cleanup() {
          if (window) {
            window.removeEventListener("resize", addStylesForRotatingCards);
          }
        };
    });
    const addStylesForRotatingCards = () => {
        var rotatingCards = document.getElementsByClassName(classes.cardRotate);
        for (let i = 0; i < rotatingCards.length; i++) {
          var rotatingCard = rotatingCards[i];
          var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
          var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
          cardFront.style.height = "unset";
          cardFront.style.width = "unset";
          cardBack.style.height = "unset";
          cardBack.style.width = "unset";
          var rotatingWrapper = rotatingCard.parentElement;
          var cardWidth = rotatingCard.parentElement.offsetWidth;
          var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
          rotatingWrapper.style.height = cardHeight + "px";
          rotatingWrapper.style["margin-bottom"] = 0 + "px";
          cardFront.style.height = "unset";
          cardFront.style.width = "unset";
          cardBack.style.height = "unset";
          cardBack.style.width = "unset";
          cardFront.style.height = cardHeight + 10 + "px";
          cardFront.style.width = cardWidth + "px";
          cardBack.style.height = cardHeight + 10 + "px";
          cardBack.style.width = cardWidth + "px";
        }
      };

      return(<>

        <Container className="mb-5">

        <GridContainer className="my-2 py-3">
        {props.items.map(item => {
              return (
          <GridItem data-aos="zoom-in-up" className='my-1 py-1 px-1' xs={6} sm={6} md={6} lg={4}
          key={item.src}>
            <div className={classes.rotatingCardContainer}>
              <Card className={classes.cardRotate}>
                <div className={classes.front}>
                  <CardBody
                    className={classes.cardBodyRotate}
                    style={{ minHeight: "37vh" }}
                  >
                               <h5
                      className={classes.cardTitle + 'cardtitle pt-2'}
                      style={{ fontFamily: "Lato",textAlign:'center' }}
                    >
                      {item.title}
                    </h5>
                    <img
                      className="mx-auto my-auto"
                      src={item.src}
                      width="70%"
                      alt={item.altText}
                    />
                    {/* <Success>
                      <h5 className={classes.cardCategorySocial}>
                        <i className="far fa-newspaper" />
                        TechCrunch
                      </h5>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        This Card is Doing a Full Rotation on Hover...
                      </Link>
                    </h4>
                    <p className={classes.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth And I love you like
                      Kanye loves Kanye I love Rick Owens’ bed design but the
                      back is...
                    </p> */}
                  </CardBody>
                </div>
                <div className={classes.back}>
                  <CardBody
                    className={classes.cardBodyRotate}
                    style={{ border: "1px solid orange" }}
                  >
         
                    <p className={classes.cardDescription} style={{fontSize:'medium'}}>
                     {item.info}
                    </p>
                    {/* <div className={classes.textCenter}>
                      <Button round color="rose">
                        <Subject /> Read
                      </Button>
                      <Button round justIcon color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button round justIcon color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button round justIcon color="facebook">
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  */}
                  </CardBody>
                </div>
              </Card>
            </div>
          </GridItem>
              )})}
   
        </GridContainer>
      </Container>
</>
      );
}

export default LandingPageCards;