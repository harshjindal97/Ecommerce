import HomeBanner from "../../components/homebanner";
import Button from '@mui/material/Button';
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../components/productItem/productItem";



const Home = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };
    return (
        <>
            <HomeBanner />
            <div className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img className="cursor" src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" alt=""></img>
                            </div>
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center ">
                                <div className="info">
                                    <h3 className="mb-0 hd">Best Seller</h3>
                                    <p className="text-light">Do not miss the current offers until the end of the march</p>
                                </div>
                                <Button className="viewButton ml-auto">View all <FaArrowRight className="ml-auto" /></Button>
                            </div>
                            <div className="product_row">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Home;