import HomeBanner from "../../components/homebanner";
import Button from '@mui/material/Button';
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';
import ProductItem from "../../components/productItem/productItem";
import Homecat from "../../components/Homecat";



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
            <Homecat/>
            <div className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img className="cursor" src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" alt=""></img>
                                <img className="cursor mt-5 banner2" src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" alt=""></img>
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
                                    slidesPerGroup={2}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    
                                </Swiper>
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <div className="info">
                                    <h3 className="mb-0 hd">New Products</h3>
                                    <p className="text-light">New Products will Updated Soon</p>
                                </div>
                                <Button className="viewButton ml-auto">View all <FaArrowRight className="ml-auto" /></Button>
                            </div>
                            <div className="product_row">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    slidesPerGroup={2}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
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