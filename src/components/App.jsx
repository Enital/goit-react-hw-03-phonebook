import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import css from './app.module.css'

class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  }
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = ({ id, name, number }) => {
    const names = this.state.contacts.map(contact => contact.name);
    
    const lowerCaseName = name.toLowerCase();console.log(lowerCaseName)
    const lowerCaseNames = names.map(name => name.toLowerCase());
    if (lowerCaseNames.includes(lowerCaseName)) {
      alert(`${name} is already in Contacts!`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [{ id, name, number }, ...prevState.contacts],
      };
    })
  } 

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    this.setState({filter: ''})
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  };

  render() {

    return (
      <div className={css.container}>
        <section className={css.section}>
          <h2 className={css.title}>Phonebook</h2>
          <ContactForm className={css.form} onSubmit={this.formSubmit} />
        </section>
        <section className={css.section}>
          <Filter filter={this.state.filter} handleChange={this.handleChange}/>
          <ContactList contacts={this.filterContacts()} deleteContact={this.deleteContact} />
        </section>
      </div>
    )
  }
}

export default App;