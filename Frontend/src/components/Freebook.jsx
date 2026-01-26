import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
import Card from "./Card"; // adjust path if needed

const Freebook = () => {
  const filterdata = list.filter((data)=> data.category==='free');
  console.log(filterdata);

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

  return (
   <>
   <div className='ml-3 mb-11 '>
    <div>
    <h1 className='text-3xl mb-2'>Free course offered</h1>
    <p className='mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur eum voluptatem vero repellat quo voluptatum accusamus optio necessitatibus, tenetur mollitia, minus autem cupiditate accusantium placeat explicabo odio deserunt molestiae culpa!</p>
    </div>
  
   <div> <Slider {...settings}>
       {filterdata.map((item) => (
  <Card key={item.id} item={item} />
))}

      </Slider>

   </div>
    </div>
   </>
  )
}

export default Freebook
