import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// reactstrap components
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
  Container,
  Row,
  Col,
  TabContent,
  TabPane
} from "reactstrap";
const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
   
    },
  
    faqdrop:{
  color:'grey'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  AOS.init();
  function Faqs(props){
    const classes = useStyles();
      return(
        <div className='wrapper faqs'>

        <Container >
  <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h6'  className='text-center' style={{color:'grey'}}>TESTIMONIALS</CardTitle>
      <CardTitle data-aos="zoom-in-up" data-aos-duration='1000' tag='h3'   className='text-center' style={{fontWeight:'bold'}}>Frequently Asked Questions</CardTitle>
  <hr data-aos="zoom-in-up" data-aos-duration='2000' style={{width:'20%',border:'3px solid orange',borderRadius:'3px'}}/>
  </Container>
          <Container>
            <Row  style={{justifyContent:'center'}}>
              <Col className='mx-auto' md='8'>
                <div className={classes.root}>
        <ExpansionPanel  data-aos="zoom-in-up" data-aos-duration='1000' className=' MuiExpansionPanel-rounded my-3 'style={{position:'none', border:'2px solid grey',borderRadius:'40px'}}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <CardTitle tag='h4' style={{fontWeight:'bold'}}>What is a FAQ page?</CardTitle>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.faqdrop}>
            A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy.
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  data-aos="zoom-in-up" data-aos-duration='1000' className=' MuiExpansionPanel-rounded my-3 'style={{position:'none', border:'2px solid grey',borderRadius:'40px'}}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
      <CardTitle tag='h4' style={{fontWeight:'bold'}}>Expansion Panel 2</CardTitle>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <div className={classes.faqdrop}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
         </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  data-aos="zoom-in-up" data-aos-duration='1000' className=' MuiExpansionPanel-rounded my-3 ' style={{ border:'2px solid grey',borderRadius:'40px'}}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
           <CardTitle tag='h4' style={{fontWeight:'bold'}}>Expansion Panel 3</CardTitle>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <div className={classes.faqdrop}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  data-aos="zoom-in-up" data-aos-duration='1000' className=' MuiExpansionPanel-rounded my-3 'style={{ border:'2px solid grey',borderRadius:'40px'}}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
           <CardTitle tag='h4' style={{fontWeight:'bold'}}>Expansion Panel 3</CardTitle>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <div className={classes.faqdrop}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      
      
        <ExpansionPanel  data-aos="zoom-in-up" data-aos-duration='1000' className=' MuiExpansionPanel-rounded my-3 'style={{position:'none', border:'2px solid grey',borderRadius:'40px'}}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
           <CardTitle tag='h4' style={{fontWeight:'bold'}}>Expansion Panel 3</CardTitle>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <div className={classes.faqdrop}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
        
        </div>
              </Col>
            </Row>
          </Container>
        </div> 
   
      )
  }

  export default Faqs;