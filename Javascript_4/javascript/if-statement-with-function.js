var score = 75; // SCore 
var msg = ''; //Message

function congratulate() {
	msg += 'Congratulations! ';
}
if (score >= 50) { // If score is 50 or more
	congratulate();
	msg += 'Proceed to next round.';
}
var el = document.getElementById('answer');
el.innerHTML = msg;