import {removeClass} from '/src/js/ObjectFilter.js';

document.addEventListener("DOMContentLoaded", () => {
    const addSchedule = document.querySelector('.add-schedule');
    const daySched = document.getElementById("schedule-daily");
    var count = 4;
    addSchedule.addEventListener('click', () => {
        var newSched = document.createElement("div");
        newSched.className = "schedule-item show unedited" + " item-" + ++count;
        newSched.textContent = "✏️";
        daySched.appendChild(newSched);
        //flickerClass("add-schedule");
    });
});

// Edit Schedule
document.addEventListener("DOMContentLoaded", () => {
    const scheduleItem = document.querySelector('.schedule-item');
    var arr1 = scheduleItem.className.split(" ");

    scheduleItem.addEventListener('click', () => {
        console.log('You have Reached!');
        if(arr1.indexOf('unedited') > -1) {
            removeClass(scheduleItem, 'unedited');
        }
    });
});