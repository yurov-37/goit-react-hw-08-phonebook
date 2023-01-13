import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import Filter from '../../components/Filter/Filter';
import { Phonebook, MainTitle, ContactTitle } from './ContactsPage.styled';

const ContactsPage = () => {
  const { contacts } = useSelector(selectContacts);
  return (
    <Phonebook>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      {contacts.length > 0 && <Filter />}
      <ContactList />
    </Phonebook>
  );
};

export default ContactsPage;
