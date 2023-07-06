import { IoMdContact } from 'react-icons/io';

const SavedContact = ({ arrayContacts, onDeleteContact }) => {
    return (
        <>
            {arrayContacts.length > 0 && arrayContacts.map(contact => {
                return (
                    <li key={contact.name}
                    // onClick={(e) => {
                    // if (e.target === 'BUTTON') {
                    //     onDeleteContact()
                    // }}}
                    >
                        <p><IoMdContact />{contact.name}: {contact.number}</p>
                        <button
                            type='button'
                        // onClick={onDeleteContact}
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
