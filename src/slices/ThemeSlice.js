import { createSlice } from "@reduxjs/toolkit";


const ThemeSlice = createSlice({
    name: "theme",
    initialState: {value: "light", isDark: false, time: 0},
    reducers: {
        ChangeTheme(state, action) {
            state.value = state.value === "light" ? "dark" : "light";
            state.isDark = state.value === "dark" ? true : false;
        },
        ChooseTheme(state, action) {
            state.value = action.payload;
            state.isDark = action.payload === "dark" ? true : false;
        },
        ChangeTime(state, action) {
            state.time += 1;
        }
    }
});

export default ThemeSlice.reducer;
export const { ChangeTheme, ChooseTheme, ChangeTime } = ThemeSlice.actions;