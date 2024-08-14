const form = document.querySelector("form");
form.addEventListener("submit", (event) =>{
    event.preventDefault();

    const role = document.getElementById('role').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    let staffArray;
    if (role === 'doctor') {
        staffArray = JSON.parse(localStorage.getItem('doctors')) || [];
    } else if (role === 'nurse') {
        staffArray = JSON.parse(localStorage.getItem('nurses')) || [];
    }

    const matchingStaff = staffArray.find(staff => staff.firstName === name && staff.id === password);

    if (matchingStaff && role === 'doctor') {
         // Store the current doctor's information in local storage
         localStorage.setItem('currentDoctor', JSON.stringify(matchingStaff));
         window.location.href = '/staff/doctor.html';
    }else if(matchingStaff && role === 'nurse'){
        localStorage.setItem('currentNurse', JSON.stringify(matchingStaff));
         window.location.href = '/staff/nurse.html';
    } else {
        // Display error message
        document.getElementById('message').textContent = 'ID or name does not match.';
    }
})
