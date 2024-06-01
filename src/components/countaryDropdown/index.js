
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';

const CountaryDropdown = () => {

    const context = useContext(MyContext);

    const [isOpenModal , setisOpenModal] = useState(false);
    const [selectTab , setSelectedTab] = useState(null);
    const [countaryList , setCountaryList] = useState([]);
    const [selectedCountry, setSelectCountry] = useState('Select Location')

    const filterList =(e)=>{
        const keyword = e.target.value.toLowerCase();
        if(keyword==''){
            setCountaryList(context.countryList);
        }else{
            const list = countaryList.filter((items)=>{
                return items.country.toLowerCase().includes(keyword);
            })
        setCountaryList(list);
        }
            
        
        
    }

    const onClickfunc=()=>{
        if(isOpenModal==true) {
            setisOpenModal(false);
        }else{
            setisOpenModal(true);
        }
    }
    const selectCountry = (index , country) =>{
        setSelectedTab(index);
        setisOpenModal(false);
        setSelectCountry(country);
    }
    useEffect(()=>{
        setCountaryList(context.countryList);
    },[])

    return (
        <>
            <Button className="countaryDrop" onClick={onClickfunc}>
                <div className="info d-flex flex-column">
                    <span className='lable'>Your Location</span>
                    <span className='name'>{selectedCountry}</span>
                </div>
                <FaAngleDown />
            </Button>
            <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className='location_modal'>
                <h4 className='mb-0'>Choose Your Delivery Location</h4>
                <p>Enter your address and we will specipy offers for your area</p>
                <Button className='closebutton' onClick={onClickfunc}><IoClose /></Button>
                <div className="header_search w-100">
                    <input type="text" placeholder="Search your area" onChange={filterList}/>
                    <Button><IoIosSearch /></Button>
                </div>
                <ul className='country_list mt-3'>
                    {countaryList?.length!==0 && countaryList?.map((item , index)=>{
                        return(
                            <li key={index}><Button onClick={()=>selectCountry(index , item.country)} 
                            className={`${selectTab==index ? 'active' : '' }`}>{item.country}</Button></li>
                            )
                        })
                    }
                    {/* {console.log(context.countryList)} */}
                    {/* <li><Button>India</Button></li> */}
                </ul>
            </Dialog>
        </>
    )
}
export default CountaryDropdown;