import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import Filter from '../../components/Filter/Filter';
import { Paper } from '@mui/material';

const ContactsPage = () => {
  const { contacts } = useSelector(selectContacts);
  return (
    <>
      <ContactForm />
      {contacts.length > 0 && <Filter />}
      <ContactList />
    </>
  );
};

export default ContactsPage;
