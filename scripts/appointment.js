let medicalInfo = JSON.parse(localStorage.getItem('medicalInfo')) || [];

const appointment = document.getElementById("appointment");
const appointmentDate = document.createElement("p");
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 2);
const formattedDate = formatDate(futureDate);
appointmentDate.textContent = `Your appointment is set for ${formattedDate}`;
appointment.appendChild(appointmentDate);
function formatDate(date) {
  const options = {
    month: 'short',
    year: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    hour12: true
  };
  
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
medicalInfo = {
  ...medicalInfo,
  appointmentDate: formattedDate
}
localStorage.setItem('medicalInfo', JSON.stringify(medicalInfo));
