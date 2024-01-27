import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAdmin : JSON.parse(localStorage.getItem('admin')) || null,
}

const adminReducer = createSlice({
    name:"admin",
    initialState,
    reducers:{

        setCurrentAdmin : (state,action)=>{
            state.currentAdmin = action.payload
        }
    }
})


export const selectCurrentAdmin = (state)=>state.admin.currentAdmin

export const {setCurrentAdmin} = adminReducer.actions

export default adminReducer.reducer