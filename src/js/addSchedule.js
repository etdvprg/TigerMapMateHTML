import {flickerClass} from '/src/js/ObjectFilter.js';

document.addEventListener("DOMContentLoaded", () => {
    const addSchedule = document.querySelector('.add-schedule');
    const daySched = document.getElementById("schedule-daily");
    var count = 4;
    addSchedule.addEventListener('click', () => {
        var newSched = document.createElement("div");
        newSched.className = "schedule-item show" + " item-" + ++count;
        newSched.textContent = "HI!";
        daySched.appendChild(newSched);
        flickerClass("add-schedule");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const addSchedule = document.querySelector('.add-schedule');
    const daySched = document.getElementById("schedule-daily");

    addSchedule.addEventListener('click', () => {
        var newSched = document.createElement("div");
        newSched.className = "schedule-item" + " item-1";
        newSched.textContent = "HI!";
        daySched.appendChild(newSched);
    });
});