function generateCalendar(startingDay, endingDay, lastMonthEnd) {
    const div = document.getElementById("schedule-calendar");

    // Generates the heading days
    const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    for(var i=0; i<7; i++) {
        var dayOfWeek = document.createElement("div");
        dayOfWeek.className = "calendar-day-of-week";
        dayOfWeek.textContent = DAYS_OF_WEEK[i];
        div.appendChild(dayOfWeek);
    }


    // Generates the days
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
