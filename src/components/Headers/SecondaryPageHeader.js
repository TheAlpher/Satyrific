import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
let headerbg=[{
  src:  require("../../assets/img/lpage_header_2.jpg") ,
  creditTag:(<a className='secondary-page-header-credits' href="https://www.freepik.com/free-photos-vectors/house">House vector created by vectorpouch - www.freepik.com</a>)
},
{
  src:  require("../../assets/img/lpage_header_3.jpg") ,
  creditTag:(<a  className='secondary-page-header-credits' href="https://www.freepik.com/free-photos-vectors/abstract">Abstract vector created by macrovector - www.freepik.com</a>)
},
{
  src:  require("../../assets/img/lpage_header_1.jpg") ,
  creditTag:(<a className='secondary-page-header-credits' href="https://www.freepik.com/free-photos-vectors/travel">Travel photo created by rawpixel.com - www.freepik.com</a>)
},
{
src: require('../../assets/img/lpage_header_4.jpg'),
creditTag:(<a className='secondary-page-header-credits' href="https://www.freepik.com/free-photos-vectors/abstract">Abstract vector created by macrovector - www.freepik.com</a>)
},
{
  src: require('../../assets/img/lpage_header_5.jpg'),
  creditTag:(<a className='secondary-page-header-credits'  href="https://www.freepik.com/free-photos-vectors/house">House vector created by vectorpocket - www.freepik.com</a>)
}]
let x=Math.floor(Math.random() * 5);

function AmenitiesPageHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    let x=991;


      x=991;
 
    if (window.innerWidth > x) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }  
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + headerbg[x].src + ")"
          }}
          ref={pageHeader}
        >
         
        </div>
        <Container>
          {/* <div className="photo-container">
            <img alt="..." src={require("assets/img/ryan.jpg")}></img>
          </div> */}
          
          <h1 className="title">{props.title}</h1>
          {/* <p className="category">Photographer</p>
          <div className="content">
            <div className="social-description">
              <h2>26</h2>
              <p>Comments</p>
            </div>
            <div className="social-description">
              <h2>26</h2>
              <p>Comments</p>
            </div>
            <div className="social-description">
              <h2>48</h2>
              <p>Bookmarks</p>
            </div>
          </div>
        */}
       
        </Container>
        <div id="clipped-div-upside" style={{height:'8vh',position:'absolute', bottom:0,zIndex:'1000',
          width:'100%',
      backgroundImage:"url("+require('../../assets/img/Artboard7.svg')+")" ,backgroundSize:"cover",  backgroundPosition: 'center' }}></div> 
        {headerbg[x].creditTag}
      </div>           </>
  );
}

export default AmenitiesPageHeader;
