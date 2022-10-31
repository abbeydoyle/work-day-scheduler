var $currentDay = $("#currentDay");
var $containerEl = $(".container");

var $appointmentEl = $("#appointment")

var appointments = [];

// dddd: full name, Do: day of month, MMMM: full month name, YYYY: full year
var momentDate = moment().format("dddd, MMMM, Do, YYYY");
var momentHour = moment().format("H");


function workdayCalendar() {
      console.log(momentDate);
      console.log(momentHour);
      console.log(appointment);

      $timeBlock.each(function() {
            var $thisBlock = $(this);
            var thisBlockHr = parseInt($thisBlock.attr("block-time"));

            var apptItems = {
                  hour: thisBlockHr,
                  text: "",
            }
            appointments.push(apptItems);
      }
      );
      localStorage.setItem("appts", JSON.stringify(appointments));  
}


function renderCalendar() {
      appointments = localStorage.getItem("appts");
      appointments = JSON.parse("appointments");

      for (var i = 0; i < appointments.length; i++) {
            var apptHour = appointments[i].hour;
            var apptText = appointments[i].text;
      
      $("[block-hour=" + apptHour + "]").children("aside").val(apptText);

      }

      console.log(appointments);
}


