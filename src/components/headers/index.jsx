import logo from "../../assets/images/Clean Elegant Typography Brand Logo.png"
import { Link} from 'react-router-dom'
import { HiOutlineShoppingBag } from "react-icons/hi";
import CountaryDropdown from "../countaryDropdown";
import Button from '@mui/material/Button';
import { LuUser2 } from "react-icons/lu";
import SearchBox from "./searchbox";
import Navigations from "./navigation";
const Header =()=>{
    
    return(
        <>
            <div className="header-wrapper">
                <div className="top-strip bg-purple">
                    <div className="container">
                        <p className="text-center mb-0 mt-0">Thankyou for visiting our website. Please share your reviews</p>
                    </div>
                </div>
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logo-wrapper d-flex align-items-center col-sm-3">
                                <Link  to={'/'} ><img className="logo" src={logo} alt="" /></Link>
                            </div>
                            <div className="col-sm-9 d-flex align-items-center part2">
                                <CountaryDropdown/>
                                <SearchBox/>
                                <div className="d-flex align-items-center part3 ml-auto">
                                    <Button className="circle mr-3"><LuUser2 /></Button>
                                    <div className="d-flex align-items-center ml-auto cart_button">
                                        <span className="price">$3.22</span>
                                        <div className="position-relative ml-2">
                                            <Button className="circle ml-2"><HiOutlineShoppingBag /></Button>
                                            <span className="count">1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Navigations/>
            </div>
        </>
    )
};
export default Header;