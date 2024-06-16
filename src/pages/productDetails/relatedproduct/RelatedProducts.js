import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { FaArrowRight } from "react-icons/fa";
import ProductItem from '../../../components/productItem/productItem';


const RelatedProducts = (props) => {
    return (
        <div>
            <div className="col productRow p-4">
                <div className="d-flex align-items-center pl-4 pr-4">
                    <div className="info">
                        <h3 className="mb-0 hd">{props.title}</h3>
                        <p className="text-light">Do not miss the current offers until the end of the march</p>
                    </div>
                </div>
                <div className="xyz product_row pl-4 pr-4 ">
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={10}
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
            </div>
        </div>
    )
}

export default RelatedProducts
