// Initialize JQuery after DOM finishes.
$(document).ready(function() {
//File linked?
console.log("I'm linked.");



//ON CLICK: Hide START button div on click and show #quiz.

//TIMER LOGIC:
	//VARIABLE: Set starting time.
	var number = 10;

	//VARIABLE: intervalId will hold setInterval which runs the timer.
	var intervalId;


	//When the "start" button is clicked, execute the "start" function.
	$("#start-button").on("click", run);

	//FUNCTION: Start timer and set second interval.
	function run() {
		intervalId = setInterval(decrement, 1000);
	}

	// FUNCTION: Decrement timer.
	function decrement() {
		number--;
	
		//Show the number in the span of the "timer" div.
		$("#timer > p > span").html(number);
	}


	

	//If timer reaches zero...

		// ...run the "stop" function...

		// ...hide "quiz" div...

		// ...show "results div"

//QUIZ LOGIC:



// End of document.ready		


//Still working?
console.log('still working.');

//End of doc ready.
});