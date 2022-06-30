// 1) display current day- I can do that in the <p> id currentDay
// 2) display the 10 hour in the workday from 8-5
// 3) make the colors of the workday in the past, present, or future
// 4) enter an event (need calender)
// 5) need save button then it saves the event in local storage
//      still displays on the screen

// 1) display current day- I can do that in the <p> id currentDay

var currentDayEl = document.querySelector("#currentDay");
var containerEl = document.querySelector(".container");
var currentTime = moment().format('HH');
console.log(currentTime);
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



var hourCounter = hours.length;
setInterval(function() {
    currentDayEl.textContent = moment().format("dddd, MMMM Do YYYY");
},1000);

// 2) display the 10 hour in the workday from 8-5

hours.forEach(function(hour) {
    var rowDiv = $("<div>")
        .addClass("row w-100 time-block");
        
    var timeBlockP = $("<p>")
        .text(hour)
        .addClass("past col-2")
        
    
    var saveButton = $("<button>")
        .text("save")
        .addClass("saveBtn")
        .addClass("col-2")
    
    var textAreaEl = $("<textarea>")
        .addClass("textArea col-8 description past")
    
    console.log("my loop is working");
    $(".container").append(rowDiv);
    rowDiv.append(timeBlockP);
    rowDiv.append(textAreaEl);
    rowDiv.append(saveButton);
    console.log(hour);  
   
});

// saves text in text area when save button is clicked
function loadText() {
    for (let i = 0; i < 8; i++) {
    var textFrom = localStorage.getItem(`timeDiv-${i+8}`);
    if(textFrom){
        $(`#timeDiv-${i+8} > .textArea`).val(textFrom);
    }
    else {
        $(`#timeDiv-${i+8} > .textArea`).val('');
    }
    }
};


//code to dynamically create uniqueID
$(document).ready(function() {
    $(".row").each(function(i) {
        var unique = 8 + i;
        console.log(unique)
        $(this).attr("id",`timeDiv-${unique}`);
    })

    //This gives me a unique ID for my div to change past class
    // $(".past").each(function(i) {
    //     var unique = 8 + i;
    //     console.log(unique)
    //     $(this).attr("id",`hourDiv-${unique}`);
    //  })
    $(".saveBtn").on("click", function (e) {
        var button = $(this);
        console.log(button);
        console.log("<button> was clicked");
        var hourText = $(this).siblings(".textArea").val();
        var time = $(this).parent().attr("id");
        console.log(`
        Time:${time} 
        Text:${hourText}`);
        console.log(hourText);
        localStorage.setItem(time, hourText)
       
    
  })
  loadText();
});
//getting color change
// var hourEight = moment().hour(8).format('H');
// var hourNine = moment().hour(9).format('H');
// var hourTen = moment().hour(10).format('H');
// var hourEleven = moment().hour(11).format('H');
// var hourTwelve = moment().hour(12).format('H');
// var hourThirteen = moment().hour(13).format('H');
// var hourFourteen = moment().hour(14).format('H');
// var hourFifteen = moment().hour(15).format('H');
// var hourSixteen = moment().hour(16).format('H');
// var hourSeventeen = moment().hour(17).format('H');

// if (hourEight == currentTime) {
//     $("hourDiv-8").removeClass("past").addClass("present");
// } else if (hourEight < currentTime) {
//     $("hourDiv-8").removeClass("past").addClass("future");
// };

// if (hourSeventeen == currentTime) {
//     $("hourDiv-26").removeClass("past").addClass("present");
// } else if (hourSeventeen > currentTime) {
//     $("hourDiv-26").removeClass("past").addClass("future");
// };
// loadText();
//     $(".textarea").each(function() {
    
//         var timeBlockText = parseInt($(this).attr("id").val());
//         console.log("this function is running");
// });
// });


  
//     function checkTime ()  {
//         $(".textarea").each(function() {
//         var timeBlockText = parseInt($(this).attr("id").val());
//         console.log("this function is running");
       
        
//     console.log(timeBlockText);
//         if (currentTime=hourText) {
//             $("p").removeClass("past");
//             $("p").addClass("present");
//         } else if (currentTime>hourText) {
//             $("p").removeClass("past");
//             $("p").addClass("future");
//         }
        
// });
  
// };
// checkTime ();







// var checkTime = function () {
        
    
        
//     })   
 
        //var scheduleTime = $("timediv8").text();
        //var scheduleTime = moment("08:00",HH:mm");
        //scheduleTime.format("HH:mm")
       // console.log(scheduleTime);
        // console.log(currentTime);
        // if (currentTime=hourText) {
        //     $("p").removeClass("past");
        //     $("p").addClass("present");
        // } else if (currentTime>hourText) {
        //     $("p").removeClass("past");
        //     $("p").addClass("future");
        // }
        // if (currentTime = x) {
        //     //add class .present to timeblockP
        // } else (currentime < x) {
        //     //add class .past to timeblockp
        // }
    
    //   };
    //   checkTime();

// //Can I use toggleClass here?  I need to grab the text in my <p> with class past which is a child of div with id timeDiv
    
    
//    //checkTime();

  
// // saves text in text area when save button is clicked



// // var createTask = function(hourText) {

// // }

// //change colors
// //if time is before current time, make class .past
// // present .present
// // future .future