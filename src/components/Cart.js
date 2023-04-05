import axios from 'axios'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import {clear} from "./CartSlice"
import {increment} from "./CartSlice"
import {decrement} from "./CartSlice"

export const Cart = ({cart}) => {
    const carts=useSelector((state)=>state.carts);
    const dispatch=useDispatch();
     const remove=()=>{
        return axios.delete("http://localhost:5001/delete/"+id)
     }
        const {id,quantity,price,productname,productdesc,image}=cart;
        return (
            <>
                <div  className='four column wide'>
                    <div  className='card'>
                        <div className='image'>
                            <img src={image} alt="title"></img>
                        </div>
                        <br></br>

                        <div className='content'>
                            <div className='header'><b>NAME:</b>{productname}</div>
                            <div className='meta price'><b>PRICE:</b>{price}$</div>
                            <div className='meta'><b>ABOUT:</b>{productdesc}</div>
                            <div><b>QUANTITY:</b>  1</div>
                        </div>
                       
                           <button className='btn btn-danger ' onClick={()=>dispatch(remove(cart))}> 
                           Remove</button>
                    </div>

                </div>
                <br></br>
                </>
        
      ) 
    
};
export default Cart;
