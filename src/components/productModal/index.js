
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { IoClose } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import React, { useContext } from "react";
import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { CiHeart } from "react-icons/ci";
import { HiArrowsUpDown } from "react-icons/hi2";




import QuantityBox from '../quantityBox/QuantityBox';
import { MyContext } from '../../App';

const ProductModal = (props) => {
    const context = useContext(MyContext);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <Dialog className='productModal' open={true} onClose={() => context.setisOpenProduct(false)}>
            <Button className='closebutton' onClick={() => context.setisOpenProduct(false)}><IoClose /></Button>
            <h4 className='mb-1 font-weight-bold'>All Natural Italian-Style Chicken Meatballs</h4>
            <div className='d-flex align-items-center'>
                <div className='d-flex align-items-center mr-2'>
                    <span>Brands:</span>
                    <span className='ml-2'>Welch's</span>
                </div>
                <Rating name="read-only" value={2.5} precision={0.5} readOnly size="small" />

            </div>

            <hr />

            <div className='row mt-2'>
                <div className='col-md-5'>
                <span className="badges">20%</span>
                    <div className='productModalSlider p-4'>
                        
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
                </div>
                <div className='col-md-7 p-4'>
                    <div className='info d-flex align-itmes-center mb-2'>
                        <div className="price">
                            <span style={{fontWeight:600,fontSize:"18px"}} className="oldPrice text-bold mr-1">$100</span>
                            <span style={{fontWeight:600,fontSize:"23px"}} className="newPrice text-danger ml-2 text-bold">$80</span>
                        </div>
                    </div>
                    <span className='instock '>In Stock</span>
                    <p className='mt-4'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
                    <div className='d-flex align-items-center mb-4'>
                        <QuantityBox/>
                        <Button className='btnblue'>Add To Cart</Button>
                    </div>
                    <div className='d-flex align-items-center mb-4'>
                        <div className='productbutton'>
                        <Button className='addbutton mr-3'><CiHeart /> Add to wishlist</Button></div>
                        <Button className='comparebutton'><HiArrowsUpDown /> compare</Button>
                    </div>
                </div>
            </div>


            
        </Dialog>
    )
}
export default ProductModal;