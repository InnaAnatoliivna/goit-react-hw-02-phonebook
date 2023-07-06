import { Component } from 'react';
import { nanoid } from 'nanoid';
import { getRandomId } from 'components/random-id'
import Head from 'components/title/head';
import Section from 'components/title/section-title';
import Phonebook from 'components/phonebook/phonebook';
import Contacts from 'components/contacts/contacts';
import SearchContact from 'components/contacts/SearchContact';

export class App extends Component {
  nameInputId = nanoid();
  numerInputId = nanoid();

  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
  }

  onChangeInput = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value })
  }

  onAddToContacts = (e) => {
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

  onDeleteContact = (id) => {
    // const { contacts } = this.state;
    // const updateArrayContacts = [...contacts];
    // updateArrayContacts.splice(index, 1);
    // this.setState({ contacts: updateArrayContacts })
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  onFilteringInput = (e) => {
    const searchValue = e.target.value.trim();
    this.setState({ filter: searchValue })
  }

  render() {

    const { contacts, name, number, filter } = this.state;
    const filteredContacts = contacts
      .filter(contact => contact.name.toLowerCase()
        .includes(filter.toLowerCase()))

    return (
      <div className='container'>
        <Head headTitle='Phonebook' />

        <Phonebook
          nameInputId={this.nameInputId}
          numerInputId={this.numerInputId}
          handleAddContact={this.onAddToContacts}
          handleChange={this.onChangeInput}
          name={name}
          number={number}
        />

        <Section title='Contacts'>
          <SearchContact
            handleSearchInput={this.onFilteringInput}
            searchTitle='Find contacts by name'
            arrayContacts={contacts}
          />
          <Contacts
            arrayContacts={filteredContacts}
            onDeleteContact={this.onDeleteContact}
          />
        </Section>

      </div>
    );
  };
};