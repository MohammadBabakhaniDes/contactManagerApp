import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGroups = createAsyncThunk("/groups/fetchGroups", async() => {
    const response = await axios.get("http://localhost:9001/groups");
    return response.data;
});

const initialState = {
    items: []
}

const GroupsSlice = createSlice({
    name: "group",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchGroups.fulfilled]: (state, action) => {
            state.items = action.payload;
        }
    }
});

export default GroupsSlice.reducer;
