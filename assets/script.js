//initialize functions

window.onload = function() {
    timeColor();
    nineAm();
    tenAm();
    elevenAm();
    twelvePm();
    onePm();
    twoPm();
    threePm();
    fourPm();
    fivePm();
}

// add current time and day to jumbotron

var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

// assign color classes to blocks based on current time

var now = new Date().getHours();

function timeColor() {
    if (now > 9) {
        $("#9am").addClass ("past");
    } else if (now >= 9 && now < 10) {
        $("#9am").addClass("present");
    } else if (now < 9) {
        $("#9am").addClass("future");
    }
    if (now > 10) {
        $("#10am").addClass ("past");
    } else if (now >= 10 && now < 11) {
        $("#10am").addClass("present");
    } else if (now < 10) {
        $("#10am").addClass("future");
    }
    if (now > 11) {
        $("#11am").addClass ("past");
    } else if (now >= 11 && now < 12) {
        $("#10am").addClass("present");
    } else if (now < 11) {
        $("#11am").addClass("future");
    }
    if (now > 12) {
        $("#12pm").addClass ("past");
    } else if (now >= 12 && now < 13) {
        $("#12pm").addClass("present");
    } else if (now < 12) {
        $("#12pm").addClass("future");
    }
    if (now > 13) {
        $("#1pm").addClass ("past");
    } else if (now >= 13 && now < 14) {
        $("#1pm").addClass("present");
    } else if (now < 13) {
        $("#1pm").addClass("future");
    }
    if (now > 14) {
        $("#2pm").addClass ("past");
    } else if (now >= 14 && now < 15) {
        $("#2pm").addClass("present");
    } else if (now < 14) {
        $("#2pm").addClass("future");
    }
    if (now > 15) {
        $("#3pm").addClass ("past");
    } else if (now >= 15 && now < 16) {
        $("#3pm").addClass("present");
    } else if (now < 15) {
        $("#3pm").addClass("future");
    }
    if (now > 16) {
        $("#4pm").addClass ("past");
    } else if (now >= 16 && now < 17) {
        $("#4pm").addClass("present");
    } else if (now < 16) {
        $("#4pm").addClass("future");
    }
    if (now > 17) {
        $("#5pm").addClass ("past");
    } else if (now >= 17 && now < 18) {
        $("#5pm").addClass("present");
    } else if (now < 17) {
        $("#5pm").addClass("future");
    }
}

// create function to enter an event, save to local storage and write to container
function nineAm() {
    var input1 = document.querySelector("#time9am");
    var output1 = document.querySelector("#time9am");
    var save = document.querySelector("#time9am");

    save.addEventListener("click", updateOutput1);

    output1.textContent = localStorage.getItem("content");
    input1.value = localStorage.getItem("content");

    function updateOutput1() {
        localStorage.setItem("content", input1.value);

        output1.textContent = input1.value;
    }
}

