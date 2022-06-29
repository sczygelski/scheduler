var currenthour=moment().format('HH');
    console.log(currenthour)

let dt = document.getElementById("currentDay");
dt.innerHTML = moment().format('YYYY-MM-DD h:mm:ss');

 
//coloring
const timenine = $('#timenine');
const timeten = $('#timeten');
const timeeleven = $('#timeeleven');
const timetwelve = $('#timetwelve');
const timeone = $('#timeone');
const timetwo = $('#timetwo');
const timethree = $('#timethree');
const timefour = $('#timefour');
const timefive = $('#timefive');

if(currenthour > 9) {
    timenine.addClass("past");
}
else if(currenthour = 9) {
    timenine.addClass("present");
}
else if(currenthour < 9) {
    timenine.addClass("future");
}

if(currenthour > 10) {
    timeten.addClass("past");
}
else if(currenthour = 10) {
    timeten.addClass("present");
}
else if(currenthour < 10) {
    timeten.addClass("future");
}

if(currenthour > 11) {
    timeeleven.addClass("past");
}
else if(currenthour = 11) {
    timeeleven.addClass("present");
}
else if(currenthour < 11) {
    timeeleven.addClass("future");
}

if(currenthour > 12) {
    timetwelve.addClass("past");
}
else if(currenthour = 12) {
    timetwelve.addClass("present");
}
else if(currenthour < 12) {
    timetwelve.addClass("future");
}

if(currenthour > 13) {
    timeone.addClass("past");
}
else if(currenthour = 13) {
    timeone.addClass("present");
}
else if(currenthour < 13) {
    timeone.addClass("future");
}

if(currenthour > 14) {
    timetwo.addClass("past");
}
else if(currenthour = 14) {
    timetwo.addClass("present");
}
else if(currenthour < 14) {
    timetwo.addClass("future");
}

if(currenthour > 15) {
    timethree.addClass("past");
}
else if(currenthour = 15) {
    timethree.addClass("present");
}
else if(currenthour < 15) {
    timethree.addClass("future");
}

if(currenthour > 16) {
    timefour.addClass("past");
}
else if(currenthour = 16) {
    timefour.addClass("present");
}
else if(currenthour < 16) {
    timefour.addClass("future");
}

if(currenthour > 17) {
    timefive.addClass("past");
}
else if(currenthour = 17) {
    timefive.addClass("present");
}
else if(currenthour < 17) {
    timefive.addClass("future");
}

//saving
$("#saveBtn").on("click",function(e) {
    e.preventDefault();
    var input = $("#savBtn").val();
    console.log(input);

})

