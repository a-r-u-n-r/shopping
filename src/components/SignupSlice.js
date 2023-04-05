import { createSlice } from "@reduxjs/toolkit";
 export const signupSlice=createSlice({
    name:"signup",
    initialState:{value:
       { id:"",
        userid:"",
        emailid:"",
        phone:"",
        password:"",
    }},
    reducers:{
        signupn:(state,action)=>{
            state.value=action.payload;
        },
    },
 });
 export const {signupn}=signupSlice.actions;
 export const selectsignup=(state)=>state.value.signup;
 export default signupSlice.reducer;
