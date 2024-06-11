import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Button from '@mui/material/Button';
import { TbGridDots } from "react-icons/tb";
import { HiViewGrid } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItem from '../../components/productItem/productItem';
import Pagination from '@mui/material/Pagination';


const Listing = () => {
    const [productView , setProductView] = useState('four');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <section className='productListingPage'>
                <div className='container'>
                    <div className='productListing d-flex'>
                        <Sidebar />
                        <div className='contentRight' style={{ padding: '50px 0px' }}>
                            <img className='w-100' src='https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg' alt='' style={{ borderRadius: '10px' }} />
                            <div className='gridbutton mt-3 mb-2 d-flex align-items-center'>
                                <div className='buttonWrapper d-flex'>
                                    <Button className={productView==='one' && 'act'} onClick={()=>{setProductView('one')}}><MdMenu /></Button>
                                    <Button className={productView==='three' && 'act'}  onClick={()=>{setProductView('three')}}><TbGridDots /></Button>
                                    <Button className={productView==='four' && 'act'}  onClick={()=>{setProductView('four')}}><TfiLayoutGrid4Alt /></Button>
                                </div>
                                <div className='ml-auto sortbutton'>
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                        style={{ color: 'black' }}
                                    >
                                        Show
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>6</MenuItem>
                                        <MenuItem onClick={handleClose}>12</MenuItem>
                                        <MenuItem onClick={handleClose}>18</MenuItem>
                                        <MenuItem onClick={handleClose}>24</MenuItem>
                                    </Menu><div>

                                    </div></div>
                            </div>
                            <div className='itemListing'>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                
                            </div>
                            <div className='d-flex align-items-center justify-content-center mt-5'>
                            <Pagination count={10} color="primary" size="large"  />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing
