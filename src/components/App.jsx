import { Component } from 'react'
import Head from 'components/title/head'
import Phonebook from 'components/phonebook/phonebook';
import Contacts from 'components/contacts/contacts'

export class App extends Component {
  state = {
    contacts: [], //{ name: 'anna', number: '11111' }
    name: '',
    number: ''
  }

  render() {

    const { contacts, name, number } = this.state;

    return (
      <div>
        <Head headTitle='Phone book and contacts' />

        <Phonebook title='Phonebook' />

        <Contacts
          title="Contacts"
          arrayContacts={contacts}
          name={name}
          number={number}
        />

      </div>
    );
  };
};