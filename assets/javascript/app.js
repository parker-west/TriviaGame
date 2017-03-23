document.ready({ 

//ON CLICK: Hide START button div on click and show #quiz.

//TIMER LOGIC:
	//VARIABLE: intervalId will hold setInterval which runs the timer.
	var = intervalId;
	//VARIABLE: Set starting time.
	var time = 10;
	
	//FUNCTION: Start timer and set second interval.
	function start() {
		intervalId = setInterval(count, 1000);
	}

	// FUNCTION: Decrement timer.
	function count() {
		time--;
	}


// End of document.ready		
});

// video on timer: https://www.youtube.com/watch?v=EGhF4iJSnl0