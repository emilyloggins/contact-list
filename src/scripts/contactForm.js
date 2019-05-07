const formDiv = document.querySelector("#form--container")
const createBtn = document.querySelector("#create--btn");
const saveBtn = document.querySelector("#save-user-btn")

let btnClick = createBtn.addEventListener("click", () => {
    let formBlock =
    `<form>
    <h2>First Name:</h2>
    <input id="firstName" type="text">
    <h2>Last Name:</h2>
    <input id="lastName" type="text">
    <h2>Phone Number:</h2>
    <input id="number" type="text">
    <h2>Address:</h2>
    <input id="address" type="text">
    </form>`
    formDiv.innerHTML += formBlock;
    createBtn.style.display="none";
    saveBtn.classList.remove("hidden")
})

export default btnClick



