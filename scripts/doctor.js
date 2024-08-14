const currentDoctor = JSON.parse(localStorage.getItem('currentDoctor'));
const welcomeMessage = document.getElementById('welcomeMessage');
const patientNameInput = document.getElementById('patientNameInput');
const patientInfoDisplay = document.getElementById('patientInfoDisplay');
const schedule = document.getElementById("schedule");
let doctors = JSON.parse(localStorage.getItem('doctors')) || [];


if (currentDoctor) {
    // Display the doctor's name
   welcomeMessage.textContent = 'Welcome back, Doctor ' + currentDoctor.firstName;
} else {
    // Handle the case where the staff information is not available
    welcomeMessage.textContent = 'Error: Unable to retrieve doctor information.';
}
function viewPatient(){
        // Retrieve medicalInfo from local storage and parse it
        const medicalInfo = JSON.parse(localStorage.getItem('medicalInfo')) || [];  
        const patientName = patientNameInput.value;
        if (patientName) {
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
}
function viewSchedule(){
    let indexOfDoctor = doctors.findIndex(doctor => doctor.firstName === currentDoctor.firstName);
    if(doctors[indexOfDoctor] && doctors[indexOfDoctor].schedule){
        schedule.innerHTML = `
            <p>Date: ${doctors[indexOfDoctor].schedule.date}</p>
            <p>Time: ${doctors[indexOfDoctor].schedule.time}</p>
         `;
    }else{
        schedule.innerHTML = `<p>Not set yet</p>`
    }
}
