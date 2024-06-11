import Rating from '@mui/material/Rating';
import { MdZoomOutMap } from "react-icons/md";
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import ProductModal from '../productModal';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';

const ProductItem = (props) => {

    const context = useContext(MyContext);


    const viewProduct =(id)=>{
        context.setisOpenProduct(true);
    }

    return (
        <>
        <div className={`productItems p-1 ${props.itemView}`}>
            <div className="img_wrapper abc">
                <img className="w-100" src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt=""></img>
                <span className="badge">20%</span>
                <div className="action">
                    <Button onClick={()=>viewProduct(1)}><MdZoomOutMap /></Button>
                    <Button ><FaRegHeart /></Button>
                </div>
            </div>

            <hr />
            <div className="info">
                <h5 className="heading">All Natural Italian-Style Chicken Meatballs</h5>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={2.5} precision={0.5} readOnly size="small" />
                <div className="price">
                    <span className="oldPrice">$100</span>
                    <span className="newPrice text-danger ml-2">$80</span>
                </div>
            </div>
        </div>
        {/* {isOpenproduct && <ProductModal onCloseProductModal  = {onCloseProductModal}/>} */}
        {/* <ProductModal/> */}
        </>
    )
}
export default ProductItem;