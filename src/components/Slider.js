import React from "react";
import { Carousel } from "react-bootstrap";
import com from "../image2/Hostikibg@2x.png";
import net from "../image5/bg@2x.png";
import "../Css/Slider.css";

const Slider = () => {
  return (
 <div className="slip">


    <Carousel indicators={false}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.umutyasar.com/wp-content/uploads/2021/11/SLIDER5.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.umutyasar.com/wp-content/uploads/2021/11/SLIDER5.jpg"
      
        alt="Second slide"
      />
  
      <Carousel.Caption>
     
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.umutyasar.com/wp-content/uploads/2021/11/SLIDER5.jpg"
     
        alt="Third slide"
      />
  
      <Carousel.Caption>
      
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  
  );
};

export default Slider;
