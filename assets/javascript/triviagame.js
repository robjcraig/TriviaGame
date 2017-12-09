// Start the function to get the page ready for jQuery

$(document).ready(function() {
	
	// Create an onclick event for when each answer button is clicked



var myVar = setInterval(function(){ myTimer() }, 10000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("timerBox").innerHTML;
}

function myStopFunction() {
    clearInterval(myVar);
}
console.log (myVar);


// 	$("#answer1").on("click", stop);
// 	$("#answer1").on("click", stop);
// 	$("#answer1").on("click", stop);
// 	$("#answer1").on("click", stop);

// // Create a variable that holds the beginning time

// 	var number = 100;
// console.log (number);
// // Create a variable to hold the interval ID when executing the "run" function

// 	var intervalId;

// // Create a function that starts the clock as soon as the page loads

// 	function run() {
//       intervalId = setInterval(decrement, 1000);
//     }

//      function decrement() {

//       //  Decrease number by one.
//       number--;

//       //  Show the number in the #show-number tag.
//       // $("#timerBox").html("<h2>" + number + "</h2>");
//       $("#timerBox").html(number);


//       //  Once number hits zero...
//       if (number === 0) {

//         //  ...run the stop function.
//         stop();

//         //  Alert the user that time is up.
//         alert("Time Up!");
//     }
// }

// Create a function to stop the clock when the timer hits 0

   function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }
});

    
