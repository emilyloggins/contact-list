

let domComponent = (contact)=> {
    let output = document.querySelector(".output")
    let block = `<h2>${contact.first_name} ${contact.last_name}</h2
    <h3>${contact.phone_number}</h3>
    <p>${contact.address}</p>`

    output.innerHTML += block;
}

export default domComponent