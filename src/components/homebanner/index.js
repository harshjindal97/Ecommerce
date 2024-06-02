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
                    <img className="w-100" src="https://sslimages.shoppersstop.com/sys-master/root/h99/h09/32787629309982/luxe-sunglasses-web600--2024-05-29-new-hpmepage.jpg" alt=""></img>
                </div>
                <div className="item">
                    <img className="w-100" src="https://sslimages.shoppersstop.com/sys-master/root/hae/hdd/32767795691550/Static-Web-Stop-Life_202u--.jpg" alt=""></img>
                </div>
                <div className="item">
                    <img className="w-100" src="https://sslimages.shoppersstop.com/sys-master/root/hbd/he3/32767795822622/Static-Web-And-Forever-New_29--jn.jpg" alt=""></img>
                </div>
                <div className="item">
                    <img className="w-100" src="https://sslimages.shoppersstop.com/sys-master/root/h07/hca/32767796150302/Static-Web-titan%2C-casio_4793-wj.jpg" alt=""></img>
                </div>
            </Slider>

        </div>
    )
}

export default HomeBanner;