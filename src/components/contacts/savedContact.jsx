import { IoMdContact } from 'react-icons/io';


const SavedContact = ({ arrayContacts }) => {
    return (
        <>
            {arrayContacts.length > 0 && arrayContacts.map(contact => {
                return (
                    <li>
                        <IoMdContact />{contact.name}: {contact.number}
                        <button type='button'>Delete</button>
                    </li>
                )
            })
            }
        </>)
}

export default SavedContact;
