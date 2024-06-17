import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import strawberry from '../../assets/images/strawberry.png'

const Homecat = () => {
    return (
        <div className="homecat mt-3 mb-3">
            <div className="container">
            <h3 className="mb-3 hd">Featured Catagories</h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={10}
                    slidesPerGroup={2}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper cursor"
                >

                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src={strawberry} alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default Homecat;