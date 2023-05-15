import {addClass} from '/src/js/ObjectFilter.js';

document.addEventListener("DOMContentLoaded", () => {
    const addSchedule = document.querySelector('.add-schedule');
    const daySched = document.getElementById("schedule-daily");
    addSchedule.addEventListener('click', () => {
        var newSched = document.createElement("div");
        newSched.className = "schedule-item show unedited";
        newSched.textContent = "✏️";
        newSched.addEventListener('click', editSchedule);
        daySched.appendChild(newSched);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const editSchedule = document.getElementById('edit-btn');
    editSchedule.addEventListener('click', () => {
        nuclearBomb();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cancelButton = document.getElementById('cancel-b-btn');
    cancelButton.addEventListener('click', () => {
        let container = document.getElementsByClassName('schedule-add-form')[0];
        container.style.display = "none";
        let overlay = document.getElementById('overlay');
        overlay.style.display = "none";
        
    });
});

function editSchedule() {
    let container = document.getElementsByClassName('schedule-add-form')[0];
    container.style.display = "flex";
    let overlay = document.getElementById('overlay');
    overlay.style.display = "flex";
}

function nuclearBomb() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

