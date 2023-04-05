import { createSlice } from "@reduxjs/toolkit";
 export const loginSlice=createSlice({
    name:"login",
    initialState:{value:
       { id:"",
        userid:"",
        password:"",
    }},
    reducers:{
        loginn:(state,action)=>{
            state.value=action.payload;
        },
    },
 });
 export const {loginn}=loginSlice.actions;
 export const selectLogin=(state)=>state.value.login;
 export default loginSlice.reducer;

