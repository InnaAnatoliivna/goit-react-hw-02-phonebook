import SavedContact from 'components/contacts/savedContact'

const Contacts = ({ title, arrayContacts, onDeleteContact }) => {
    const handleDelete = (e, index) => {
        e.preventDefault();
        onDeleteContact(index);
    }

    return (
        <div>
            <ul onClick={(e, index) => {
                e.target.tagName === 'BUTTON' && handleDelete(e, index)

            }}>
                <SavedContact arrayContacts={arrayContacts} />
            </ul>
        </div>
    )
}

export default Contacts;