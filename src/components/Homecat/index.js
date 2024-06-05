import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Homecat = () => {
    return (
        <div className="homecat mt-3">
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
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt=""></img>
                        <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default Homecat;