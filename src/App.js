import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { AddContact, Contacts, EditContact, ViewContact } from './Component';
import { ContactContext } from './context/contactContext';
import { useImmer } from 'use-immer';
import Navbar from './Component/Navbar';
import _ from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import { createContact, deleteContact, getAllContacts, getAllGroups, getItemLastId } from './data/data';


function App() {
  const [contacts, setContacts] = useImmer([]);
  const [groups, setGroups] = useImmer([]);
  const [filteredContacts, setFilteredContacts] = useImmer([]);
  const [loading, setLoading] = useImmer(false);
  const navigate = useNavigate();


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const { data: contactsData } = await getAllContacts();
  //       console.log(contactsData);
  //       const { data: groupsData } = await getAllGroups();
  //       setContacts(contactsData);
  //       setFilteredContacts(contactsData);
  //       setGroups(groupsData);
  //       setLoading(false);
  //     } catch (err) {
  //       console.log(err.message);
  //       setLoading(false);
  //     }
  //   }
  //   fetchData();


  // }, []);             // get Data in json server

  useEffect(() => {
    const fetchData = () => {
      try {
        setLoading(true);
        const contactsData = getAllContacts();
        // console.log(contactsData);
        const groupsData = getAllGroups();
        setContacts(contactsData);
        setFilteredContacts(contactsData);
        setGroups(groupsData);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    }
    fetchData();


  }, []);


  // useLayoutEffect(()=> {
  //   navigate("/");
  //   console.log('navigate shode');
  // }, []);

  // const createContactForm = async (values) => {
  //   try {
  //     setLoading(true);
  //     const { status, data } = await createContact(values);
  //     if (status === 201) {
  //       toast.success("مخاطب با موفقیت اضافه شد.", { icon: "🚗" });
  //       setContacts(draft => { draft.push(data) });
  //       setFilteredContacts(draft => { draft.push(data) });
  //       setLoading(false);
  //       navigate('/contacts');
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //     setLoading(false);
  //   }
  // }            // NOTE: create Contact with Json server

  const createContactForm = (values) => {    
    setLoading(true);
    let id = getItemLastId();
    id = id + 1;
    const newContacts = createContact({...values, id: id});
    setContacts(newContacts);
    setFilteredContacts(newContacts);
    setLoading(false);
    toast.success("مخاطب با موفقیت اضافه شد.", { icon: "🚗" });
    navigate("/contacts");
  }


  // const removeContact = async (contactId) => {
  //   const contactsBackup = [...contacts];
  //   try {
  //     setContacts(draft => draft.filter(c => c.id !== contactId));
  //     setFilteredContacts(draft => draft.filter(c => c.id !== contactId));
  //     const { status } = await deleteContact(contactId);
  //     toast.error("مخاطب با موفقیت حذف شد.", { icon: "👺" });
  //     if (status !== 200) {
  //       setContacts(contactsBackup);
  //       setFilteredContacts(contactsBackup);
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //     setContacts(contactsBackup);
  //     setFilteredContacts(contactsBackup);
  //   }
  // }                       NOte: remove data from Json server

  const removeContact = (contactId) => {
      console.log("salam");
      const newContacts = deleteContact(contactId);
      setContacts(newContacts);
      setFilteredContacts(newContacts);
      toast.error("مخاطب با موفقیت حذف شد.", { icon: "👺" });
  }

  const contactSearch = _.debounce((query) => {
    setFilteredContacts(draft => contacts.filter(c => c.fullname.toLowerCase().includes(query.toLowerCase())));
  }, 1000);


  return (
    <ContactContext.Provider value={{
      loading: loading,
      setLoading: setLoading,
      contacts: contacts,
      setContacts: setContacts,
      groups: groups,
      createContactForm: createContactForm,
      setGroups: setGroups,
      filteredContacts: filteredContacts,
      setFilteredContacts: setFilteredContacts,
      search: contactSearch,
      remove: removeContact
    }}>
      <div className='App'>
        <ToastContainer rtl={true} theme="colored" />
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to={'/contacts'} />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/contacts/add' element={<AddContact />} />
          <Route path='/contacts/edit/:contactId' element={<EditContact />} />
          <Route path='/contacts/:contactId' element={<ViewContact />} />
        </Routes>
      </div>
    </ContactContext.Provider>
  );
}

export default App;