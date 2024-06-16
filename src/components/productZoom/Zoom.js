import React from 'react'
import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';

const Zoomin = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider className='productModalimage' {...settings}>
                <div>
                    <InnerImageZoom className='innerImage' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg" zoomSrc="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg" zoomType='hover' zoomScale={1} />
                </div>
                <div>
                    <InnerImageZoom className='innerImage' src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg' zoomSrc="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg" zoomType='hover' zoomScale={1} ></InnerImageZoom>
                </div>
                <div>
                    <InnerImageZoom className='innerImage' src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg' zoomSrc='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg' zoomType='hover' zoomScale={1} ></InnerImageZoom>
                </div>
            </Slider>
        </div>
    )
}

export default Zoomin
