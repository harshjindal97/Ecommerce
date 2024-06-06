import HomeBanner from "../../components/homebanner";
import Button from '@mui/material/Button';
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../components/productItem/productItem";
import Homecat from "../../components/Homecat";
import { CiMail } from "react-icons/ci";
import ProductModal from "../../components/productModal";


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
            <Homecat />

            <div className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sticky">
                                <div className="banner">
                                    <img className="cursor" src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" alt=""></img>
                                    <img className="cursor mt-5 banner2" src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" alt=""></img>
                                </div>
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
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
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
                            <div className="product_row productRow2 product-items w-100 d-flex">
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <div className="d-flex  bannerflex mt-4 mb-4">
                                    <div className="banner">
                                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-01.jpg" alt=""></img>
                                    </div>
                                    <div className="banner">
                                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-02.jpg" alt=""></img>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="newsSection mt-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">$20 discount on your first order</p>
                            <h4 className="text-white">Join our newsletter and get...</h4>
                            <p className="text-light">Join our email subscription <br/>now to get updates on promotions and coupons.</p>
                            <form >
                                <CiMail />
                                <input type="text" placeholder="Your Email Address"></input>
                                <Button>Subscribe</Button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};
export default Home;