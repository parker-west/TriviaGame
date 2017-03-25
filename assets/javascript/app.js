// Initialize JQuery after DOM finishes.
$(document).ready(function() {
//File linked?
console.log("I'm linked.");



//ON CLICK: Hide START button div on click and show #quiz.

//TIMER LOGIC:
	//VARIABLE: Set starting time.
	var number = 30;

	//VARIABLE: intervalId will hold setInterval which runs the timer.
	var intervalId;


	//When the "start" button is clicked, execute the "start" function.
	$("#start-button").on("click", run);

	//FUNCTION: Start timer and set second interval.
	function run() {
		intervalId = setInterval(decrement, 1000);
		$("#quiz").css("visibility", "visible");
		$("#done").css("visibility", "visible");	
	}

	function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

	// FUNCTION: Decrement timer.
	function decrement() {
		number--;
	
		//Show the number in the span of the "timer" div.
		$("#timer > p > span").html(number);

		//If timer reaches zero...
		if (number === 0) {
			// ...run the "stop" function...
			stop();
			// ...hide "quiz" div...
			$("#quiz").hide();
			$("#done").hide();
			$("#start-button").hide();

			// ...show "results div"
			$("#results").css("visibility", "visible");	
		}
	}


//QUIZ LOGIC:

	// $("quiz").on("click", function() {	});
	
	

	//if question div input value equals answer then true
	// if ($("#question-1").('input[name=hampter]:checked').val()) {
	// 	alert('checked');
	// }
	var correctAnswers = 0;
	var wrongAnwers = 0;
	var unanswered = 7;

$( "#quiz" ).on( "click", function() {

	if ($( "input[name=question-1]:checked" ).val() === "correct") {
		correctAnswers++;
		unanswered--;
		console.log("correct 1--" + correctAnswers);
	} else if ($( "input[name=question-1]:checked" ).val() === "wrong") {
		console.log("correct2-- " + correctAnswers);
		wrongAnwers++;
		unanswered--;
	}

	if ($( "input[name=question-2]:checked" ).val() === "correct") {
		
		correctAnswers++;
		console.log("correct 3--" + correctAnswers);
		unanswered--;
	} else if ($( "input[name=question-2]:checked" ).val() === "wrong") {
		wrongAnwers++;
		unanswered--;
		console.log("correct 4--" + correctAnswers);
	}


	console.log("correct " + correctAnswers);
	console.log("wrong " + wrongAnwers);
	console.log("unanswered " + unanswered);
  
});


// End of document.ready		


//Still working?
console.log('still working.');

//End of doc ready.
});

