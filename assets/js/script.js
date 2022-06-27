// 1) display current day- I can do that in the <p> id currentDay
// 2) display the 10 hour in the workday from 8-5
// 3) make the colors of the workday in the past, present, or future
// 4) enter an event (need calender)
// 5) need save button then it saves the event in local storage
//      still displays on the screen

// 1) display current day- I can do that in the <p> id currentDay
console.log("this is working");
var currentDayEl = document.querySelector("#currentDay");
setInterval(function() {
    currentDayEl.textContent = moment().format("dddd, MMMM Do YYYY");
},1000)