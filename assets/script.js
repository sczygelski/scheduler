var currenthour=moment().format('HH');
    console.log(currenthour)

let dt = document.getElementById("currentDay");
dt.innerHTML = moment().format('YYYY-MM-DD h:mm:ss');



 
//coloring
const time0 = $('#time0');
const timeten = $('#timeten');
const timeeleven = $('#timeeleven');
const timetwelve = $('#timetwelve');
const timeone = $('#timeone');
const timetwo = $('#timetwo');
const timethree = $('#timethree');
const timefour = $('#timefour');
const timefive = $('#timefive');

if(currenthour > 9) {
    time0.addClass("past");
}
else if(currenthour = 9) {
    time0.addClass("present");
}
else if(currenthour < 9) {
    time0.addClass("future");
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

//$("#saveBtn").on("click",function(e) {
    //e.preventDefault();
    //var input = $("#savBtn").val();
    //console.log(input);

//})

document.getElementById("time0").innerHTML="";


//notification
const btn = document.querySelectorAll('.saveBtn');
const note = document.getElementById('note');
console.log(btn)
for (let i = 0; i < btn.length; i++) {
    console.log(btn[i])    

    document.getElementById(`time${i}`).value = localStorage.getItem(`time${i}`)


    btn[i].addEventListener('click', function(event) {
        // const text = 'Appointment has been saved!';
        // note.innerHTML=text;
        console.log('farm')
        console.log(document.getElementById(event.target.getAttribute("data-hour")).value)
        console.log(event.target.getAttribute("data-hour"))
        localStorage.setItem(event.target.getAttribute("data-hour"), document.getElementById(event.target.getAttribute("data-hour")).value)
    })
}


// save text DOM 