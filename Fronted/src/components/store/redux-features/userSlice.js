import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser:JSON.parse(localStorage.getItem("user")) || null,
    
}


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

        setCurrentUser:(state,action)=>{
            //here
            state.currentUser = action.payload

        }

    }
})


export const selectCurrentUser = (state) =>state.user.currentUser

export const {setCurrentUser} = userSlice.actions

export default userSlice.reducer