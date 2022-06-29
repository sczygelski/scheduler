var currenthour=moment().format('HH');
    console.log(currenthour)

let dt = document.getElementById("currentDay");
dt.innerHTML = moment().format('YYYY-MM-DD h:mm:ss');

 
//coloring
//for (let i=0; i === currenthour.length; i++) {
    if(currenthour > 12) {
        const time = $('#time');
        console.log("works");
        time.addClass("future")
    }
//}
    //var hr = moment().hour();
      //  if(hr>9) {
        //    console.log("works");
            //$('#timecomp').addClass("future");
       //     $(hr).addClass("future");
        //}


//saving
$("#saveBtn").on("click",function(e) {
    e.preventDefault();
    var input = $("#savBtn").val();
    console.log(input);

})

