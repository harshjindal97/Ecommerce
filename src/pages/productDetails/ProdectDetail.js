import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import Zoomin from '../../components/productZoom/Zoom';
import QuantityBox from '../../components/quantityBox/QuantityBox';
import Button from '@mui/material/Button';
import { BsCartFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { HiArrowsUpDown } from "react-icons/hi2";
import Tooltip from '@mui/material/Tooltip';
import ProductItem from "../../components/productItem/productItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { FaArrowRight } from "react-icons/fa";
import RelatedProducts from './relatedproduct/RelatedProducts';


const ProductDetail = () => {
    const [activeSize, setActiveSize] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="productDetail">
            <div className='container bg-white p-4'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Zoomin />
                    </div>
                    <div className='col-md-7'>
                        <h2 style={{ fontWeight: 600, fontSize: '20px' }}>All Natural Italian-Style Chicken Meatballs</h2>
                        <ul className='list list-inline d-flex align-items-center'>
                            <li className='list-inline-item'>
                                <div className='d-flex align-items-center mr-2'>
                                    <span>Brands:</span>
                                    <span className='ml-2 mr-2'>Welch's</span>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <div className='d-flex align-items-center'>
                                    <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                                    <span className='ml-2 text-light'>1 rating</span>
                                </div>
                            </li>
                        </ul>
                        <div className="price mb-2">
                            <span style={{ fontWeight: 500, fontSize: "18px", textDecoration: 'line-through', opacity: 0.5 }} className="oldPrice text-bold mr-1">$100</span>
                            <span style={{ fontWeight: 600, fontSize: "23px" }} className="newPrice text-danger ml-2 text-bold">$80</span>
                        </div>
                        <span className='instock'>In Stock</span>
                        <p className='mt-4'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus <br />malesuada tincidunt. Class aptent taciti sociosqu <br />ad litora torquent</p>
                        <div className='productSize d-flex align-items-center mb-4'>
                            <span>Size / Weight :</span>
                            <ul className='list list-inline-item mb-0 pl-3'>
                                <li className={`list-inline-item p-1 pl-3 pr-3 border rounded ${activeSize === 0 ? 'active' : ''}`} onClick={() => { setActiveSize(0) }}><a>50g</a></li>
                                <li className={`list-inline-item p-1 pl-3 pr-3 border rounded ${activeSize === 1 ? 'active' : ''}`} onClick={() => { setActiveSize(1) }}><a>100g</a></li>
                                <li className={`list-inline-item p-1 pl-3 pr-3 border rounded ${activeSize === 2 ? 'active' : ''}`} onClick={() => { setActiveSize(2) }}><a>200g</a></li>
                                <li className={`list-inline-item p-1 pl-3 pr-3 border rounded ${activeSize === 3 ? 'active' : ''}`} onClick={() => { setActiveSize(3) }}><a>300g</a></li>
                            </ul>
                        </div>
                        <div className='d-flex align-items-center mb-4'>
                            <QuantityBox />
                            <Button className='btnblue ml-1'> <BsCartFill /> &nbsp; Add To Cart</Button>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='productbutton'>
                                <Tooltip title="Add to wishlist" placement="top">
                                    <Button className='addbutton mr-3'><CiHeart /> Add to wishlist</Button>
                                </Tooltip>
                            </div>
                            <Button className='comparebutton'><HiArrowsUpDown /> compare</Button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container bg-white p-4 '>
                <div className='descriptionBox container border p-4'>
                    <div className='desctiptionBtn d-flex align-items-center justify-content-start mb-3'>
                        <Button onClick={() => { setActiveTab(0) }} className={`mr-3 ${activeTab === 0 ? 'activeTabBtn' : ''}`}>Desctiption</Button>
                        <Button onClick={() => { setActiveTab(1) }} className={`mr-3 ${activeTab === 1 ? 'activeTabBtn' : ''}`}>additional info</Button>
                        <Button onClick={() => { setActiveTab(2) }} className={`mr-3 ${activeTab === 2 ? 'activeTabBtn' : ''}`}>Reviews</Button>
                    </div>
                    <div>
                        <div className='descriptionData'>
                            <div className={activeTab === 0 ? 'activeTabs' : 'unactivetabs'}>
                                <p>
                                    Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.

                                    Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.
                                </p>
                            </div>
                            <div className={activeTab === 1 ? 'activeTabs' : 'unactivetabs'}>
                                <p>
                                    objects: 23, done.
                                    Counting objects: 100% (23/23), done.
                                    Delta compression using up to 8 threads
                                    Compressing objects: 100% (9/9), done.
                                    Writing objects: 100% (12/12), 2.55 KiB | 2.55 MiB/s, done.
                                    Total 12 (delta 5), reused 0 (delta 0), pack-reused 0
                                    remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
                                    To https://github.com/harshjindal97/Ecommerce.git
                                </p>
                            </div>
                            <div className={activeTab === 2 ? 'activeTabs' : 'unactivetabs'}>
                                <p>
                                    rating objects: 23, done.
                                    Counting objects: 100% (23/23), done.
                                    Delta compression using up to 8 threads
                                    Compressing objects: 100% (9/9), done.
                                    Writing objects: 100% (12/12), 2.55 KiB | 2.55 MiB/s, done.
                                    Total 12 (delta 5), reused 0 (delta 0), pack-reused 0
                                    remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
                                    To https://github.com/harshjindal97/Ecommerce.git
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProducts title='Related Products'/>
                <RelatedProducts title='Recently Viewed'/>
            </div>

        </div>
    )
}

export default ProductDetail
