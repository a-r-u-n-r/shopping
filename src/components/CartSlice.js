import { createSlice } from "@reduxjs/toolkit";
const initialState=[]
const cartSlice=createSlice({
    name:"carts",
    initialState:{
        carts:[]
    },
    reducers:{
        addToCart:(state={carts:[]},{payload})=>{
            const {id}=payload;
         const itemExists=state.find((item)=>item.id==id);
         if(itemExists){
            return state.map((item)=>{
                if(item.id===id){
                return{...item,quantity:item.quantity+1}
         }  
         return item;
            })}
         else{
            state.push({...payload,quantity:1})
         }
        },
        setCarts:(state=initialState,{payload})=>{
            return {...state,carts:payload};
          },
        increment:(state,{payload})=>{
            return state.map((item)=>{
                if(item.id===payload){
                return{...item,quantity:item.quantity+1}
         }  
        return item;
           })
        },
        decrement:(state,{payload})=>{
            return state.map((item)=>{
                if(item.id===payload){
                return{...item,quantity:item.quantity-1}
         }  
         return item;
            })
        },
        clear:(state)=>{
            return[];
        }
    }
}
)
export const {addToCart,setCarts,increment,decrement,clear}=cartSlice.actions
export default cartSlice.reducer;