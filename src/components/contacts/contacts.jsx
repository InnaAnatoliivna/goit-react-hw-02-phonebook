import SavedContact from 'components/contacts/savedContact'

const Contacts = ({ arrayContacts, onDeleteContact }) => {
    const handleDelete = (e, index) => {
        e.preventDefault();
        onDeleteContact(index);
    }

    return (
        <div>
            {arrayContacts.length > 0 ?
                (<ul onClick={(e, index) => {
                    e.target.tagName === 'BUTTON' && handleDelete(e, index)
                }}>
                    <SavedContact arrayContacts={arrayContacts} />
                </ul>
                )
                : (<p>The contact list is empty</p>)
            }
        </div>
    )
}

export default Contacts;