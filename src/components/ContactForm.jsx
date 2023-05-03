import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from './Phonebook.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onPropSubmit({ name, number, id: nanoid() });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p className={css.text}>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleInput}
            />
          </label>
          <label>
            <p className={css.text}>Number</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleInput}
            />
          </label>

          <button className={css.btn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  onPropSubmit: PropTypes.func.isRequired,
};
