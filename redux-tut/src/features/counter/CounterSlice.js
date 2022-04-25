import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    count : 0
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState:initialStateValue,
     reducers: {
         increment: (state)=>{
             state.count = 10 
         },
         decrement: (state)=>{
             state.count -= 10
         },
         incrementByAmount: (state, action)=>{
             state.count += action.payload
         }
     }
})

export const {increment, decrement, incrementByAmount} = CounterSlice.actions
export default CounterSlice.reducer