import React from 'react'
import ProductComponent from "./ProductComponent"
import { useSelector,useDispatch } from 'react-redux'
import axios from "axios";
import { useEffect } from 'react';
import {setProducts} from "./ProductSlice"


 const ProductList = () => {
    const products=useSelector((state)=>state.products.products);

    
     const dispatch=useDispatch();
    const fetchProducts= async () => {
      const response = await axios.get("http://localhost:5001/getproducts")
.catch((err)=>{
        console.log("Err",err);
      });
    console.log(response);
      dispatch(setProducts(response.data));
      localStorage.setItem("pro",JSON.stringify(response))
    };

   
    useEffect(() => {
      fetchProducts();
    
    }, []);
  return (
    <>
    <hr></hr>
    <hr></hr>
        <div className='row mt-3'>
      {products.map((product=>{
        return  <ProductComponent product={product} key={product.id}/>
      }))}
      </div>
    </>
           
  )
  }

export default ProductList