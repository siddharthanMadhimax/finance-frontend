import { configureStore } from "@reduxjs/toolkit";
import riskReducer from "./riskSlice"

const store=configureStore({
    reducer:{
        risk:riskReducer
    }
})

export default store