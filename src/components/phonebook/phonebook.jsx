import Title from 'components/title/title';

const Phonebook = () => {
    return (
        <div>
            <Title title='Phonebook' />
            <form action='submit'>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <button>Add contact</button>
            </form>
        </div>
    )

}

export default Phonebook;