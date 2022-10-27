import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './productSlyder.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';


function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div
        className={"arrow right"}
        onClick={onClick}
      > <KeyboardArrowRightIcon /> </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick, } = props;
    return (
      <div
        className={"arrow left"}
        onClick={onClick}
      ><KeyboardArrowLeftIcon /></div>
    );
  }


const ProductSlyder = ({filterCategory}) => {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
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

     const navigate = useNavigate()

  return (
    <Slider {...settings}>
       {filterCategory && filterCategory.map((item,index)=>{
        return(
            <div>
                <div className='back_red'>
                    <div className='slyder_img'>
                        <img src={item.imgUrl} alt="" />
                    </div>
                    <div className='info_data'>
                        <h2>{item.productName}</h2>
                        <p>{item.category}</p>
                        <div className='price'>
                            <h3>${item.price}</h3>
                            <button type=""><i className='ri-add-line'></i></button>
                        </div>

                    </div>
                </div>
            </div>
        )
       })}
  </Slider>
  )
}

export default ProductSlyder