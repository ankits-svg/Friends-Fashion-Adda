import "./slick.css"; 
import "./slick-theme.css";
import Card from "./Card";
import Slider from "react-slick";
import {data0} from '../ProductsData'

export const SimpleSlider=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

      
      return (
        <Slider {...settings} className="SS1">
          {data0.map((el)=><Card img={el.img}/>)}
        </Slider>
      )
}