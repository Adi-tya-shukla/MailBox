import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './UserSlice';

const store = configureStore({
    reducer:{
        userInfo : UserSlice,
    }
})

export default store;