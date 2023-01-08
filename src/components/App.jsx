import GlobalStyles from './GlobalStyles';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Phonebook, MainTitle, ContactTitle } from './App.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'Pages/HomePage/HomePage';
// import LoginPage from 'Pages/LoginPage/LoginPage';
import PrivateRoute from 'utils/router/privateRoute';
// import RegisterPage from 'Pages/RegisterPage/RegisterPage';
import AuthRootComponent from './Auth';

export default function App() {
  const { contacts } = useSelector(selectContacts);

  return (
    <div>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="login" element={<AuthRootComponent />} />
        <Route path="register" element={<AuthRootComponent />} />
      </Routes>
      <Phonebook>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <ContactTitle>Contacts</ContactTitle>
        {contacts.length > 0 && <Filter />}
        <ContactList />
        <GlobalStyles />
      </Phonebook>
    </div>
  );
}
