import React from 'react'
import Cart from "./Cart"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {setCarts} from"./CartSlice"
import Navbar from "./Navbar"
import axios from 'axios'
const CartsList = () => {
  
  const totalPrice=0;
  const carts=useSelector((state)=>state.carts.carts)
  const dispatch=useDispatch();
  const fetchProducts= async () => {
    const response = await axios.get("http://localhost:5001/showcart")
.catch((err)=>{
      console.log("Err",err);
    });
  console.log(response);
  dispatch(setCarts(response.data));
  };
  console.log(carts)
  useEffect(() => {
    fetchProducts();
  
  }, [carts]);
  return (
    <>
    <Navbar></Navbar>
    <hr></hr>
    <h1 className='container mt-5'>MY CART</h1>
    <div className='row mt-3' id='cart'>
  {carts.map((cart=>{
    return <Cart cart={cart} key={cart.id} />

  }
  
  )
  )}
  
  <br></br>
    </div>
    <div id='card'>
        <h1>TOTAL PRICE: 100 $S</h1>
    </div>
    <h1 className='buy'><button id='buy' className='btn btn-success btn-lg'>buy now</button></h1>
  </>
  )
}

export default CartsList