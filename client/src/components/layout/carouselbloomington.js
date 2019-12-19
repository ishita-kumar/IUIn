import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";    
import "slick-carousel/slick/slick-theme.css";
import Item1 from "../../assets/venue1.png";
import Item2 from "../../assets/venue2.png";
import Item3 from "../../assets/venue3.png";
import Item4 from "../../assets/venue4.png";
import Item5 from "../../assets/venue5.png";
import Item6 from "../../assets/venue6.png";
// import Item7 from "../../assets/venue7.png";



export default class CenterMode extends Component {
  
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "1px",
      slidesToShow:3,
      speed: 500,
      responsive: [{breakpoint: 500, settings: {autoplay: true, slidesToShow: 1}}],
      dots: true,
      
      draggable: true
      
    };
    return (
      <div style={{paddingTop:"30px"}}>
       
        <Slider {...settings}>
          <div>
            <img
                                src={Item1}
                                style={{width:"350px", marginLeft:"1px",borderRadius:"20px", marginRight:"5px"}}
                                alt="..."
                              />
          </div>
          <div>
          <img
                                src={Item2}
                                style={{width:"350px", marginLeft:"1px",borderRadius:"20px", marginRight:"5px"}}
                               
                                alt="..."
                              />
          </div>
          <div>
          <img
                                src={Item3}
                                style={{width:"350px", marginLeft:"1px",borderRadius:"20px", marginRight:"5px"}}
                               
                                alt="..."
                              />
          </div>
          <div>
          <img
                                src={Item4}
                                style={{width:"350px", marginLeft:"1px",borderRadius:"20px", marginRight:"5px"}}
                               
                                alt="..."
                              />
          </div>
          <div>
          <img
                                src={Item5}
                                style={{width:"350px", marginLeft:"1px",borderRadius:"20px", marginRight:"5px"}}
                               
                                alt="..."
                              />
          </div>
          <div>
          <img
                                src={Item6}
                                style={{width:"350px", marginLeft:"1px",borderRadius:"20px", marginRight:"5px"}}
                               
                                alt="..."
                              />
          </div>
        </Slider>
      </div>
    );
  }
}