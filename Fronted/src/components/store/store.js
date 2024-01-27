import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux-features/userSlice.js"
import adminReducer from "./redux-features/adminSlice.js"
export const store = configureStore({
    reducer: {

        user: userReducer,
        admin: adminReducer,
    }
})