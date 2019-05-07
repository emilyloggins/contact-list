const contacts = {
    loadContacts: function () {
        return fetch("http://localhost:8088/contacts")
        .then (result => result.json())
    },
    saveContact: function (contactToSave) {
        fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactToSave)
        })
    }
}

export default contacts