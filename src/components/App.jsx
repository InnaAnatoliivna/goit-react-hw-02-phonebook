import { Component } from 'react';
import { nanoid } from 'nanoid';
import { getRandomId } from 'components/random-id'
import Head from 'components/title/head';
import Section from 'components/title/section-title';
import Phonebook from 'components/phonebook/phonebook';
import Contacts from 'components/contacts/contacts';

export class App extends Component {
  nameInputId = nanoid();
  numerInputId = nanoid();
  // dataFields = {}

  state = {
    contacts: [],
    name: '',
    number: ''
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value })
  }

  addToContacts = (e) => {
    e.preventDefault();
    const dataFields = {}
    const { contacts, name } = this.state;
    const idContact = getRandomId();
    const isContact = contacts.find(contact => contact.name === name);
    if (!isContact) {
      dataFields.name = this.state.name;
      dataFields.number = this.state.number;
      dataFields.id = idContact;
      this.setState({
        contacts: [...contacts, dataFields],
        name: '',
        number: ''
      })
    } else {
      alert(`${name} is already in contacts`)
    }
  }

  onDeleteContact = (index) => {
    const { contacts } = this.state;
    const updateArrayContacts = [...contacts];
    updateArrayContacts.splice(index, 1);
    this.setState({ contacts: updateArrayContacts })
  }

  render() {

    const { contacts, name, number } = this.state;

    return (
      <div>
        <Head headTitle='Phone book and contacts' />

        <Section title='Phonebook'>
          <Phonebook
            nameInputId={this.nameInputId}
            numerInputId={this.numerInputId}
            handleAddContact={this.addToContacts}
            handleChange={this.handleChange}
            name={name}
            number={number}
          />
        </Section>

        <Section title='Contacts'>
          <Contacts
            arrayContacts={contacts}
            onDeleteContact={this.onDeleteContact}
          />
        </Section>

      </div>
    );
  };
};