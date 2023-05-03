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
      contact => contact.name === data.name
    );

    existingContact && alert(`${data.name} is already in contacts`);

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

  render() {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

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
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onPropSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter valueFilter={filter} onChangeFilter={this.changeFilter} />

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
