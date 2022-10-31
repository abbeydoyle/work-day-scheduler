var $currentDay = $("#currentDay");
var $containerEl = $(".container");
var $timeBlocks = $(".time-block");

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


function initializeTimeBlocks(){
      $timeBlocks.each(function(){
        var $thisBlock = $(this);
        var thisBlockHr = parseInt($thisBlock.attr("block-hour"));
  
        if (thisBlockHr == momentHour) {
          $thisBlock.addClass("present").removeClass("past future");
        }
        if (thisBlockHr < momentHour) {
          $thisBlock.addClass("past").removeClass("present future");
        }
        if (thisBlockHr > momentHour) {
          $thisBlock.addClass("future").removeClass("past present");
        }
      });
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


function saveCalendar(){
      var $thisBlock = $(this).parent();
    
      var hourToUpdate = $(this).parent().attr("block-hour");
      var itemToAdd = (($(this).parent()).children("aside")).val();
    

      for (var j = 0; j < appointments.length; j++){
        if (appointments[j].hour == hourToUpdate){
          
          appointments[j].text = itemToAdd;
        }
      }

      localStorage.setItem("appts", JSON.stringify(appointments));

      renderCalendar();
    }

    $(document).ready(function(){

      //format the timeblocks depending on time
      initializeTimeBlocks();
      //if there's nothing for the todos in local storage
      if(!localStorage.getItem("appts")){
        //initialize the array of objects
        initializeCalendar();
      } //otherwise dont bother bc we get it from local storage
    
      //display current date
      $currentDay.text(momentDate);
    
      //render schedule from local storage
      renderCalendar();
      //when a todo item save button is clicked, save it
      $containerEl.on("click", "button", saveCalendar);
      
    });