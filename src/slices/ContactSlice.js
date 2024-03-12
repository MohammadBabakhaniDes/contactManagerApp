import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async () => {
    try {
        const response = await axios.get("http://localhost:9001/contacts");
        return response.data;
    } catch (err) {
        console.log(err);
    }
});

export const createContact = createAsyncThunk("contacts/createContact", async (contact) => {
    try {
        const response = await axios.post("http://localhost:9001/contacts", contact);
        return response.data;
    } catch (err) {
        console.log(err);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId) => {
    try {
        const response = await axios.delete(`http://localhost:9001/contacts/${contactId}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
});

export const editContact = createAsyncThunk("contacts/editContact", async (contact) => {
    try {
        const response = await axios.put(`http://localhost:9001/contacts/${contact.id}`, contact);
        return response.data;
    } catch(err) {
        console.log(err);
    }
});

const initialState = {
    items: [],
    newItems: [],
    searchItems: [],
    statues: "null",
    path: true, 
};

const ContactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        changePath(state, action) {
            state.path = action.payload;
        },
        deleteContactState(state, action) {
            state.newItems = state.items;
            state.items = state.items.filter(item => item.id !== action.payload);
            state.searchItems = state.items.filter(item => item.id !== action.payload);
        },
        searchContact(state, action) {
            state.searchItems = state.items.filter(item => item.fullname.includes(action.payload));            
        }
    },
    extraReducers: {   // yadet bashe ke loading haye har ghesmat ra piade koni.
        [fetchContacts.pending]: (state, action) => {
            state.statues = "pending";
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.statues = "success";
            state.items = action.payload;
            state.searchItems = action.payload;
        },
        [fetchContacts.rejected]: (state, action) => {
            state.statues = "rejected";
        },
        [createContact.pending]: (state, action) => {
            state.statues = "pending";
        },
        [createContact.fulfilled]: (state, action) => {
            state.statues = "success";
            state.items = [...state.items, action.payload];
            state.searchItems = state.items;
        },
        [createContact.rejected]: (state, action) => {
            state.statues = "rejected";
        },
        // [deleteContact.pending]: (state, action) => {
        //     state.statues = "pending";
        // },
        // [deleteContact.fulfilled]: (state, action) => { age ina bashan moghe hazf kardan navigate mishe be balaye safha.
        //     state.statues = "success";
        // },
        [deleteContact.rejected]: (state, action) => {
            state.statues = "rejected";
            state.items = state.newItems;
            state.searchItems = state.newItems;
        },
        [editContact.pending]: (state, action) => {
            state.statues = "pending";
        },
        [editContact.fulfilled]: (state, action) => {
            state.statues = "success";
            const index = state.items.findIndex(item => item.id === action.payload.id);
            state.items[index] = action.payload;
            state.searchItems = state.items;
        },
        [editContact.rejected]: (state, action) => {
            state.statues = "rejected";
        }
    }
});



export default ContactSlice.reducer;
export const { changePath, deleteContactState, searchContact } = ContactSlice.actions;