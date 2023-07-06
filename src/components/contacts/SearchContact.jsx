const SearchContact = ({ handleSearchInput, searchTitle, arrayContacts }) => {
    return (
        arrayContacts.length > 0 && (
            <div>
                <h3>{searchTitle}</h3>
                <input
                    type="text"
                    onInput={handleSearchInput}
                />
            </div>
        ));
}


export default SearchContact;