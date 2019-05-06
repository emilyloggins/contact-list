
const contacts = {
    loadContacts: function () {
        fetch("http://localhost:3000/contacts")
        .then (result => result.json())
        .then (parsedResult => {
            parsedResult.forEach(contact => {
            return contact
            })
        })
    },
    saveContact: function (contactToSave) {
        fetch("http://localhost:3000/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactToSave)
        })
    }
}
export default contacts