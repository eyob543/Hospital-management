const currentNurse = JSON.parse(localStorage.getItem('currentNurse'));
const welcomeMessage = document.getElementById('welcomeMessage');
const patientNameInput = document.getElementById('patientNameInput');
const patientInfoDisplay = document.getElementById('patientInfoDisplay');
const btn = document.querySelector("button");
const viewPatient = document.getElementById("viewPatient");
const schedule = document.getElementById("schedule");
const viewSchedule = document.getElementById("viewSchedule");
let nurses = JSON.parse(localStorage.getItem('nurses')) || [];

if (currentNurse) {
    // Display the doctor's name
   welcomeMessage.textContent = 'Welcome back, Nurse ' + currentNurse.firstName;
} else {
    // Handle the case where the staff information is not available
    welcomeMessage.textContent = 'Error: Unable to retrieve nurse information.';
}
btn.addEventListener("click", () => {
    const patientName = patientNameInput.value;
    if (patientName) {
        // Retrieve medicalInfo from local storage and parse it
        const medicalInfo = JSON.parse(localStorage.getItem('medicalInfo')) || [];
    
        // Search for the patient in medicalInfo
        const patientInfo = medicalInfo.find(patient => patient.patientsFirstName === patientName);
    
        if (patientInfo) {
            // Display patient information in the div
            patientInfoDisplay.textContent = `Patient Information:\n${JSON.stringify(patientInfo, null, 2)}`;
        } else {
            // Display message for no such patient
            patientInfoDisplay.textContent = 'No such patient found.';
        }
    } else {
        // Handle empty input
        patientInfoDisplay.textContent = 'Invalid input. Please enter a patient\'s name.';
    }
})

let indexOfNurse = nurses.findIndex(nurse => nurse.firstName === currentNurse.firstName);
viewSchedule.addEventListener("click", () => {
    if(nurses[indexOfNurse] && nurses[indexOfNurse].schedule){
        schedule.innerHTML = `
            <p>Date: ${nurses[indexOfNurse].schedule.date}</p>
            <p>Time: ${nurses[indexOfNurse].schedule.time}</p>
         `;
    }else{
        schedule.innerHTML = `<p>Not set yet</p>`
    }
})
