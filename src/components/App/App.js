
import { useState, useEffect} from "react";
import { nanoid } from 'nanoid';

import useLocalStorage from "../../hooks/useLocalStorage";

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from "../Filter/Filter";

import { Container, ContainerTitle, ContainerForm, ContainerSecondaryTitle } from './App.styled';

export default function App() {

  const [contacts, setContacts] = useLocalStorage();
  const [filter, setFilter] = useState('');

  const checkContactsDuplicate = (name) => {
    const normalizedName = name.toLowerCase();
    return contacts.find(contact =>
    contact.name.toLowerCase() === normalizedName);
  }
  const handleFormSubmit = (name, number) => {
    if(checkContactsDuplicate(name)) {
      alert('contact is already there!');
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number
    }
    setContacts(prevState => 
      [contact, ...prevState]
    );
  }
  const handleFilter = (event) => {
    setFilter( event.currentTarget.value);
  }
  const contactsSearch = () => {
    console.log(filter);
    const normalizedFilter = filter.toLowerCase();
    const requiredСontact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return requiredСontact;
  }
  const deleteContact = (contactId) => {
    setContacts(prevState => {
    return  prevState.filter(contact => contact.id !== contactId);
    });
  }
  return (
    <Container>
      <ContainerTitle>Phonebook</ContainerTitle>
      <ContainerForm>
        <ContactForm onSubmit={handleFormSubmit}/>
        <ContainerSecondaryTitle>Contacts</ContainerSecondaryTitle>
        <Filter value = {filter} onChange = {handleFilter}/>
        <ContactList contacts = {contactsSearch()} onDeleteContact={deleteContact}/>
      </ContainerForm>
    </Container>
  )
  // componentDidMount() {
  //   const contacts =  JSON.parse(localStorage.getItem('contacts'));
  //   if(contacts) {
  //     this.setState({contacts: contacts});
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) { 
  //   if(prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }
}

