const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const contactNumber = document.getElementById("contactNumber");
const gender = document.getElementById("gender");
const address = document.getElementById("address");
const age = document.getElementById("age");
const bloodType = document.getElementById("bloodType");
const weight = document.getElementById("weight");
const form = document.querySelector("form");
let medicalInfo = JSON.parse(localStorage.getItem('medicalInfo')) || [];


function storePatientInfo(event){
    event.preventDefault();
    const patientsInfo = {
        patientsFirstName: firstName.value,
        patientsLastName: lastName.value,
        patientsEmail: email.value,
        patientsPhone: contactNumber.value,
        patientsGender: gender.value,
        patientsAddress: address.value,
        patientsAge: age.value,
        patientsBloodType: bloodType.value,
        patientsWeight: weight.value,
    };// Creates a new patientsInfo object for each form submission
    medicalInfo.push(patientsInfo);
    // Convert the array to JSON and save it to local storage
    console.log(medicalInfo)
    localStorage.setItem('medicalInfo', JSON.stringify(medicalInfo));
    window.location.href = "/user/appointment.html"
}

