import "./slick.css"; 
import "./slick-theme.css";
import Card1 from "./Card";
import Slider from "react-slick";
import {data3} from '../ProductsData'

export const SimpleSlider1=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

      
      return (
        <Slider {...settings} className="SS1">
          {data3.map((el)=><Card1 img={el.image} title={el.name} category={el.category} price={el.price} cancel={el.canceledprice}/>)}
        </Slider>
      )
}

/*
"id": "29",
            "gender": "female",
            "category": "kurta",
            "image": "https://images.bewakoof.com/t320/women-s-printed-long-kurti-dress-364700-1635869709-1.jpg",
            "name": "Women's Printed Long Kurti Dress",
            "price": "499",
            "canceledprice": "1849",
            "tribe": "₹ 459 For TriBe Members"
*/