import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TbRosetteDiscount } from "react-icons/tb";
import { LuBadgeDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { FaPaypal } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><LuShirt /></span>
                        <span>Everyday Fresh Products</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery /></span>
                        <span>Free delivery for order over $70</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbRosetteDiscount /></span>
                        <span>Daily Mega Discounts</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><LuBadgeDollarSign /></span>
                        <span>Best price on the market</span>
                    </div>
                </div>
                <div className="linkWrap row mt-5">
                    <div className='col'>
                        <h3>FRUIT & VEGETABLES</h3>
                        <ul class="footer-list mb-sm-5 mb-md-0">
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>BREAKFAST & DAIRY</h3>
                        <ul class="footer-list mb-sm-5 mb-md-0">
                            <li><Link to="#">Milk & Flavoured Milk</Link></li>
                            <li><Link to="#">Butter and Margarine</Link></li>
                            <li><Link to="#">Cheese</Link></li>
                            <li><Link to="#">Eggs Substitutes</Link></li>
                            <li><Link to="#">Honey</Link></li>
                            <li><Link to="#">Marmalades</Link></li>
                            <li><Link to="#">Sour Cream and Dips</Link></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>MEAT & SEAFOOD</h3>
                        <ul class="footer-list mb-sm-5 mb-md-0">
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Delivery Information</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="#">Support Center</Link></li>
                            <li><Link to="#">Careers</Link></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>BEVERAGES</h3>
                        <ul class="footer-list mb-sm-5 mb-md-0">
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Delivery Information</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="#">Support Center</Link></li>
                            <li><Link to="#">Careers</Link></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>BREADS & BAKERY</h3>
                        <ul class="footer-list mb-sm-5 mb-md-0">
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Delivery Information</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="#">Support Center</Link></li>
                            <li><Link to="#">Careers</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="contact row pt-3">
                    <div className="col-md-6">
                        <p>Copyright 2024 © Bacola WordPress Theme. All rights reserved. Powered by KlbTheme.</p>
                    </div>
                    <div className="col-md-6 d-flex">
                        <Link>Privacy Policy</Link>
                        <Link>Terms and Conditions</Link>
                        <Link>Cookie</Link>
                        <FaCcVisa />
                        <FaPaypal />
                        <FaCcPaypal />
                        <MdOutlinePayments />
                        <FaCcStripe />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;