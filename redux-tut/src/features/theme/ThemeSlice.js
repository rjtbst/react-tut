import { createSlice } from "@reduxjs/toolkit";


const initialColorValue = {
    color: "",
    
}
export const themeSlice = createSlice({
    name:"theme",
    initialState: initialColorValue,
    reducers: {
        ChangeColor : (state, action)=>{
            state.color = action.payload
        },
    },
    
    

})
 
 export const {ChangeColor,} = themeSlice.actions
 export default themeSlice.reducer