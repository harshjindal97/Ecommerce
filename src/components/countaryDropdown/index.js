
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";

const CountaryDropdown = () => {
    return (
        <>
            <Button className="countaryDrop">
                <div className="info d-flex flex-column">
                    <span className='lable'>Your Location</span>
                    <span className='name'>India</span>
                </div>
                <FaAngleDown />
            </Button>
        </>
    )
}
export default CountaryDropdown;