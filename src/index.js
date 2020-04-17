import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/css/mycustom.css";
import "assets/scss/now-ui-kit.scss";
// import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages
// import AboutUs from "views/AboutUs.js";
// import BlogPost from "views/examples/BlogPost.js";
// import BlogPosts from "views/examples/BlogPosts.js";
// import ContactUs from "views/examples/ContactUs.js";
// import Ecommerce from "views/examples/Ecommerce.js";
// import Index from "views/Index.js";
import LandingPage from "views/LandingPage.js";
import AmenitiesPage from "views/AmenitiesPage.js";
import ContactUsPage from 'views/ContactUsPage.js';
import AboutPage from 'views/AboutUsPage.js';
import EventsPage from 'views/EventsPage.js';
import EventPage from 'views/EventPage.js';
import FaqPage from 'views/FAQPage.js';
import WorkWithUs from 'views/WorkWithUsPage.js';
import OurNews from 'views/OurNewsPage';
import PropertiesPage from 'views/PropertiesPage';
// import ProductsPage from "views/ProductsPage.js";
// import LoginPage from "views/examples/LoginPage.js";
// import NucleoIcons from "views/NucleoIcons.js";
// import Presentation from "views/Presentation.js";
// import Pricing from "views/examples/Pricing.js";
// import ProductPage from "views/examples/ProductPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";
// import Sections from "views/Sections.js";
// import SignupPage from "views/examples/SignupPage.js";
// others

ReactDOM.render(<React.Fragment>
  <BrowserRouter>
    <Switch>
    {/* <Route path="/products" render={props => <ProductsPage {...props} />} />
      <Route path="/about-us" render={props => <AboutUs {...props} />} /> */}
      <Route path="/home" render={props => <LandingPage {...props} />} />
      <Route path="/amenities" render={props => <AmenitiesPage {...props} />} />
      <Route path="/about-us" render={props => <AboutPage {...props} />} />
      <Route path="/contact-us" render={props => <ContactUsPage {...props} />} />
      <Route path='/events/:id' render={props=><EventPage {...props} />} />
<Route path='/events' render={props =><EventsPage {...props}/>}/>
<Route path='/faq' render={props =><FaqPage {...props}/>}/>
<Route path='/work-with-us' render={props =><WorkWithUs {...props}/>}/>
<Route path='/our-news' render={props =><OurNews {...props}/>}/>
<Route path='/properties/:location' render={props=><PropertiesPage{...props}/>}/>

      
{/* 
      <Route path="/blog-post" render={props => <BlogPost {...props} />} />
      <Route path="/blog-posts" render={props => <BlogPosts {...props} />} />
      <Route path="/contact-us" render={props => <ContactUs {...props} />} />
   <Route path="/e-commerce" render={props => <Ecommerce {...props} />} />
     <Route path="/index" render={props => <Index {...props} />} />
       <Route
//         path="/landing-page"
//         render={props => <LandingPage {...props} />}
//       />
//       <Route path="/login-page" render={props => <LoginPage {...props} />} />
//       <Route
//         path="/nucleo-icons"
//         render={props => <NucleoIcons {...props} />}
//       />
//       <Route
//         path="/presentation"
//         render={props => <Presentation {...props} />}
//       />
//       <Route path="/pricing" render={props => <Pricing {...props} />} />
//       <Route
//         path="/product-page"
//         render={props => <ProductPage {...props} />}
//       />
//       <Route
//         path="/profile-page"
//         render={props => <ProfilePage {...props} />}
//       />
//       <Route path="/sections" render={props => <Sections {...props} />} />
//       <Route path="/sign-up" render={props => <SignupPage {...props} />} />*/}
    <Redirect to="/home" /> 
    </Switch>
  </BrowserRouter>
{/* <LandingPage/> */}
</React.Fragment>,
  document.getElementById("root")
);
