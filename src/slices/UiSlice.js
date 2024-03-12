import { createSlice } from "@reduxjs/toolkit";


const UiSlice = createSlice({
    name: "ui",
    initialState: {value: "100vh"},
    reducers: {
        HeightCalculation(state, action) {
            state.value = action.payload;
        }
    }
});
 
export default UiSlice.reducer;
export const { HeightCalculation } = UiSlice.actions;