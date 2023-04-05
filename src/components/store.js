import { configureStore} from "@reduxjs/toolkit";
import loginReducer from "./LoginSlice"
import productReducer from "./ProductSlice"

import cartReducer from "./CartSlice"
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import signupReducer from "./SignupSlice"
const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  })

export const store=configureStore ({
    reducer:{
        products:productReducer,
        login:loginReducer,
        signup:signupReducer,
        carts:cartReducer
    },
    
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;