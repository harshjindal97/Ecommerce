
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { IoClose } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import React from "react";
import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

const ProductModal = (props) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <Dialog className='productModal' open={true} onClose={() => props.onCloseProductModal()}>
            <Button className='closebutton' onClick={() => props.onCloseProductModal()}><IoClose /></Button>
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
                    <Slider className='productModalimage' {...settings}>
                        <div>
                        <InnerImageZoom zoomType='hover'  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg" zoomSrc='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg' zoomScale={1}/>
                        </div>
                        <div>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg'></img>
                        </div>
                        <div>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg'></img>
                        </div>
                    </Slider>
                </div>
                <div className='col-md-7'>

                </div>
            </div>


            <br />
            <br />
            <br />
            <br />
        </Dialog>
    )
}
export default ProductModal;