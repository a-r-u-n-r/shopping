import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "react-use-cart";
const productSlice=createSlice({
    name:"products",
    initialState:{
        products:[],
        
   },

    reducers:{
      setProducts:(state=initialState,{payload})=>{
        return {...state,products:payload};
      },  
        
  }
})

export const {setProducts}=productSlice.actions
export default productSlice.reducer;

