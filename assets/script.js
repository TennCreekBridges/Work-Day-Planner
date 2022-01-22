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
    // set variables for input, output and local storage
    let input1 = document.querySelector("#time9am");
    let output1 = document.querySelector("#time9am");
    let save1 = document.querySelector("#time9am");
    // listen for click on save button and execute function updateOutput1
    save1.addEventListener("click", updateOutput1);
    // looks for existing local storage content from user input and adds if exists
    output1.textContent = localStorage.getItem("content1");
    input1.value = localStorage.getItem("content1");
    // sets key value pair and defines content1
    function updateOutput1() {
        let content1 = "";
        localStorage.setItem("content1", input1.value);
        // displays old and new content in time block
        output1.textContent = input1.value;
    }
}
function tenAm() {
    // set variables for input, output and local storage
    let input2 = document.querySelector("#time10am");
    let output2 = document.querySelector("#time10am");
    let save2 = document.querySelector("#time10am");
    // listen for click on save button and execute function updateOutput2
    save2.addEventListener("click", updateOutput2);
    // looks for existing local storage content from user input and adds if exists
    output2.textContent = localStorage.getItem("content2");
    input2.value = localStorage.getItem("content2");
    // sets key value pair and defines content2
    function updateOutput2() {
        let content2 = "";
        localStorage.setItem("content2", input2.value);
        // displays old and new content in time block
        output2.textContent = input2.value;
    }
}
function elevenAm() {
    // set variables for input, output and local storage
    let input3 = document.querySelector("#time11am");
    let output3 = document.querySelector("#time11am");
    let save3 = document.querySelector("#time11am");
    // listen for click on save button and execute function updateOutput3
    save3.addEventListener("click", updateOutput3);
    // looks for existing local storage content from user input and adds if exists
    output3.textContent = localStorage.getItem("content3");
    input3.value = localStorage.getItem("content3");
    // sets key value pair and defines content3
    function updateOutput3() {
        let content3 = "";
        localStorage.setItem("content3", input3.value);
        // displays old and new content in time block
        output3.textContent = input3.value;
    }
}