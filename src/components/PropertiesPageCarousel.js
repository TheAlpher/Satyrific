import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import CarouselSlider from "react-carousel-slider";

const manner = {
    autoSliding: {interval: "1s"},
    duration: "1s"
    }; 


const buttonSetting = {
placeOn: "middle-inside",
hoverEvent: true,
style: {
    left: {
        height: "35px",
        width: "35px",
        color: "#929393",
        background: "rgba(225, 228, 232, 0.8)",
        borderRadius: "50%"
    },
    right: {
        height: "35px",
        width: "35px",
        color: "#929393",
        background: "rgba(225, 228, 232, 0.8)",
        borderRadius: "50%"
    }
}
}; 

    class PropertiesCarousel extends Component{
constructor(props){
    super(props);

}
        render(){

  console.log("Carousel Triggered")
      console.log(this.props.items)

  
    return(
      <Router>  
          <CarouselSlider slideItems = {this.props.items}  
        manner = {manner} 
        buttonSetting = {buttonSetting} 
        />
        </Router>

    )
}
    }

    export default PropertiesCarousel;