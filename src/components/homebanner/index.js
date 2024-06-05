import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="homebanner">
            <Slider {...settings}>
                <div className="item">
                    <img className="w-100" src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-6.jpg" alt=""></img>
                </div>
                <div className="item">
                    <img className="w-100" src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-7.jpg" alt=""></img>
                </div>
            </Slider>

        </div>
    )
}

export default HomeBanner;