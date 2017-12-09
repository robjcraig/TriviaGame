
// Start a function to get the page ready for jQuery:

$(document).ready(function() {
	
	// Run a function (answerCheck) for when each button (answer1,answer2,etc)
	// is clicked it will check the value (val) of the answer buttons
	// with each correct answer (answerKey) in the question set

	$("#answer1").on("click", submit);
	$("#answer2").on("click", submit);
	$("#answer3").on("click", submit);
	$("#answer4").on("click", submit);

function answerCheck() {

// if value of answer1 = value of answerKey1, then add HTML "You are correct"
// in the ("#answerPrompt") div

if (answer1 = answerKey1)
	$("#answerPrompt").html

// var questionSet = [questionSet1, questionSet2, questionSet3];

var questionSet = ["#answer1", "#answer2", "#answer3", "#answer4"];

console.log(questionSet);

// Create an object for each set of questions and the corresponding answer choices:

var question1 = "Who was the 8th President of the U.S.?";
var answerKey1 = "Martin Van Buren";

var questionSet1 = [
      answer1 = "Teddy Roosevelt",
      answer2 = "Franklin Pierce",
      answer3 = "Howard Taft",
      answer4 = "Martin Van Buren",
     ];

console.log(questionSet1[2]);
console.log(questionSet3[0]);

var question2 = "Which president's birthday does not occur in February?";
var answerKey2 = "John F. Kennedy";

var questionSet2 = [
      answer1 = "Abraham Lincoln",
      answer2 = "Ronald Reagan",
      answer3 = "John F. Kennedy",
      answer4 = "George Washington",
     ];

var question3 = "Who was the youngest president to be elected?";
var answerKey3 = "Teddy Roosevelt";

var questionSet3 = [
      answer1 = "Barack Obama",
      answer2 = "John F. Kennedy",
      answer3 = "Harry Truman",
      answer4 = "Teddy Roosevelt",
     ];
 }




var myVar = setInterval(function(){ myTimer() }, );

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("timerBox").innerHTML;
}
console.log (myVar);

function myStopFunction() {
    clearInterval(myVar);
}

// Create a function that will check if the answer button is true when clicked.

function submit() {

	//  If value of "answer1" is true, then display 'You are correct.'.

    	if (answer1 === true) {
    		$("#answerPrompt").html("");
    	}
    }



// // Create a variable that holds the beginning time.

	var number = 2000;
console.log (number);
// // Create a variable to hold the interval ID when executing the "run" function

// 	var intervalId;

// // Create a function that starts the clock as soon as the page loads

	function run() {
      intervalId = setInterval(decrement, 1000);
      console.log (intervalId);
    }

     function decrement() {

//       //  Decrease number by one.
//       number--;

      //  Show the number in the #timerBox tag.

      $("#timerBox").html("<h2>" + number + "</h2>");
      $("#timerBox").html(number);



//       //  Once number hits zero...
      if (number === 0) {

//         //  ...run the stop function.
        stop();

//         //  Alert the user that time is up.
        alert("Time Up!");}
    }
});

// Create a function to stop the clock when the timer hits 0

   function stop() {

      //  Clears the intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    };


    
