
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link} from 'react-router-dom'

const Navigations = () => {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 navpart1 d-flex">
                            <Button className="allcat">
                                <span className='icon1 mr-2'><IoIosMenu /></span>
                                <span className="texts">All Catogries</span>
                                <span className='icon2 ml-2'><FaAngleDown/></span>
                            </Button>
                        </div>
                        <div className="col-sm-9 navpart2 d-flex">
                            <ul className='list list-inline'>
                                <li className='list-inline-item'><Link to='/'>Home</Link></li>
                                <li className='list-inline-item'><Link to='/'>Fashion</Link></li>
                                <li className='list-inline-item'><Link to='/'>Electronic</Link></li>
                                <li className='list-inline-item'><Link to='/'>Bakery</Link></li>
                                <li className='list-inline-item'><Link to='/'>Grocery</Link></li>
                                <li className='list-inline-item'><Link to='/'>Blog</Link></li>
                                <li className='list-inline-item'><Link to='/'>About us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navigations;