import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './Component/NotFound';
import MainLayout from './layouts/MainLayout';
import { Provider } from 'react-redux';
import { store } from './store';
import AddContact from './Component/Contact/AddContact';
import ViewContact from './Component/Contact/ViewContact';
import EditContact from './Component/Contact/EditContact';


const router = createBrowserRouter([
  {
    path: "/contactManagerApp",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: "/contacts/:contactId",
    element: <ViewContact />
  },
  {
    path: "/contacts/add",
    element: <AddContact />
  },
  {
    path: "/contacts/edit/:contactId",
    element: <EditContact />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </Provider>
  </React.StrictMode>
);


