import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { Link } from 'react-router-dom';


const Sidebar = () => {

    const [value , setValue] = useState([100 , 60000]);
    const [value2 , setValue2] = useState([100 , 60000]);

    return (
        <div className='sidebar'>
            <div className='filterBox'>
                <h6 className='h6tag'>PRODUCT CATEGORIES</h6>
                <div className='scroll'>
                    <ul>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Beverages" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Biscuits & Snacks" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Breads & Bakery" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Breakfast & Dairy" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Fruits & Vegetables" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Grocery & Staples" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Household Needs" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Beverages" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Biscuits & Snacks" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Breads & Bakery" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Breakfast & Dairy" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Fruits & Vegetables" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Grocery & Staples" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Household Needs" /></li>
                    </ul>
                </div>
            </div>
            <div className='filterBox mt-4'>
                <h6>FILTER BY PRICE</h6>
                <RangeSlider value={value} onInput={setValue} min={0} max={60000} defaultValue={[0,60000]} step={5}/>
                <div className='d-flex pt-2 pb-2 priceRange'>
                    <span >From:<strong className='text-dark'>Rs: {value[0]}</strong></span>
                    <span className='ml-auto'>To:<strong className='text-dark'>Rs: {value[1]}</strong></span>
                </div>
            </div>
            <div className='filterBox mt-4'>
                <h6 className='h6tag'>PRODUCT STATUS</h6>
                <div className='scroll'>
                    <ul>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="In Stock" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Out Of Stock" /></li>
                    </ul>
                </div>
            </div>
            <div className='filterBox mt-4 mb-3'>
                <h6 className='h6tag'>BRANDS</h6>
                <div className='scroll'>
                    <ul>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Frito Lay" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Nespresso" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Frito Lay" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Nespresso" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Frito Lay" /></li>
                        <li><FormControlLabel className='lables' control={<Checkbox />} label="Nespresso" /></li>
                    </ul>
                </div>
            </div>
            <div className='bann'><Link><img src='https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif' alt='' className='w-100'/></Link></div>
        </div>
    )
}

export default Sidebar
