import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSearchValue : null,
}


const searchReducer = createSlice({
    name:"search",
    initialState,
    reducers:{

        setCurrrectSearchValue : (state,action) =>{

            state.currentSearchValue = action.payload

        }

    }
})


//for individual intial 
export const selectCurrentSearchValue = (state) => state.search.currentSearchValue


export const {setCurrrectSearchValue} = searchReducer.actions

export default searchReducer.reducer