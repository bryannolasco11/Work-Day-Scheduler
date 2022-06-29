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
}
//code to dynamically create uniqueID
$(document).ready(function() {
    $(".row").each(function(i) {
        var unique = 8 + i;
        console.log(unique)
        $(this).attr("id",`timeDiv-${unique}`);
    })
    $(".saveBtn").on("click", function (e) {
        var button = $(this);
        console.log(button);
        console.log("<button> was clicked");
        var hourText = $(this).siblings(".textArea").val();
        var time = $(this).parent().attr("id");
        console.log(`
        Time:${time} 
        Text:${hourText}`);
    
        localStorage.setItem(time, hourText)
        //console.log(time);
        // localStorage.setItem("hourText8", hourText8);
    
  })
  loadText();
});




// $(".saveBtn").click (function() {
    
//     console.log("<button> was clicked");
//     var hourText9 = $(".textArea").parent('timeDiv9').val();
//     console.log(hourText9);
//     localStorage.setItem("hourText9", JSON.stringify(hourText9));
    
//   });

//   $(".saveBtn").click (function() {
    
//     console.log("<button> was clicked");
//     var hourText10 = $(".textArea").val();
//     console.log(hourText10);
//     localStorage.setItem("hourText10", JSON.stringify(hourText10));
    
//   });

//   $(".saveBtn").click (function() {
    
//     console.log("<button> was clicked");
//     var hourText11 = $(".textArea").val();
//     console.log(hourText11);
//     localStorage.setItem("hourText11", JSON.stringify(hourText11));
    
//   });

//   $(".saveBtn").click (function() {
    
//     console.log("<button> was clicked");
//     var hourText12 = $(".textArea").closest('timeDiv8').val();
//     console.log(hourText12);
//     localStorage.setItem("hourText12", JSON.stringify(hourText12));

// });

//   $(".saveBtn").click (function() {
    
//     console.log("<button> was clicked");
//     var hourText13 = $(".textArea").closest('timeDiv13').val();
//     console.log(hourText13);
//     localStorage.setItem("hourText13", JSON.stringify(hourText13));
        
//     });
    
//     $(".saveBtn").click (function() {
    
//         console.log("<button> was clicked");
//         var hourText14 = $(".textArea").val();
//         console.log(hourText14);
//         localStorage.setItem("hourText14", JSON.stringify(hourText14));
        
//       });

//       $(".saveBtn").click (function() {
    
//         console.log("<button> was clicked");
//         var hourText15 = $(".textArea").val();
//         console.log(hourText15);
//         localStorage.setItem("hourText15", JSON.stringify(hourText15));
        
//       });

//       $(".saveBtn").click (function() {
    
//         console.log("<button> was clicked");
//         var hourText16 = $(".textArea").val();
//         console.log(hourText16);
//         localStorage.setItem("hourText16", JSON.stringify(hourText16));
        
//       });

//       $(".saveBtn").click (function() {
    
//         console.log("<button> was clicked");
//         var hourText17 = $(".textArea").val();
//         console.log(hourText17);
//         localStorage.setItem("hourText17", JSON.stringify(hourText17));
        
//       });
//Can I use toggleClass here?
   
    var checkTime = function () {
        var currentTime = moment().format('HH:ss');
        //var scheduleTime = $("timediv8").text();
        //var scheduleTime = moment("08:00",HH:mm");
        //scheduleTime.format("HH:mm")
       // console.log(scheduleTime);
        console.log(currentTime);
        if (currentTime=scheduleTime) {
            $("p").removeClass("past");
            $("p").addClass("present");
        } else if (currentTime>scheduleTime) {
            $("p").removeClass("past");
            $("p").addClass("future");
        }
        // if (currentTime = x) {
        //     //add class .present to timeblockP
        // } else (currentime < x) {
        //     //add class .past to timeblockp
        // }
     
      };
   //checkTime();

  
// saves text in text area when save button is clicked



// var createTask = function(hourText) {

// }

//change colors
//if time is before current time, make class .past
// present .present
// future .future

