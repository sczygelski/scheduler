var currenthour=moment().format('HH');
    console.log(currenthour)

let dt = document.getElementById("currentDay");
dt.innerHTML = moment().format('YYYY-MM-DD h:mm:ss');



 
//coloring
const time0 = $('#time0');
const time1 = $('#time1');
const time2 = $('#time2');
const time3 = $('#time3');
const time4 = $('#time4');
const time5 = $('#time5');
const time6 = $('#time6');
const time7 = $('#time7');
const time8 = $('#time8');

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
    time1.addClass("past");
}
else if(currenthour = 10) {
    time1.addClass("present");
}
else if(currenthour < 10) {
    time1.addClass("future");
}

if(currenthour > 11) {
    time2.addClass("past");
}
else if(currenthour = 11) {
    time2.addClass("present");
}
else if(currenthour < 11) {
    time2.addClass("future");
}

if(currenthour > 12) {
    time3.addClass("past");
}
else if(currenthour = 12) {
    time3.addClass("present");
}
else if(currenthour < 12) {
    time3.addClass("future");
}

if(currenthour > 13) {
    time4.addClass("past");
}
else if(currenthour = 13) {
    time4.addClass("present");
}
else if(currenthour < 13) {
    time4.addClass("future");
}

if(currenthour > 14) {
    time5.addClass("past");
}
else if(currenthour = 14) {
    time5.addClass("present");
}
else if(currenthour < 14) {
    time5.addClass("future");
}

if(currenthour > 15) {
    time6.addClass("past");
}
else if(currenthour = 15) {
    time6.addClass("present");
}
else if(currenthour < 15) {
    time6.addClass("future");
}

if(currenthour > 16) {
    time7.addClass("past");
}
else if(currenthour = 16) {
    time7.addClass("present");
}
else if(currenthour < 16) {
    time7.addClass("future");
}

if(currenthour > 17) {
    time8.addClass("past");
}
else if(currenthour = 17) {
    time8.addClass("present");
}
else if(currenthour < 17) {
    time8.addClass("future");
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
    document.getElementById(`time${i}`).value = localStorage.getItem(`time${i}`)
    btn[i].addEventListener('click', function(event) {
        localStorage.setItem(event.target.getAttribute("data-hour"), document.getElementById(event.target.getAttribute("data-hour")).value)
    })
}


// save text DOM 