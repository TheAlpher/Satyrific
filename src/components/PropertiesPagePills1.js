import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Link , animateScroll as scroll } from "react-scroll";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { tns } from "tiny-slider/src/tiny-slider";
// declare module 'react-carousel-slider'
import CarouselSlider from "react-carousel-slider";
// import LandingPageCards from './LandingPageCards.js';
import PropertiesCards from "components/PropertiesPageCards";
import PropertiesCarousel from "./PropertiesPageCarousel";
import ACTSModal from "./PropertiesPillsModal";
// reactstrap components
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
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
// import { defaultProps } from "react-select/src/Select";

// core components
AOS.init();

const items1 = [
  {
    imgSrc: require("../assets/img/satyaniketan3.jpg"),
  },
  {
    imgSrc: require("../assets/img/satyaniketan2.jpg"),
  },
  {
    imgSrc: require("../assets/img/satyaniketan1.jpg"),
  },
  {
    imgSrc: require("../assets/img/satyaniketan2.jpg"),
  },
  {
    imgSrc: require("../assets/img/satyaniketan3.jpg"),
  },
  {
    imgSrc: require("../assets/img/satyaniketan1.jpg"),
  },
];
const items = [
  {
    imgSrc: require("../assets/img/satyaniketan1.jpg"),
  },
  {
    imgSrc: require("../assets/img/satyaniketan2.jpg"),
  },
  {
    imgSrc: require("../assets/img/satyaniketan1.jpg"),
  },
  {
    imgSrc: require("../assets/img/satyaniketan2.jpg"),
  },
  {
    imgSrc: require("../assets/img/satyaniketan1.jpg"),
  },
  {
    imgSrc: require("../assets/img/satyaniketan2.jpg"),
  },
];
let autoSliding1 = {
  items: items1,
};
let autoSliding2 = {
  items: items,
};
let autoSliding3 = {
  items: items1,
};
const amenitiesitems = [
  {
    title: "Air Conditioner",
    info: " All Rooms are fiited with dedicated Air Conditioners",
    src: require("../assets/img/AC.png"),

    altText: "AC",
  },
  {
    title: "Gym",
    info: "  All students have access to our world class gym facilities",
    src: require("../assets/img/gym.png"),

    altText: "Gym",
  },
  {
    title: " Housekeeping",
    info: " Housekeeping service is available for all students",
    src: require("../assets/img/housekeeping.png"),

    altText: "Housekeeping",
  },
  {
    title: "Meals",
    info: " Students are provided 4  meals everyday with a lot of choices",
    src: require("../assets/img/meals.png"),

    altText: "Meals",
  },
  {
    title: " Laundry",
    info: " Laundry service is available for all students",
    src: require("../assets/img/laundry.png"),

    altText: "Laundry",
  },
  {
    title: "Reading Room",
    info: " All students have access to our Reading Room",
    src: require("../assets/img/library.png"),

    altText: "Reading Room",
  },
];
const communityitems = [
  {
    title: "Weekly Events",
    info: " All Rooms are fiited with dedicated Air Conditioners",
    src: require("../assets/img/AC.png"),

    altText: "AC",
  },
  {
    title: "Movie Nights",
    info: "  All students have access to our world class gym facilities",
    src: require("../assets/img/gym.png"),

    altText: "Gym",
  },
];
const technologyitems = [
  {
    title: "App Based Stay",
    info: " All Rooms are fiited with dedicated Air Conditioners",
    src: require("../assets/img/AC.png"),

    altText: "AC",
  },
  {
    title: "Online Payments",
    info: "  All students have access to our world class gym facilities",
    src: require("../assets/img/gym.png"),

    altText: "Gym",
  },
];
const securityitems = [
  {
    title: "Fully Guarded Campus",
    info: " All Rooms are fiited with dedicated Air Conditioners",
    src: require("../assets/img/AC.png"),

    altText: "AC",
  },
  {
    title: "Biometrics",
    info: "  All students have access to our world class gym facilities",
    src: require("../assets/img/gym.png"),

    altText: "Gym",
  },
];
const locations = [
  {
    title: "2nd Lane, Satya Niketan",
    position: { lat: 28.5876, lng: 77.1696 },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adhic sapiente, quia ratione eos deserunt alias reprehenderierror ducimus obcaecati.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Adhic sapiente, quia ratione eos deserunt alias reprehenderit",
    carousel: {
      items: [
        {
          imgSrc: require("../assets/img/satyaniketan1.jpg"),
        },
        {
          imgSrc: require("../assets/img/satyaniketan1.jpg"),
        },
        {
          imgSrc: require("../assets/img/satyaniketan1.jpg"),
        },
        {
          imgSrc: require("../assets/img/satyaniketan1.jpg"),
        },
        {
          imgSrc: require("../assets/img/satyaniketan1.jpg"),
        },
        {
          imgSrc: require("../assets/img/satyaniketan2.jpg"),
        },
      ],
    },
    distances: [
      {
        from: "Venkateshwar College",
        value: 1,
      },
      {
        from: "IGI Airport",
        value: 10,
      },
      {
        from: "New Delhi Railway Station",
        value: 20,
      },
    ],
    amenities: [
      {
        title: "In House Gym",
        component: (
          <i className="fas fa-3x fa-dumbbell" style={{ color: "#f96332" }}></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Laundry",
        component: (
          <i className="fas fa-3x fa-dumbbell" style={{ color: "#f96332" }}></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Air Conditioner",
        component: (
          <i className="fas fa-3x fa-dumbbell" style={{ color: "#f96332" }}></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Housekeeping",
        component: (
          <i className="fas fa-3x fa-dumbbell" style={{ color: "#f96332" }}></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Meals",
        component: (
          <i className="fas fa-3x fa-dumbbell" style={{ color: "#f96332" }}></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
    ],
    community: [
      {
        title: "Weekly Events",
        component: (
          <i
            className="far fa-3x fa-handshake"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Gaming Competitions",
        component: (
          <i
            className="far fa-3x fa-handshake"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Movie Nights",
        component: (
          <i
            className="far fa-3x fa-handshake"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Housekeeping",
        component: (
          <i
            className="far fa-3x fa-handshake"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Meals",
        component: (
          <i
            className="far fa-3x fa-handshake"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
    ],
    technology: [
      {
        title: "App Based Stay",
        component: (
          <i
            className=" fa-3x fas fa-tablet-alt"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Smart Room Entry",
        component: (
          <i
            className=" fa-3x fas fa-tablet-alt"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Online Payments",
        component: (
          <i
            className=" fa-3x fas fa-tablet-alt"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Housekeeping",
        component: (
          <i
            className=" fa-3x fas fa-tablet-alt"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Meals",
        component: (
          <i
            className=" fa-3x fas fa-tablet-alt"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
    ],
    security: [
      {
        title: "Fully Guarded Campus",
        component: (
          <i
            className="fas fa-shield-alt fa-3x"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "CCTV Recording",
        component: (
          <i
            className="fas fa-shield-alt fa-3x"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Biometrics",
        component: (
          <i
            className="fas fa-shield-alt fa-3x"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Housekeeping",
        component: (
          <i
            className="fas fa-shield-alt fa-3x"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Meals",
        component: (
          <i
            className="fas fa-shield-alt fa-3x"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
    ],
    occupancies: [
      {
        type: "Single Occupancy",
        component: (
          <div
            className="my-2"
            style={{ color: "#f96332", fontSize: "1.5rem" }}
          >
            <i className="fas  fa-bed"></i>
          </div>
        ),
        price: 18000,
      },
      {
        type: "Double Occupancy",
        component: (
          <div
            className="my-2"
            style={{ color: "#f96332", fontSize: "1.5rem" }}
          >
            <i className="fas mr-1  fa-bed"></i> <i className="fas  fa-bed"></i>
          </div>
        ),
        price: 9000,
      },
      {
        type: "Triple Occupancy",
        component: (
          <div
            className="my-2"
            style={{ color: "#f96332", fontSize: "1.5rem" }}
          >
            <i className="fas  fa-bed"></i> <i className="fas  fa-bed"></i>{" "}
            <i className="fas  fa-bed"></i>
          </div>
        ),
        price: 6000,
      },
    ],
  },
  {
    title: "Satya Niketan Road, Satya Niketan",
    position: { lat: 28.5876, lng: 77.169 },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adhic sapiente, quia ratione eos deserunt alias reprehenderierror ducimus obcaecati.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Adhic sapiente, quia ratione eos deserunt alias reprehenderit",
    carousel: {
      items: [
        {
          imgSrc: require("../assets/img/satyaniketan2.jpg"),
        },
        {
          imgSrc: require("../assets/img/satyaniketan2.jpg"),
        },
        {
          imgSrc: require("../assets/img/satyaniketan2.jpg"),
        },
        {
          imgSrc: require("../assets/img/satyaniketan2.jpg"),
        },
        {
          imgSrc: require("../assets/img/satyaniketan2.jpg"),
        },
        {
          imgSrc: require("../assets/img/satyaniketan2.jpg"),
        },
      ],
    },
    amenities: [
      {
        title: "In House Gym",
        component: (
          <i className="fas fa-3x fa-dumbbell" style={{ color: "#f96332" }}></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Laundry",
        component: (
          <i className="fas fa-3x fa-dumbbell" style={{ color: "#f96332" }}></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Air Conditioner",
        component: (
          <i className="fas fa-3x fa-dumbbell" style={{ color: "#f96332" }}></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Housekeeping",
        component: (
          <i className="fas fa-3x fa-dumbbell" style={{ color: "#f96332" }}></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Meals",
        component: (
          <i className="fas fa-3x fa-dumbbell" style={{ color: "#f96332" }}></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
    ],
    community: [
      {
        title: "Weekly Events",
        component: (
          <i
            className="far fa-3x fa-handshake"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Gaming Competitions",
        component: (
          <i
            className="far fa-3x fa-handshake"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Movie Nights",
        component: (
          <i
            className="far fa-3x fa-handshake"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Housekeeping",
        component: (
          <i
            className="far fa-3x fa-handshake"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Meals",
        component: (
          <i
            className="far fa-3x fa-handshake"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
    ],
    technology: [
      {
        title: "App Based Stay",
        component: (
          <i
            className=" fa-3x fas fa-tablet-alt"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Smart Room Entry",
        component: (
          <i
            className=" fa-3x fas fa-tablet-alt"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Online Payments",
        component: (
          <i
            className=" fa-3x fas fa-tablet-alt"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Housekeeping",
        component: (
          <i
            className=" fa-3x fas fa-tablet-alt"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Meals",
        component: (
          <i
            className=" fa-3x fas fa-tablet-alt"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
    ],
    security: [
      {
        title: "Fully Guarded Campus",
        component: (
          <i
            className="fas fa-shield-alt fa-3x"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "CCTV Recording",
        component: (
          <i
            className="fas fa-shield-alt fa-3x"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Biometrics",
        component: (
          <i
            className="fas fa-shield-alt fa-3x"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Housekeeping",
        component: (
          <i
            className="fas fa-shield-alt fa-3x"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Meals",
        component: (
          <i
            className="fas fa-shield-alt fa-3x"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
    ],
    distances: [
      {
        from: "Venkateshwar College",
        value: 1,
      },
      {
        from: "IGI Airport",
        value: 10,
      },
      {
        from: "New Delhi Railway Station",
        value: 20,
      },
    ],
    occupancies: [
      {
        type: "Single Occupancy",
        component: (
          <div
            className="my-2"
            style={{ color: "#f96332", fontSize: "1.5rem" }}
          >
            <i className="fas  fa-bed"></i>
          </div>
        ),
        price: 18000,
      },
      {
        type: "Double Occupancy",
        component: (
          <div
            className="my-2"
            style={{ color: "#f96332", fontSize: "1.5rem" }}
          >
            <i className="fas mr-1  fa-bed"></i> <i className="fas  fa-bed"></i>
          </div>
        ),
        price: 9000,
      },
      {
        type: "Triple Occupancy",
        component: (
          <div
            className="my-2"
            style={{ color: "#f96332", fontSize: "1.5rem" }}
          >
            <i className="fas  fa-bed"></i> <i className="fas  fa-bed"></i>{" "}
            <i className="fas  fa-bed"></i>
          </div>
        ),
        price: 6000,
      },
    ],
  },
  {
    title: "Nanakpura Road, Satya Niketan",
    position: { lat: 28.5876, lng: 77.168 },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adhic sapiente, quia ratione eos deserunt alias reprehenderierror ducimus obcaecati.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Adhic sapiente, quia ratione eos deserunt alias reprehenderit",
    carousel: {
      items: [
        {
          imgSrc: require("../assets/img/satyaniketan3.jpg"),
        },
        {
          imgSrc: require("../assets/img/satyaniketan3.jpg"),
        },
        {
          imgSrc: require("../assets/img/satyaniketan3.jpg"),
        },
        {
          imgSrc: require("../assets/img/satyaniketan3.jpg"),
        },
        {
          imgSrc: require("../assets/img/satyaniketan3.jpg"),
        },
        {
          imgSrc: require("../assets/img/satyaniketan3.jpg"),
        },
      ],
    },
    distances: [
      {
        from: "Venkateshwar College",
        value: 1,
      },
      {
        from: "IGI Airport",
        value: 10,
      },
      {
        from: "New Delhi Railway Station",
        value: 20,
      },
    ],
    amenities: [
      {
        title: "In House Gym",
        component: (
          <i className="fas fa-3x fa-dumbbell" style={{ color: "#f96332" }}></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Laundry",
        component: (
          <i className="fas fa-3x fa-dumbbell" style={{ color: "#f96332" }}></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Air Conditioner",
        component: (
          <i className="fas fa-3x fa-dumbbell" style={{ color: "#f96332" }}></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Housekeeping",
        component: (
          <i className="fas fa-3x fa-dumbbell" style={{ color: "#f96332" }}></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Meals",
        component: (
          <i className="fas fa-3x fa-dumbbell" style={{ color: "#f96332" }}></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
    ],
    community: [
      {
        title: "Weekly Events",
        component: (
          <i
            className="far fa-3x fa-handshake"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Gaming Competitions",
        component: (
          <i
            className="far fa-3x fa-handshake"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Movie Nights",
        component: (
          <i
            className="far fa-3x fa-handshake"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Housekeeping",
        component: (
          <i
            className="far fa-3x fa-handshake"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Meals",
        component: (
          <i
            className="far fa-3x fa-handshake"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
    ],
    technology: [
      {
        title: "App Based Stay",
        component: (
          <i
            className=" fa-3x fas fa-tablet-alt"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Smart Room Entry",
        component: (
          <i
            className=" fa-3x fas fa-tablet-alt"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Online Payments",
        component: (
          <i
            className=" fa-3x fas fa-tablet-alt"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Housekeeping",
        component: (
          <i
            className=" fa-3x fas fa-tablet-alt"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Meals",
        component: (
          <i
            className=" fa-3x fas fa-tablet-alt"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
    ],
    security: [
      {
        title: "Fully Guarded Campus",
        component: (
          <i
            className="fas fa-shield-alt fa-3x"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "CCTV Recording",
        component: (
          <i
            className="fas fa-shield-alt fa-3x"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Biometrics",
        component: (
          <i
            className="fas fa-shield-alt fa-3x"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Housekeeping",
        component: (
          <i
            className="fas fa-shield-alt fa-3x"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Meals",
        component: (
          <i
            className="fas fa-shield-alt fa-3x"
            style={{ color: "#f96332" }}
          ></i>
        ),
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
    ],
    occupancies: [
      {
        type: "Single Occupancy",
        component: (
          <div
            className="my-2"
            style={{ color: "#f96332", fontSize: "1.5rem" }}
          >
            <i className="fas  fa-bed"></i>
          </div>
        ),
        price: 18000,
      },
      {
        type: "Double Occupancy",
        component: (
          <div
            className="my-2"
            style={{ color: "#f96332", fontSize: "1.5rem" }}
          >
            <i className="fas mr-1  fa-bed"></i> <i className="fas  fa-bed"></i>
          </div>
        ),
        price: 9000,
      },
      {
        type: "Triple Occupancy",
        component: (
          <div
            className="my-2"
            style={{ color: "#f96332", fontSize: "1.5rem" }}
          >
            <i className="fas  fa-bed"></i> <i className="fas  fa-bed"></i>{" "}
            <i className="fas  fa-bed"></i>
          </div>
        ),
        price: 6000,
      },
    ],
  },
];
function Pills(props) {
  const [activelocation, setActiveLocation] = React.useState(locations[0]);
  const [horizontalTabs, setHorizontalTabs] = React.useState("1");
  const [imgitems, SetImgItems] = React.useState(autoSliding1);
  const [modalNotice, setModalNotice] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("Amenities");
  const [modalData, setModalData] = React.useState(activelocation.amenities);
  console.log("location");
  console.log(activelocation);
  const MapWrapper = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={activelocation.position}
        defaultOptions={{
          scrollwheel: false,
          styles: [
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [{ color: "#ffffff" }, { lightness: 17 }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [
                { color: "#ffffff" },
                { lightness: 29 },
                { weight: 0.2 },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }, { lightness: 18 }],
            },
            {
              featureType: "road.local",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }, { lightness: 16 }],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#dedede" }, { lightness: 21 }],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                { visibility: "on" },
                { color: "#ffffff" },
                { lightness: 16 },
              ],
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                { saturation: 36 },
                { color: "#333333" },
                { lightness: 40 },
              ],
            },
            { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
            },
            {
              featureType: "administrative",
              elementType: "geometry.fill",
              stylers: [{ color: "#fefefe" }, { lightness: 20 }],
            },
            {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [
                { color: "#fefefe" },
                { lightness: 17 },
                { weight: 1.2 },
              ],
            },
          ],
        }}
      >
        <Marker position={activelocation.position} />
      </GoogleMap>
    ))
  );

  function changeModalVisibility(x) {
    setModalNotice(x);
  }
  console.log(modalData);
  return (
    <>
      <div className="mx-1 pt-5 mt-5 ">
        <Nav
          className="mx-2 propertiestabs"
          pills
          role="tablist"
          style={{ justifyContent: "center" }}
        >
          <NavItem className="mx-1 my-1 propertiespillslink">
            <NavLink
              className={
                activelocation == locations[0]
                  ? "nav-link1 active "
                  : "nav-link1 "
              }
              href="#pablo"
              style={{
                border: "0 ",
                border: "1px solid transparent !important",
              }}
              onClick={(e) => {
                e.preventDefault();
                setActiveLocation(locations[0]);
                SetImgItems(autoSliding1);
              }}
            >
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-building"></i>
              <CardTitle
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                tag="h4"
                className="text-left mt-3 mb-2 "
                style={{ display: "flex" }}
              >
                {" "}
                &nbsp; 2nd Lane, Satya Niketan
              </CardTitle>
              &nbsp; &nbsp;{" "}
            </NavLink>
          </NavItem>
          <NavItem className="mx-1 my-1 propertiespillslink">
            <NavLink
              className={
                activelocation == locations[1]
                  ? "nav-link1 active "
                  : "nav-link1"
              }
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                setActiveLocation(locations[1]);
                SetImgItems(autoSliding2);
              }}
            >
              <i className="far fa-building"></i>
              <CardTitle
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                tag="h5"
                className="text-left mt-3 mb-2 "
                style={{ display: "flex" }}
              >
                {" "}
                &nbsp; Satya Niketan Road, Satya Niketan
              </CardTitle>
            </NavLink>
          </NavItem>
          <NavItem className="mx-1 my-1 propertiespillslink">
            <NavLink
              className={
                activelocation == locations[2]
                  ? "nav-link1 active "
                  : "nav-link1"
              }
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                setActiveLocation(locations[2]);
                SetImgItems(autoSliding3);
              }}
            >
              <i className="far fa-building"></i>
              <CardTitle
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                tag="h5"
                className="text-left mt-3 mb-2 "
                style={{ display: "flex" }}
              >
                {" "}
                &nbsp; Nanakpura Road, Satya Niketan
              </CardTitle>
            </NavLink>
          </NavItem>
        </Nav>
        <PropertiesCarousel items={activelocation.carousel.items} />

        <TabContent
          className="tab-space"
          activeTab={"horizontalTabs" + horizontalTabs}
        >
          <Modal
            isOpen={modalNotice}
            toggle={() => setModalNotice(false)}
            style={{ marginTop: "5vw" }}
          >
            <div className="modal-header">
              <button
                aria-hidden={true}
                className="close"
                onClick={() => setModalNotice(false)}
                type="button"
              >
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </button>
              <h5
                className="modal-title text-center"
                id="myModalLabel"
                style={{ width: "100%" }}
              >
                {modalTitle}
              </h5>
            </div>
            <div className="modal-body">
              <div className="instruction">
                <Row>
                  {modalData.map((item) => {
                    return (
                      <Col md="4" sm="4" xs="6" className="my-2">
                        <div
                          className="icon-container mx-auto"
                          style={{ display: "block", width: "min-content" }}
                        >
                          {item.component}
                        </div>
                        <p
                          className="my-2 text-center"
                          style={{ fontSize: "small" }}
                        >
                          {item.title}
                        </p>
                        <p
                          className="my-1 text-center"
                          style={{ fontSize: "x-small" }}
                        >
                          {item.description}
                        </p>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </div>
            {/* <ModalFooter className="justify-content-center">
              <Button
                className="btn-round"
                color="info"
                onClick={() => setModalNotice(false)}
              >
                Sounds good!
              </Button>
            </ModalFooter> */}
          </Modal>
          {/* <ACTSModal modalNotice={modalNotice} changeModalNotice={changeModalVisibility}/>  */}
          <TabPane
            tabId="horizontalTabs1"
            className=" pt-5  "
            style={{ marginLeft: "9%", marginRight: "9%" }}
          >
            <Row>
              <Col lg={8} sm={12} xs={12}>
                <Row className="mb-3">
                  <Col
                    md={2}
                    sm={2}
                    xs={1}
                    style={{
                      height: "50%",
                      borderBottom: "2px solid #f96332",
                      margin: "auto",
                      borderRadius: "4px",
                    }}
                  ></Col>
                  <Col md={8} sm={8} xs={9} className="p-0">
                    <CardTitle
                      data-aos="zoom-in-up"
                      data-aos-duration="1000"
                      tag="h1"
                      className="text-center m-0 prop-location-title"
                      style={{
                        fontWeight: "400",
                        color: "#f96332",
                      }}
                    >
                      {" "}
                      {activelocation.title}
                    </CardTitle>
                  </Col>
                  <Col
                    md={2}
                    sm={2}
                    xs={1}
                    style={{
                      height: "50%",
                      borderBottom: "2px solid #f96332",
                      margin: "auto",
                      borderRadius: "4px",
                    }}
                  ></Col>
                </Row>
                <p style={{ lineHeight: "1.1em", fontSize: "medium" }}>
                  {activelocation.description}
                </p>
                <Row
                  className="px-5 mt-4"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <Col md={{ size: 4 }} sm={6} xs={12}>
                    <Card className="text-center mt-1 acts-card">
                      <CardBody className="px-1 py-3">
                        {/* <div className="my-2"
                      style={{color:'#f96332',fontSize:'x-large'}}>
                     <i className="fas  fa-bed"></i>
            
                    </div> */}

                        <Row className="m-0">
                          <Col className="acts-card-item" md={6} sm={6} xs={6}>
                            {activelocation.amenities[0].component}
                            <p className="my-2">
                              {activelocation.amenities[0].title}
                            </p>
                          </Col>
                          <Col className="acts-card-item" md={6} sm={6} xs={6}>
                            {activelocation.amenities[1].component}
                            <p className="my-2">
                              {activelocation.amenities[1].title}
                            </p>
                          </Col>
                          <Col className="acts-card-item" md={6} sm={6} xs={6}>
                            {activelocation.amenities[2].component}
                            <p className="my-2">
                              {activelocation.amenities[2].title}
                            </p>
                          </Col>
                          <Col
                            className="acts-card-item"
                            md={6}
                            sm={6}
                            xs={6}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <p
                              className="my-2"
                              onClick={() => {
                                setModalData(activelocation.amenities);
                                setModalTitle("Amenities");
                                setModalNotice(true);
                              }}
                              style={{
                                fontSize: "small",
                                alignSelf: "center",
                                fontWeight: 400,
                                cursor: "pointer",
                                color: "#f96332",
                              }}
                            >
                              View More
                            </p>
                          </Col>
                        </Row>
                        {/* <h6 className="category text-gray">Growth Hacker</h6>
                    <CardTitle tag="h4">Olivia Thompson</CardTitle>
                    <p className="card-description">"Work hard play harder."</p> */}
                        {/* <CardFooter className='p-2' style={{backgroundColor:"#f96332"}}>
                  <p className=" m-0" style={{fontSize:'x-small',color:'white'}}><b>Single Occupancy</b></p> 
                  <p className=" m-0" style={{fontSize:'x-small',color:'white'}}>INR 16000 PM*</p> 
                    </CardFooter> */}
                      </CardBody>
                    </Card>
                    <CardTitle
                      data-aos="zoom-in-up"
                      data-aos-duration="1000"
                      tag="p"
                      className="text-center"
                    >
                      {" "}
                      <b
                        style={{
                          fontWeight: "bolder",
                          color: "#f96332",
                          // fontSize: "3rem",
                        }}
                      >
                        A
                      </b>
                      menities
                    </CardTitle>
                  </Col>
                  <Col md={{ size: 4 }} sm={6} xs={12}>
                    <Card className="text-center mt-1 acts-card">
                      <CardBody className="px-1 py-3">
                        {/* <div className="my-2"
                      style={{color:'#f96332',fontSize:'x-large'}}>
                     <i className="fas  fa-bed"></i>
            
                    </div> */}

                        <Row className="m-0">
                          <Col className="acts-card-item" md={6} sm={6} xs={6}>
                            {activelocation.technology[0].component}
                            <p className="my-2">
                              {activelocation.technology[0].title}
                            </p>
                          </Col>
                          <Col className="acts-card-item" md={6} sm={6} xs={6}>
                            {activelocation.technology[1].component}
                            <p className="my-2">
                              {activelocation.technology[1].title}
                            </p>
                          </Col>
                          <Col className="acts-card-item" md={6} sm={6} xs={6}>
                            {activelocation.technology[2].component}
                            <p className="my-2">
                              {activelocation.technology[2].title}
                            </p>
                          </Col>
                          <Col
                            className="acts-card-item"
                            md={6}
                            sm={6}
                            xs={6}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <p
                              className="my-2"
                              onClick={() => {
                                setModalData(activelocation.technology);
                                setModalTitle(" Technology ");
                                setModalNotice(true);
                              }}
                              style={{
                                fontSize: "small",
                                alignSelf: "center",
                                fontWeight: 400,
                                cursor: "pointer",
                                color: "#f96332",
                              }}
                            >
                              View More
                            </p>
                          </Col>
                        </Row>
                        {/* <h6 className="category text-gray">Growth Hacker</h6>
                    <CardTitle tag="h4">Olivia Thompson</CardTitle>
                    <p className="card-description">"Work hard play harder."</p> */}
                        {/* <CardFooter className='p-2' style={{backgroundColor:"#f96332"}}>
                  <p className=" m-0" style={{fontSize:'x-small',color:'white'}}><b>Single Occupancy</b></p> 
                  <p className=" m-0" style={{fontSize:'x-small',color:'white'}}>INR 16000 PM*</p> 
                    </CardFooter> */}
                      </CardBody>
                    </Card>
                    <CardTitle tag="p" className="text-center">
                      {" "}
                      <b
                        style={{
                          fontWeight: "bolder",
                          color: "#f96332",
                          // fontSize: "3rem",
                        }}
                      >
                        T
                      </b>
                      echnology
                    </CardTitle>
                  </Col>
                </Row>{" "}
                <Row
                  className="px-5"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <Col md={{ size: 4 }} sm={6} xs={12}>
                    <Card className="text-center mt-1 acts-card">
                      <CardBody className="px-1 py-3">
                        {/* <div className="my-2"
                      style={{color:'#f96332',fontSize:'x-large'}}>
                     <i className="fas  fa-bed"></i>
            
                    </div> */}

                        <Row className="m-0">
                          <Col className="acts-card-item" md={6} sm={6} xs={6}>
                            {activelocation.community[0].component}
                            <p className="my-2">
                              {activelocation.community[0].title.trim(100)}
                            </p>
                          </Col>
                          <Col className="acts-card-item" md={6} sm={6} xs={6}>
                            {activelocation.community[1].component}
                            <p className="my-2">
                              {activelocation.community[1].title}
                            </p>
                          </Col>
                          <Col className="acts-card-item" md={6} sm={6} xs={6}>
                            {activelocation.community[2].component}
                            <p className="my-2">
                              {activelocation.community[2].title}
                            </p>
                          </Col>
                          <Col
                            className="acts-card-item"
                            md={6}
                            sm={6}
                            xs={6}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <p
                              className="my-2"
                              onClick={() => {
                                setModalData(activelocation.community);
                                setModalTitle("Community");
                                setModalNotice(true);
                              }}
                              style={{
                                fontSize: "small",
                                alignSelf: "center",
                                fontWeight: 400,
                                cursor: "pointer",
                                color: "#f96332",
                              }}
                            >
                              View More
                            </p>
                          </Col>
                        </Row>
                        {/* <h6 className="category text-gray">Growth Hacker</h6>
                    <CardTitle tag="h4">Olivia Thompson</CardTitle>
                    <p className="card-description">"Work hard play harder."</p> */}
                        {/* <CardFooter className='p-2' style={{backgroundColor:"#f96332"}}>
                  <p className=" m-0" style={{fontSize:'x-small',color:'white'}}><b>Single Occupancy</b></p> 
                  <p className=" m-0" style={{fontSize:'x-small',color:'white'}}>INR 16000 PM*</p> 
                    </CardFooter> */}
                      </CardBody>
                    </Card>
                    <CardTitle
                      data-aos="zoom-in-up"
                      data-aos-duration="1000"
                      tag="p"
                      className="text-center"
                    >
                      {" "}
                      <b
                        style={{
                          fontWeight: "bolder",
                          color: "#f96332",
                          // fontSize: "3rem",
                        }}
                      >
                        C
                      </b>
                      ommunity
                    </CardTitle>
                  </Col>

                  <Col md={{ size: 4 }} sm={6} xs={12}>
                    <Card className="text-center mt-1 acts-card">
                      <CardBody className="px-1 py-3">
                        {/* <div className="my-2"
                      style={{color:'#f96332',fontSize:'x-large'}}>
                     <i className="fas  fa-bed"></i>
            
                    </div> */}

                        <Row className="m-0">
                          <Col className="acts-card-item" md={6} sm={6} xs={6}>
                            {activelocation.security[0].component}
                            <p className="my-2">
                              {activelocation.security[0].title}
                            </p>
                          </Col>
                          <Col className="acts-card-item" md={6} sm={6} xs={6}>
                            {activelocation.security[1].component}
                            <p className="my-2">
                              {activelocation.security[1].title}
                            </p>
                          </Col>
                          <Col className="acts-card-item" md={6} sm={6} xs={6}>
                            {activelocation.security[2].component}
                            <p className="my-2">
                              {activelocation.security[2].title}
                            </p>
                          </Col>
                          <Col
                            className="acts-card-item"
                            md={6}
                            sm={6}
                            xs={6}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <p
                              className="my-2"
                              onClick={() => {
                                setModalData(activelocation.security);
                                setModalTitle(" Security ");
                                setModalNotice(true);
                              }}
                              style={{
                                fontSize: "small",
                                alignSelf: "center",
                                fontWeight: 400,
                                cursor: "pointer",
                                color: "#f96332",
                              }}
                            >
                              View More
                            </p>
                          </Col>
                        </Row>
                        {/* <h6 className="category text-gray">Growth Hacker</h6>
                    <CardTitle tag="h4">Olivia Thompson</CardTitle>
                    <p className="card-description">"Work hard play harder."</p> */}
                        {/* <CardFooter className='p-2' style={{backgroundColor:"#f96332"}}>
                  <p className=" m-0" style={{fontSize:'x-small',color:'white'}}><b>Single Occupancy</b></p> 
                  <p className=" m-0" style={{fontSize:'x-small',color:'white'}}>INR 16000 PM*</p> 
                    </CardFooter> */}
                      </CardBody>
                    </Card>
                    <CardTitle tag="p" className="text-center">
                      {" "}
                      <b
                        style={{
                          fontWeight: "bolder",
                          color: "#f96332",
                          // fontSize: "3rem",
                        }}
                      >
                        S
                      </b>
                      ecurity
                    </CardTitle>
                  </Col>
                </Row>
              </Col>
              <Col lg={4} sm={12} xs={12}>
                <div
                  className="map-wrapper"
                  style={{
                    padding: "4% 2% 4% 2%",
                    margin:0,
                    borderRadius: "5px",
                  }}
                >
                  <div
                    className="big-map"
                    id="contactUsMap"
                    style={{
                      overflowX: "hidden",
                      height: "47vh",
                    }}
                  >
                    <MapWrapper
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW85sBZkHfzpqR2TBk5pDm2Deq5Mt6paE"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `100%` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                    />
                  </div>
                  <div className="mt-4 px-1">
                    {activelocation.distances.map((item) => {
                      return (
                        <CardTitle
                          data-aos="zoom-in-up"
                          data-aos-duration="1000"
                          tag="p"
                          className="text-left pl-2  my-1 "
                          style={{ display: "flex",fontSize:'1em' }}
                        >
                          {" "}
                          <span
                            style={{ color: "#f96332", fontWeight: "bold" }}
                          >
                            {" "}
                            {item.value}km {"  "}
                          </span>{" "}
                          &nbsp; from &nbsp; <b> {item.from}</b>
                        </CardTitle>
                      );
                    })}
                  </div>
                </div>
                <Row style={{ justifyContent: "space-evenly" }}>
                  {activelocation.occupancies.map((item) => {
                    return (
                      <Col md={4} sm={4} xs={6}>
                        <Card className="text-center mt-4 occupancy-cards">
                          <CardBody className="p-0">
                            {item.component}

                            <CardFooter
                              className="p-2"
                              style={{
                                backgroundColor: "#f96332",
                                padding: "0.48rem ",
                              }}
                            >
                              <p
                                className=" m-0"
                                style={{ fontSize: "x-small", color: "white" }}
                              >
                                <b>{item.type}</b>
                              </p>
                              <p
                                className=" m-0"
                                style={{ fontSize: "x-small", color: "white" }}
                              >
                                INR {item.price} PM*
                              </p>
                            </CardFooter>
                          </CardBody>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </TabPane>
          {/* <TabPane
            tabId="horizontalTabs2"
            className=" pt-5 "
            style={{ marginLeft: "9%", marginRight: "9%" }}
          >
            <CardTitle
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              tag="h5"
              className="text-center"
              style={{ fontWeight: "bold" }}
            >
              Amenities
            </CardTitle>
            <PropertiesCards items={amenitiesitems} />

            <Row
              className="contactus-2   mb-5"
              style={{
                backgroundColor: "white",
                position: "relative",
                zIndex: "1",
              }}
            >
              <Col xs="12" sm="12" md="6" style={{ marginTop: "2%" }}>
                <div
                  className="big-map"
                  id="contactUsMap"
                  style={{
                    // position: "relative",

                    overflowX: "hidden",
                    height: "62vh",
                  }}
                >
                  <MapWrapper
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW85sBZkHfzpqR2TBk5pDm2Deq5Mt6paE"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                </div>

                {/* <div id="map" data-aos="fade-down" data-aos-duration="1500" >
           <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.291506663627!2d77.31577431464314!3d28.591030482434224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f6e191a8a7%3A0xb52a042cdb14632d!2sPranav%20Arts!5e0!3m2!1sen!2sin!4v1583912853373!5m2!1sen!2sin"
          frameborder="0" style={{border:"0",height:'400%',width:'100%'}} allowfullscreen="" aria-hidden="false"
             tabindex="0"></iframe>
         </div>

              </Col>
              <Col xs="12" sm="12" lg="6" md="6" style={{ marginTop: "2%" }}>
                <Card
                  className="card-contact  "
                  style={{
                    maxWidth: "unset",
                    height: "100%",
                    marginLeft: 0,
                    marginTop: 0,
                    boxShadow: "none",
                  }}
                >
                  <CardHeader className="text-center">
                    <CardTitle tag="h4">Contact Us</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md="12">
                        <div className="info " style={{ margin: "0 auto" }}>
                          <div className="icon icon-info">
                            <i className="now-ui-icons tech_mobile"></i>
                          </div>
                          <div className="description m-0">
                            <h5 className="info-title">Give us a ring</h5>
                            <p>
                              Michael Jordan <br></br>
                              +40 762 321 762 <br></br>
                              Mon - Fri, 8:00-22:00
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="info " style={{ margin: "0 auto" }}>
                          <div className="icon icon-info">
                            <i className="now-ui-icons location_pin"></i>
                          </div>
                          <div className="description m-0">
                            <h5 className="info-title">
                              Find us at the office
                            </h5>
                            <p>
                              Bld Mihail Kogalniceanu, nr. 8, <br></br>
                              7652 Bucharest, <br></br>
                              Romania
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </TabPane>
    
       */}
        </TabContent>
      </div>
    </>
  );
}

export default Pills;
