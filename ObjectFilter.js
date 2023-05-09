// Code Retrieved from here: https://www.youtube.com/watch?v=HRpjAGT7X4Y
// Thank you Benjamin Flanders
filterObject('all', 1);
filterObject('all', 2);

function filterObject (c, type) {
    var x;
    console.log(c + type);
    if (type == 1) {
        x = document.getElementsByClassName("feedbox-container");
    } else {
        x = document.getElementsByClassName("feedbox-mini-container");
    }
    
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