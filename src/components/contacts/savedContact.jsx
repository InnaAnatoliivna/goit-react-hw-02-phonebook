import { IoMdContact } from 'react-icons/io';

const SavedContact = ({ arrayContacts, onDeleteContact }) => {
    return (
        <>
            {arrayContacts.length > 0 && arrayContacts.map(contact => {
                return (
                    <li key={contact.name}
                    >
                        <p><IoMdContact />{contact.name}: {contact.number}</p>
                        <button
                            type='button'
                        >
                            Delete
                        </button>
                    </li>
                )
            })
            }
        </>)
}

export default SavedContact;
