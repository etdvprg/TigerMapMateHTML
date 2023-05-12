document.addEventListener("DOMContentLoaded", () => {
    const addSchedule = document.querySelector('#add-schedule');
    const daySched = document.getElementsByClassName(".schedule-list");
    var count = 4;
    addSchedule.addEventListener('click', () => {
        var newSched = document.createElement("div");
        newSched.className = "schedule-item" + " item-1";
        newSched.textContent = "HI!";
        console.log(count++);
        daySched[0].appendChild(dayOfWeek);
    });
});