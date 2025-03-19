import { createSlice } from "@reduxjs/toolkit";

const riskSlice=createSlice({
    name:"risk",
    initialState:{
        selectedCustomerId:null
    },
    reducers:{
        setSelectedCustomerId: (state, action) => {
            state.selectedCustomerId = action.payload; // Update state
        }
    }
})

export const {setSelectedCustomerId}=riskSlice.actions

export default riskSlice.reducer