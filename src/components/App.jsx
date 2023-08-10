import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Title, SubTitle, EmptyContact } from './App.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#010101',
      }}
    >
      <Toaster />
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <EmptyContact>Your phonebook is empty. Add first contact!</EmptyContact>
      )}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};
