// Retrieve patientsArray from localStorage and parse it as JSON
const patientsArray = JSON.parse(localStorage.getItem('patientsArray')) || [];
const form = document.querySelector("form");
const invalidInput = document.getElementById("invalidInput");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if the entered email and password match any entry in patientsArray
    const isValidUser = patientsArray.some((user) => 
        user.patientsEmail === email && user.patientsPassword === password
    );

    if (isValidUser) {
        // Redirect to the desired page (replace 'desired_page.html' with the actual page)
        window.location.href = "/user/appointment.html";
    } else {
        invalidInput.innerText = "Invalid email or password. Please try again.";
    }
});