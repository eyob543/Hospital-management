// Retrieve patientsArray from localStorage and parse it as JSON
let patientsArray = JSON.parse(localStorage.getItem('patientsArray')) || [];
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const Email = document.getElementById("Email");
const phone = document.getElementById("phone");
const Password = document.getElementById("Password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.querySelector("form");
const invalidInput = document.getElementById("invalidInput");
function handleSubmit(event){
    event.preventDefault();
    const isDuplicate = patientsArray.some((value) => 
            (value.patientsFirstName === firstName.value &&
            value.patientsLastName === lastName.value) ||
            value.patientsEmail === Email.value
    );

    if(isDuplicate){
        invalidInput.innerText = "User with the same name, last name, or email already exists";
    } else if(Password.value !== confirmPassword.value){
        invalidInput.innerText =  "Passwords do not match";
    } else {
        const numberInFirstName = /[0-9]/.test(firstName.value); // checking if there is a number in the first name
        const numberInLastName = /[0-9]/.test(lastName.value); // checking if there is a number in the last name
    
        if(numberInFirstName || numberInLastName){
            invalidInput.innerText =  "Cannot add numbers in first name or last name";
        } else {
            const patientsInfo = {
                patientsFirstName : firstName.value,
                patientsLastName : lastName.value,
                patientsEmail : Email.value,
                patientsPhone : phone.value,
                patientsPassword : Password.value,
            }
    
            patientsArray.push(patientsInfo);
            // Convert the patientsArray to JSON and save it to localStorage
            localStorage.setItem('patientsArray', JSON.stringify(patientsArray));
            window.location.href = "/user/patientForm.html";
        }
    }
}
