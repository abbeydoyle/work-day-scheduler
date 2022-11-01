// dddd: full name, Do: day of month, MMMM: full month name, YYYY: full year
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);



// create calendar
$(document).ready(function () {
    console.log("link works");

    $(".saveBtn").on("click", function () {

        var appointment = $(this).siblings(".appointment").val();
        var time = $(this).parent().attr("id");

        // Save appts in local storage
        localStorage.setItem(time, appointment);
    })
   


    // color coordinate calendar
    function colorCalendar() {

        //get current number of hours.
        var currentTime = moment().hour();

        // keep track of current time with colors
        $(".time-block").each(function () {
            var containerTime = parseInt($(this).attr("id").split("hour")[1]);

            
            if (containerTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (containerTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }



    
    // retrieve local storage
    $("#hour9 .appointment").val(localStorage.getItem("hour9"));
    $("#hour10 .appointment").val(localStorage.getItem("hour10"));
    $("#hour11 .appointment").val(localStorage.getItem("hour11"));
    $("#hour12 .appointment").val(localStorage.getItem("hour12"));
    $("#hour13 .appointment").val(localStorage.getItem("hour13"));
    $("#hour14 .appointment").val(localStorage.getItem("hour14"));
    $("#hour15 .appointment").val(localStorage.getItem("hour15"));
    $("#hour16 .appointment").val(localStorage.getItem("hour16"));
    $("#hour17 .appointment").val(localStorage.getItem("hour17"));

    colorCalendar();
})



  // clear local storage
   $("#clearFieldsBtn").click(function(event) {
      event.preventDefault;
      $("textArea").val("");
      localStorage.clear();
  });