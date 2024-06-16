import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import QuantityBox from '../../components/quantityBox/QuantityBox';
import { IoClose } from "react-icons/io5";
import Button from '@mui/material/Button';


const Cart = () => {
  return (
    <section className='cartPage'>
        <div className='container mt-3 mb-0'>
        <h3 className='hd'>cart</h3>
        <p>There are <b>3</b> items in your cart</p>
            <div className='row'>
                <div className='col-md-9 pr-5'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th width="35%">Product</th>
                            <th width='15%'>Unit Price</th>
                            <th width='20%'>Quantity</th>
                            <th width='15%'>Subtotal</th>
                            <th width='10%'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <Link to='/product/1'>
                                <div className='d-flex align-items-center cartItemImg'>
                                    <div className='imgWrapper'>
                                        <img className='w-100' src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-45-346x310.jpg' alt=''/>
                                    </div>
                                    <div className='info'>
                                    <h6>Foster Farms Takeout Crispy Classic Buffalo Wings</h6>
                                    <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                    </div>
                                </div>
                            </Link>
                        </td>
                        <td>45$</td>
                        <td>
                            <QuantityBox/>
                        </td>
                        <td>75$</td>
                        <td><IoClose /></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/product/1'>
                                <div className='d-flex align-items-center cartItemImg'>
                                    <div className='imgWrapper'>
                                        <img className='w-100' src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-45-346x310.jpg' alt=''/>
                                    </div>
                                    <div className='info'>
                                    <h6>Foster Farms Takeout Crispy Classic Buffalo Wings</h6>
                                    <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                    </div>
                                </div>
                            </Link>
                        </td>
                        <td>45$</td>
                        <td>
                            <QuantityBox/>
                        </td>
                        <td>75$</td>
                        <td><IoClose /></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/product/1'>
                                <div className='d-flex align-items-center cartItemImg'>
                                    <div className='imgWrapper'>
                                        <img className='w-100' src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-45-346x310.jpg' alt=''/>
                                    </div>
                                    <div className='info'>
                                    <h6>Foster Farms Takeout Crispy Classic Buffalo Wings</h6>
                                    <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                    </div>
                                </div>
                            </Link>
                        </td>
                        <td>45$</td>
                        <td>
                            <QuantityBox/>
                        </td>
                        <td>75$</td>
                        <td><IoClose /></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/product/1'>
                                <div className='d-flex align-items-center cartItemImg'>
                                    <div className='imgWrapper'>
                                        <img className='w-100' src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-45-346x310.jpg' alt=''/>
                                    </div>
                                    <div className='info'>
                                    <h6>Foster Farms Takeout Crispy Classic Buffalo Wings</h6>
                                    <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                    </div>
                                </div>
                            </Link>
                        </td>
                        <td>45$</td>
                        <td>
                            <QuantityBox/>
                        </td>
                        <td>75$</td>
                        <td><IoClose /></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/product/1'>
                                <div className='d-flex align-items-center cartItemImg'>
                                    <div className='imgWrapper'>
                                        <img className='w-100' src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-45-346x310.jpg' alt=''/>
                                    </div>
                                    <div className='info'>
                                    <h6>Foster Farms Takeout Crispy Classic Buffalo Wings</h6>
                                    <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                    </div>
                                </div>
                            </Link>
                        </td>
                        <td>45$</td>
                        <td>
                            <QuantityBox/>
                        </td>
                        <td>75$</td>
                        <td><IoClose /></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/product/1'>
                                <div className='d-flex align-items-center cartItemImg'>
                                    <div className='imgWrapper'>
                                        <img className='w-100' src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-45-346x310.jpg' alt=''/>
                                    </div>
                                    <div className='info'>
                                    <h6>Foster Farms Takeout Crispy Classic Buffalo Wings</h6>
                                    <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                    </div>
                                </div>
                            </Link>
                        </td>
                        <td>45$</td>
                        <td>
                            <QuantityBox/>
                        </td>
                        <td>75$</td>
                        <td><IoClose /></td>
                    </tr>
                </tbody>
                </table>
                
                </div>
                <div className='col-md-3'>
                    <div className='card shadow p-3 cartDetails mb-3'>
                        <h4>Card Totals</h4>
                        <div className='d-flex align-items-center mb-3'>
                            <span>Sub Total</span>
                            <span className='ml-auto font-weight-bold text-danger'>$144.7</span>
                        </div>
                        <div className='d-flex align-items-center mb-3'>
                            <span>Delivery Cost</span>
                            <span className='ml-auto font-weight-bold'>Free</span>
                        </div>
                        <div className='d-flex align-items-center mb-3'>
                            <span>Country</span>
                            <span className='ml-auto font-weight-bold'>United Kingdom</span>
                        </div>
                        <div className='d-flex align-items-center mb-3 text-danger'>
                            <span>Total</span>
                            <span className='ml-auto font-weight-bold'>United Kingdom</span>
                        </div>
                        <Button className='w-100 text-white bg-success'>Proceed to checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cart
