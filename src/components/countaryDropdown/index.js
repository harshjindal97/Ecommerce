
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

const CountaryDropdown = () => {
    const [isOpenModal , setisOpenModal] = useState(false);
    const onClickfunc=()=>{
        if(isOpenModal==true) {
            setisOpenModal(false);
        }else{
            setisOpenModal(true);
        }
    }
    return (
        <>
            <Button className="countaryDrop" onClick={onClickfunc}>
                <div className="info d-flex flex-column">
                    <span className='lable'>Your Location</span>
                    <span className='name'>India</span>
                </div>
                <FaAngleDown />
            </Button>
            <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className='location_modal'>
                <h4 className='mb-0'>Choose Your Delivery Location</h4>
                <p>Enter your address and we will specipy offers for your area</p>
                <Button className='closebutton' onClick={onClickfunc}><IoClose /></Button>
                <div className="header_search w-100">
                    <input type="text" placeholder="Search your area" />
                    <Button><IoIosSearch /></Button>
                </div>
                <ul className='country_list mt-3'>
                    <li><Button>India</Button></li>
                    <li><Button>Indonasia</Button></li>
                    <li><Button>Malasia</Button></li>
                    <li><Button>America</Button></li>
                    <li><Button>France</Button></li>
                    <li><Button>Bhutan</Button></li>
                    <li><Button>Russia</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>Indonasia</Button></li>
                    <li><Button>Malasia</Button></li>
                    <li><Button>America</Button></li>
                    <li><Button>France</Button></li>
                    <li><Button>Bhutan</Button></li>
                    <li><Button>Russia</Button></li>
                    <li><Button>India</Button></li>
                    <li><Button>Indonasia</Button></li>
                    <li><Button>Malasia</Button></li>
                    <li><Button>America</Button></li>
                    <li><Button>France</Button></li>
                    <li><Button>Bhutan</Button></li>
                    <li><Button>Russia</Button></li>
                </ul>
            </Dialog>
        </>
    )
}
export default CountaryDropdown;