import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../src/list.json";
import Cards from "./Cards";
function Booklist (){
    const filterData=list.filter((data)=> data.category==="CSE");
    console.log(filterData);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
      <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <h1 className="font-semibold text-xl pb-2">C Language</h1>
      
      <div>
      <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>
      </div>
      </div>
      </>
    )
  }
  
  export default Booklist;