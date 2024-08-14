// Retrieve doctors and nurses arrays from local storage or initialize them if not present
let doctors = JSON.parse(localStorage.getItem('doctors')) || [];
let nurses = JSON.parse(localStorage.getItem('nurses')) || [];
function addDoctor() {
    window.location.href = '/admin/doctorForm.html';
}

function addNurse() {
    window.location.href = '/admin/nurseForm.html';
}

function addSchedule(){
    window.location.href = '/admin/scheduleForm.html'
}
function addToBlog(){
    window.location.href = '/admin/blogForm.html'
}
function saveDoctor(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const id = document.getElementById('id').value;
    const numberInFirstName = /[0-9]/.test(firstName); // checking if there is a number in the first name
    const numberInLastName = /[0-9]/.test(lastName); // checking if there is a number in the last name

    // Check if a doctor with the same first name, last name, and ID already exists
    const isDuplicate = doctors.some(doctor =>doctor.id === id);
    if(isDuplicate){
        let invalidInput = document.getElementById("invalidInput") ;
        invalidInput.innerText = "A doctor with the same first name, last name and id already exists"
    }else{
        if(numberInFirstName || numberInLastName){
            let invalidInput = document.getElementById("invalidInput");
            invalidInput.innerText = "Number not allowed in name";
        }else{
            const newDoctor = {
                firstName,
                lastName,
                id
            };
            doctors.push(newDoctor);
            // Save updated doctors array to local storage
            localStorage.setItem('doctors', JSON.stringify(doctors));
            window.location.href = '/admin/administratorPanel.html';
        }
    }
}

function saveNurse(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const id = document.getElementById('id').value;
    const numberInFirstName = /[0-9]/.test(firstName); // checking if there is a number in the first name
    const numberInLastName = /[0-9]/.test(lastName); // checking if there is a number in the last name

    const isDuplicate = nurses.some(nurses =>nurses.id === id);
    if(isDuplicate){
        let invalidInput = document.getElementById("invalidInput") ;
        invalidInput.innerText = "A nurse with the same first name, last name and id already exists"
    }else{
        if(numberInFirstName || numberInLastName){
            let invalidInput = document.getElementById("invalidInput");
            invalidInput.innerText = "Number not allowed in name";
        }else{
            const newNurse = {
                firstName,
                lastName,
                id
            };
            nurses.push(newNurse);
            // Save updated doctors array to local storage
            localStorage.setItem('nurses', JSON.stringify(nurses));
            window.location.href = '/admin/administratorPanel.html';
        }
    }
}

function saveBlog(event) {
    event.preventDefault();
    const blogTitleInput = document.getElementById('blogTitle');
    const imageUrlInput = document.getElementById('imageUrl');
    const descriptionInput = document.getElementById('description');

    const blogTitle = blogTitleInput.value;
    const imageUrl = imageUrlInput.value;
    const blogDescription = descriptionInput.value;
    if (blogTitle && imageUrl && description) {
        const blogEntry = {
            title: blogTitle,
            imageUrl: imageUrl,
            description: blogDescription
        };

        // Retrieve existing blog entries or initialize the array
        let blogEntries = JSON.parse(localStorage.getItem('blogEntries')) || [];
        blogEntries.push(blogEntry);

        // Save updated blog entries to local storage
        localStorage.setItem('blogEntries', JSON.stringify(blogEntries));

        window.location.href = "/admin/administratorPanel.html"
    } else {
        alert('Invalid input. Both title and image URL are required.');
    }
}

function saveSchedule(event) {
    event.preventDefault();
    const doctorNameInput = document.getElementById('doctorName');
    const scheduleDateInput = document.getElementById('scheduleDate');
    const scheduleTimeInput = document.getElementById('scheduleTime');

    const doctorName = doctorNameInput.value;
    const scheduleDate = scheduleDateInput.value;
    const scheduleTime = scheduleTimeInput.value;

    if (doctorName && scheduleDate && scheduleTime) {
        // Check if the doctor exists in the doctors array
        const doctorIndex = doctors.findIndex(doctor => doctor.firstName === doctorName);

        if (doctorIndex !== -1) {
            // Add schedule information to the doctor's object
                doctors[doctorIndex] = {
                ...doctors[doctorIndex],
                schedule:{
                    date: scheduleDate,
                    time: scheduleTime
                }
            };

            // Save updated doctors array to local storage
            localStorage.setItem('doctors', JSON.stringify(doctors));
            window.location.href = '/admin/administratorPanel.html';
        } else {
            document.getElementById('invalidInput').innerText = "No such doctor or nurse"
        }
    } else {
        document.getElementById('invalidInput').innerText = 'Invalid input. Please enter the doctor or nurse name, schedule date, and schedule time.';
    }
    console.log(doctors)
}