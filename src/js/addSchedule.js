import {removeClass} from '/src/js/ObjectFilter.js';

document.addEventListener("DOMContentLoaded", () => {
    const addSchedule = document.querySelector('.add-schedule');
    const daySched = document.getElementById("schedule-daily");
    var count = 4;
    addSchedule.addEventListener('click', () => {
        var newSched = document.createElement("div");
        newSched.className = "schedule-item show unedited";
        newSched.textContent = "✏️";
        newSched.addEventListener('click', editSchedule);
        daySched.appendChild(newSched);
    });
});

function editSchedule() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}