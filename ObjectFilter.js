// Code Retrieved from here: https://www.youtube.com/watch?v=HRpjAGT7X4Y
// Thank you Benjamin Flanders

function displayAll() {
    filterObject('all', "feedbox-container");
    filterObject('all', "feedbox-mini-container");
    filterObject('all', "schedule-item");
}


function filterObject (c, type) {
    var x = document.getElementsByClassName(type);
    
    if (c == "all") c = "";
    for (var i=0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) {
            addClass(x[i], "show");
        }
    }
}

function addClass(element, /*class*/ name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0; i<arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;  
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0; i<arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i], 1));
        }
    }
    element.className = arr1.join(" ");
}