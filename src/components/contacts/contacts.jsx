import Title from 'components/title/title';
import SavedContact from 'components/contacts/savedContact'

const Contacts = ({ title }) => {
    return (
        <div>
            <Title title={title} />
            <ul>
                <SavedContact />
            </ul>
        </div>
    )
}

export default Contacts;