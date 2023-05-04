import React, { Component } from 'react';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const existingContact = this.state.contacts.find(
      contact =>
        contact.name.toLowerCase() === data.name.toLowerCase() ||
        contact.number === data.number
    );
    if (existingContact) {
      return alert(`${data.name} or ${data.number} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          textAlign: 'center',
          flexDirection: 'column',
          marginTop: '40px',
          marginBottom: '40px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onPropSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter
          valueFilter={this.state.filter}
          onChangeFilter={this.changeFilter}
        />

        <ContactList
          contacts={this.getFilteredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
