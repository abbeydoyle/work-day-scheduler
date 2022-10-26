var $currentDay = $("#currentDay");
var $containerEl = $(".container");

var $appointmentEl = $("#appointment")

var appointment = [];

// dddd: full name, Do: day of month, MMMM: full month name, YYYY: full year
var momentDate = moment().format("dddd, MMMM, Do, YYYY");

console.log(momentDate);
