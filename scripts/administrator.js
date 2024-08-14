const inputName = document.getElementById("name");
const inputPassword = document.getElementById("password");
const form = document.querySelector("form");
const wrongPassword = document.getElementById("wrongPassword");
const displayMessage = document.createElement("p");
const name = "admin"
const password = "admin"

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(inputPassword.value === password && inputName.value === name){
        window.location.href = "/admin/administratorPanel.html";
    }else if(inputName.value !== name){
        displayMessage.innerText = "Wrong name";
        wrongPassword.appendChild(displayMessage);
    }else if(inputPassword.value !== password){
        displayMessage.innerText = "Wrong password";
        wrongPassword.appendChild(displayMessage);
    }
})