import axios from 'axios';
import React from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import {addToCart} from "./CartSlice"
const ProductComponent = ({product}) => {
    const products=useSelector((state)=>state.products.products);
    const addToCart=()=>{
        axios.post("http://localhost:5001/addtocart",product)
    } 
    const dispatch=useDispatch();
    const {productId,price,productname,productdesc,image}=product;

        return (<div className='four column wide 'id='product' key={productId}>
            
                <div className='ui link cards'>
                    <div className='card'>
                        <div className='image'>
                            <img src={image} alt="title"></img>
                        </div>

                        <div className='content'>
                            <div className='header'>{productname}</div>
                            <div className='meta price'>${price}</div>
                            <div className='meta'>{productdesc}</div>
                        </div>
                        <button className='btn btn-success' onClick={()=>(addToCart(product))}> 
                           Add to Cart</button>
                    </div>
                </div>
        </div>
      ) 
    
};

export default ProductComponent;