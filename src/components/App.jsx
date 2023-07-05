import { Component } from 'react'
import Head from 'components/title/head'
import Phonebook from 'components/phonebook/phonebook';
import Contacts from 'components/contacts/contacts'

export class App extends Component {

  render() {
    return (
      <div>
        <Head headTitle='Phone book and contacts' />

        <Phonebook title='Phonebook' />

        <Contacts title="Contacts" />

      </div>
    );
  };
};