
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
const Navigations = () => {

    const [isOpenNav, setIsOpenNav] = useState(false);

    return (
        <>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 navpart1 d-flex">
                            <div className='catWrapper'>
                                <Button className="allcat" onClick={() => setIsOpenNav(!isOpenNav)}>
                                    <span className='icon1 mr-2'><IoIosMenu /></span>
                                    <span className="texts">All Catogries</span>
                                    <span className='icon2 ml-2'><FaAngleDown /></span>
                                </Button>
                                <div className={`sidebarNav shadow ${isOpenNav == true ? 'open' : ''}`} >
                                    <ul>
                                        <li><Link to='/'><Button>Home <FaAngleRight className='ml-auto' /></Button></Link>
                                            <div className='submenu'>
                                                <Link to='/men'><Button>Clothing</Button></Link>
                                                <Link to='/men'><Button>Footwear</Button></Link>
                                                <Link to='/men'><Button>watches</Button></Link>
                                                <Link to='/men'><Button>Clothing</Button></Link>
                                                <Link to='/men'><Button>Footwear</Button></Link>
                                                <Link to='/men'><Button>watches</Button></Link>
                                                <Link to='/men'><Button>Clothing</Button></Link>
                                                <Link to='/men'><Button>Footwear</Button></Link>
                                                <Link to='/men'><Button>watches</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link to='/men'><Button>Men <FaAngleRight className='ml-auto' /></Button></Link>
                                            <div className='submenu'>
                                                <Link to='/men'><Button>Clothing</Button></Link>
                                                <Link to='/men'><Button>Footwear</Button></Link>
                                                <Link to='/men'><Button>watches</Button></Link>
                                                <Link to='/men'><Button>Clothing</Button></Link>
                                                <Link to='/men'><Button>Footwear</Button></Link>
                                                <Link to='/men'><Button>watches</Button></Link>
                                                <Link to='/men'><Button>Clothing</Button></Link>
                                                <Link to='/men'><Button>Footwear</Button></Link>
                                                <Link to='/men'><Button>watches</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link to='/men'><Button>Women</Button></Link></li>
                                        <li><Link to='/men'><Button>Kids</Button></Link></li>
                                        <li><Link to='/men'><Button>Watches</Button></Link></li>
                                        <li><Link to='/men'><Button>Gift</Button></Link></li>
                                        <li><Link to='/men'><Button>Home</Button></Link></li>
                                        <li><Link to='/men'><Button>Men</Button></Link></li>
                                        <li><Link to='/men'><Button>Women</Button></Link></li>
                                        <li><Link to='/men'><Button>Kids</Button></Link></li>
                                        <li><Link to='/men'><Button>Watches</Button></Link></li>
                                        <li><Link to='/men'><Button>Gift</Button></Link></li>
                                        <li><Link to='/men'><Button>Home</Button></Link></li>
                                        <li><Link to='/men'><Button>Men</Button></Link></li>
                                        <li><Link to='/men'><Button>Women</Button></Link></li>
                                        <li><Link to='/men'><Button>Kids</Button></Link></li>
                                        <li><Link to='/men'><Button>Watches</Button></Link></li>
                                        <li><Link to='/men'><Button>Gift</Button></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9 navpart2 d-flex">
                            <ul className='list list-inline ml-auto'>
                                <li className='list-inline-item'><Link to='/'>HOME</Link></li>
                                <li className='list-inline-item'><Link to='/men'>MEN</Link>
                                    <div className='submenu shadow'>
                                        <Link to='/men'><Button>Clothing</Button></Link>
                                        <Link to='/men'><Button>Footwear</Button></Link>
                                        <Link to='/men'><Button>watches</Button></Link>
                                        <Link to='/men'><Button>Clothing</Button></Link>
                                        <Link to='/men'><Button>Footwear</Button></Link>
                                        <Link to='/men'><Button>watches</Button></Link>
                                        <Link to='/men'><Button>Clothing</Button></Link>
                                        <Link to='/men'><Button>Footwear</Button></Link>
                                        <Link to='/men'><Button>watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to='/electronic'>WOMEN</Link></li>
                                <li className='list-inline-item'><Link to='/bakery'>KIDS</Link></li>
                                <li className='list-inline-item'><Link to='/Grocery'>WATCHES</Link></li>
                                <li className='list-inline-item'><Link to='/Blog'>GIFT</Link></li>
                                <li className='list-inline-item'><Link to='/About'>About us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navigations;