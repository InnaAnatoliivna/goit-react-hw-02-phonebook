import Title from 'components/title/title';
import SavedContact from 'components/contacts/savedContact'

const Contacts = ({ title, arrayContacts }) => {
    return (
        <div>
            <Title title={title} />
            <ul>
                <SavedContact arrayContacts={arrayContacts} />
            </ul>
        </div>
    )
}

export default Contacts;