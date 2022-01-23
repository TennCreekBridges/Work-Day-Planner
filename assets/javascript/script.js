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

// add current time and day to jumbotron via moment.js

var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

// assign color classes to blocks based on current time

var now = new Date().getHours();

function timeColor() {
    if (now > 9) {
        $("#time9am").addClass ("past");
    } else if (now >= 9 && now < 10) {
        $("#time9am").addClass("present");
    } else if (now < 9) {
        $("#time9am").addClass("future");
    }
    if (now > 10) {
        $("#time10am").addClass ("past");
    } else if (now >= 10 && now < 11) {
        $("#time10am").addClass("present");
    } else if (now < 10) {
        $("#time10am").addClass("future");
    }
    if (now > 11) {
        $("#time11am").addClass ("past");
    } else if (now >= 11 && now < 12) {
        $("#time11am").addClass("present");
    } else if (now < 11) {
        $("#time11am").addClass("future");
    }
    if (now > 12) {
        $("#time12pm").addClass ("past");
    } else if (now >= 12 && now < 13) {
        $("#time12pm").addClass("present");
    } else if (now < 12) {
        $("#time12pm").addClass("future");
    }
    if (now > 13) {
        $("#time1pm").addClass ("past");
    } else if (now >= 13 && now < 14) {
        $("#time1pm").addClass("present");
    } else if (now < 13) {
        $("#time1pm").addClass("future");
    }
    if (now > 14) {
        $("#time2pm").addClass ("past");
    } else if (now >= 14 && now < 15) {
        $("#time2pm").addClass("present");
    } else if (now < 14) {
        $("#time2pm").addClass("future");
    }
    if (now > 15) {
        $("#time3pm").addClass ("past");
    } else if (now >= 15 && now < 16) {
        $("#time3pm").addClass("present");
    } else if (now < 15) {
        $("#time3pm").addClass("future");
    }
    if (now > 16) {
        $("#time4pm").addClass ("past");
    } else if (now >= 16 && now < 17) {
        $("#time4pm").addClass("present");
    } else if (now < 16) {
        $("#time4pm").addClass("future");
    }
    if (now > 17) {
        $("#time5pm").addClass ("past");
    } else if (now >= 17 && now < 18) {
        $("#time5pm").addClass("present");
    } else if (now < 17) {
        $("#time5pm").addClass("future");
    }
}

// create function to enter an event, save to local storage and write to container
function nineAm() {
    // set variables for input, output and local storage
    let input1 = document.querySelector("#time9am");
    let output1 = document.querySelector("#time9am");
    let save1 = document.querySelector("#btn9am");
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
    let save2 = document.querySelector("#btn10am");
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
    let save3 = document.querySelector("#btn11am");
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
function twelvePm() {
    // set variables for input, output and local storage
    let input4 = document.querySelector("#time12pm");
    let output4 = document.querySelector("#time12pm");
    let save4 = document.querySelector("#btn12pm");
    // listen for click on save button and execute function updateOutput4
    save4.addEventListener("click", updateOutput4);
    // looks for existing local storage content from user input and adds if exists
    output4.textContent = localStorage.getItem("content4");
    input4.value = localStorage.getItem("content4");
    // sets key value pair and defines content4
    function updateOutput4() {
        let content4 = "";
        localStorage.setItem("content4", input4.value);
        // displays old and new content in time block
        output4.textContent = input4.value;
    }
}
function twelvePm() {
    // set variables for input, output and local storage
    let input4 = document.querySelector("#time12pm");
    let output4 = document.querySelector("#time12pm");
    let save4 = document.querySelector("#btn12pm");
    // listen for click on save button and execute function updateOutput4
    save4.addEventListener("click", updateOutput4);
    // looks for existing local storage content from user input and adds if exists
    output4.textContent = localStorage.getItem("content4");
    input4.value = localStorage.getItem("content4");
    // sets key value pair and defines content4
    function updateOutput4() {
        let content4 = "";
        localStorage.setItem("content4", input4.value);
        // displays old and new content in time block
        output4.textContent = input4.value;
    }
}
function onePm() {
    // set variables for input, output and local storage
    let input5 = document.querySelector("#time1pm");
    let output5 = document.querySelector("#time1pm");
    let save5 = document.querySelector("#btn1pm");
    // listen for click on save button and execute function updateOutput5
    save5.addEventListener("click", updateOutput5);
    // looks for existing local storage content from user input and adds if exists
    output5.textContent = localStorage.getItem("content5");
    input5.value = localStorage.getItem("content5");
    // sets key value pair and defines content5
    function updateOutput5() {
        let content5 = "";
        localStorage.setItem("content5", input5.value);
        // displays old and new content in time block
        output5.textContent = input5.value;
    }
}
function twoPm() {
    // set variables for input, output and local storage
    let input6 = document.querySelector("#time2pm");
    let output6 = document.querySelector("#time2pm");
    let save6 = document.querySelector("#btn2pm");
    // listen for click on save button and execute function updateOutput6
    save6.addEventListener("click", updateOutput6);
    // looks for existing local storage content from user input and adds if exists
    output6.textContent = localStorage.getItem("content6");
    input6.value = localStorage.getItem("content6");
    // sets key value pair and defines content6
    function updateOutput6() {
        let content6 = "";
        localStorage.setItem("content6", input6.value);
        // displays old and new content in time block
        output6.textContent = input6.value;
    }
}
function threePm() {
    // set variables for input, output and local storage
    let input7 = document.querySelector("#time3pm");
    let output7 = document.querySelector("#time3pm");
    let save7 = document.querySelector("#btn3pm");
    // listen for click on save button and execute function updateOutput7
    save7.addEventListener("click", updateOutput7);
    // looks for existing local storage content from user input and adds if exists
    output7.textContent = localStorage.getItem("content7");
    input7.value = localStorage.getItem("content7");
    // sets key value pair and defines content7
    function updateOutput7() {
        let content7 = "";
        localStorage.setItem("content7", input7.value);
        // displays old and new content in time block
        output7.textContent = input7.value;
    }
}
function fourPm() {
    // set variables for input, output and local storage
    let input8 = document.querySelector("#time4pm");
    let output8 = document.querySelector("#time4pm");
    let save8 = document.querySelector("#btn4pm");
    // listen for click on save button and execute function updateOutput8
    save8.addEventListener("click", updateOutput8);
    // looks for existing local storage content from user input and adds if exists
    output8.textContent = localStorage.getItem("content8");
    input8.value = localStorage.getItem("content8");
    // sets key value pair and defines content8
    function updateOutput8() {
        let content8 = "";
        localStorage.setItem("content8", input8.value);
        // displays old and new content in time block
        output8.textContent = input8.value;
    }
}
function fivePm() {
    // set variables for input, output and local storage
    let input9 = document.querySelector("#time5pm");
    let output9 = document.querySelector("#time5pm");
    let save9 = document.querySelector("#btn5pm");
    // listen for click on save button and execute function updateOutput9
    save9.addEventListener("click", updateOutput9);
    // looks for existing local storage content from user input and adds if exists
    output9.textContent = localStorage.getItem("content9");
    input9.value = localStorage.getItem("content9");
    // sets key value pair and defines content9
    function updateOutput9() {
        let content9 = "";
        localStorage.setItem("content9", input9.value);
        // displays old and new content in time block
        output9.textContent = input9.value;
    }
}