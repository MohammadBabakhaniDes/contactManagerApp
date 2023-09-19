import axios from "axios";

const serverUrl = "http://localhost:9000";
// const serverUrl = "https://apic.mamadbabakhany.ir";

export const getAllContacts = ()=> {
    const url = `${serverUrl}/contacts`;
    return axios.get(url);
}

export const getContact = (contactId)=> {
    const url = `${serverUrl}/contacts/${contactId}`;
    return axios.get(url);
}

export const getAllGroups = ()=> {
    const url = `${serverUrl}/groups`;
    return axios.get(url);
};

export const getGroup = (groupId)=> {
    const url = `${serverUrl}/groups/${groupId}`;
    return axios.get(url);
};

export const createContact = (contact)=> {
    const url = `${serverUrl}/contacts`;
    return axios.post(url, contact);
}

export const updateContact = (contactId, contact)=> {
    const url = `${serverUrl}/contacts/${contactId}`;
    return axios.put(url, contact);
}

export const deleteContact = (contactId)=> {
    const url = `${serverUrl}/contacts/${contactId}`;
    return axios.delete(url);
}