// 1) display current day- I can do that in the <p> id currentDay
// 2) display the 10 hour in the workday from 8-5
// 3) make the colors of the workday in the past, present, or future
// 4) enter an event (need calender)
// 5) need save button then it saves the event in local storage
//      still displays on the screen

// 1) display current day- I can do that in the <p> id currentDay

var currentDayEl = document.querySelector("#currentDay");
var containerEl = document.querySelector(".container");

var hours = ['8:00am', 
            '9:00am', 
            '10:00am', 
            '11:00am',
            '12:00pm',
            '1:00pm',
            '2:00pm',
            '3:00pm',
            '4:00pm',
            '5:00pm'
        ]
//
var hourCounter = hours.length;
setInterval(function() {
    currentDayEl.textContent = moment().format("dddd, MMMM Do YYYY");
},1000);

// 2) display the 10 hour in the workday from 8-5



hours.forEach(function(hour) {
    var timeBlockP = $("<p>")
        .text(hour)
        .addClass("past")
    //  for (
    //      var i = 0; If (i < hours.length)
    //      )

    //     {
    //         var x = document.getElementsByClassName("past");
    //         x += '<p id="box-' + i + '">' + hours[i] + '</p>';
    //     console.log("id loop is working");
    //        ;
        
    //     }    //.attr("hrId")
    //hoursID.forEach(function(hrID) {
        //timeBlockP.id=hrID;
        //console.log("id loop is working")
    //})
    var saveButton = $("<button>")
        .text("save")
        .addClass("saveBtn")
    //var hoursLength = hours.length;
        // for(let hr = 0 ; hr < hoursLength; hr++) {
    var textAreaEl = $("<textarea>")
        .addClass("textArea")
    
    
    //saveButton.className = `options-${i+1}`;
           
        
    // var textAreaEl = $("<textarea>")
    //     .addClass("textArea"+hoursLength)

    console.log("my loop is working");
    $(".container").append(timeBlockP);
    
    timeBlockP.append(textAreaEl);
    timeBlockP.append(saveButton);
    console.log(hour);  
   
});
//loadTasks();
// saves text in text area when save button is clicked
function loadText() {
   var textFrom = JSON.parse(localStorage.getItem("hourText"));
   //console.log(textFrom);
   $('.textArea').val(textFrom);
}
loadText();

$(".saveBtn").click (function() {
    
    console.log("<button> was clicked");
    var hourText = $(".textArea").val();
    console.log(hourText);
    localStorage.setItem("hourText", JSON.stringify(hourText));
    
  });

   var checkTime = function () {
        var currentTime = moment().format('h a');
        console.log(currentTime);
        // if (currentTime = x) {
        //     //add class .present to timeblockP
        // } else (currentime < x) {
        //     //add class .past to timeblockp
        // }
     
      };
   checkTime();

  
// saves text in text area when save button is clicked



// var createTask = function(hourText) {

// }

//change colors
//if time is before current time, make class .past
// present .present
// future .future

// var past = moment().subtract(1,"hours")
// var now = moment()
// var future = moment().add(1,"hours")
// console.log(past < now);
// console.log(future > now);
// console.log(past);

//if x < now then .past
//if x = now then .preset
//if x > now then .future
//need var for each hour
