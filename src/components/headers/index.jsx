import logo from "../../assets/images/Clean Elegant Typography Brand Logo.png"
import { Link} from 'react-router-dom'

import CountaryDropdown from "../countaryDropdown";
import Button from '@mui/material/Button';
import { IoIosSearch } from "react-icons/io";

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
                                <div className="header_search ml-3 mr-3">
                                    <input type="text" placeholder="Search for products"/>
                                    <Button><IoIosSearch /></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Header;