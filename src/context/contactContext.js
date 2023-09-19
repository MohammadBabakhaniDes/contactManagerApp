import { createContext } from "react";

export const ContactContext = createContext({
    loading: false,
    setLoading: ()=> {},
    contacts: [],
    setContacts: ()=> {},
    groups: [],
    setGroups: ()=> {},
    filteredContacts: [],
    setFilteredContacts: ()=> {},
    createContactForm: ()=> {},
    search: ()=> {},
    remove: ()=> {}
})