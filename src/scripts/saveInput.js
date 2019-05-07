import contacts from "./contactCollection"

const saveBtn = document.querySelector("#save-user-btn");

const handleEvent = saveBtn.addEventListener("click", () => {
    let contactToSave = {
        first_name: firstName.value,
        last_name:  lastName.value,
        phone_number: number.value,
        address: address.value
    }
    contacts.saveContact(contactToSave)
    window.location.reload(true)
})

export default handleEvent
