import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Button from '@mui/material/Button';

const QuantityBox = () => {
    const [value , setValue] = useState(1);
    const minusButton = ()=>{
        setValue(value-1);
        if(value <= 1){
            setValue(1);
        }
    };
    const plusButton = ()=>{
        setValue(value+1);
    };
    return (
        
            <div className='quantitydrop d-flex align-items-center'>
                <Button onClick={()=>minusButton()}><FaMinus /></Button>
                <input type='text' value={value}/>
                <Button onClick={()=>plusButton()}><FaPlus /></Button>
            </div>
    
    )
}

export default QuantityBox
