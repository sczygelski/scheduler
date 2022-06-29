$("09").val(09)

let dt = document.getElementById("currentDay");
dt.innerHTML = moment().format('YYYY-MM-DD h:mm:ss');

 
//coloring

    var hr = moment().hour();
        if(hr>9) {
            console.log("works");
            //$('#timecomp').addClass("future");
        }


//saving
$("#saveBtn").on("click",function(e) {
    e.preventDefault();
    var input = $("#savBtn").val();
    console.log(input);

})

