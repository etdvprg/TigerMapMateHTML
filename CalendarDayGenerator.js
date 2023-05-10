function generateDays(startingDay, endingDay, lastMonthEnd) {
    const div = document.getElementById("schedule-calendar");

    var dayCount = lastMonthEnd;
    for (var i=1; i<36; i++) {
        var day = document.createElement("div");

        if (i < startingDay) {
            day.className = "calendar-day prev-month-text";
        } else {
            day.className = "calendar-day";
        }

        if (i == startingDay) { /*May starts on monday so 2nd block yung 1 */
            dayCount = 1;
        }
        if (i <= endingDay) {
            day.textContent = dayCount;
        } 
        
        div.appendChild(day);
        dayCount++;
    }
    
}

// function generateWeekdays() {
//     const div = document.getElementById("schedule-calendar");
//     for (var i=0; i<7; i++) {
//         var day = document.createElement("div");
//         if (i == startingDay) { /*May starts on monday so 2nd block yung 1 */
//             dayCount = 1;
//         }
//         if (i <= endingDay) {
//             day.textContent = dayCount;
//         } 
        
//         div.appendChild(day);
//         dayCount++;
//     }
    
// }
