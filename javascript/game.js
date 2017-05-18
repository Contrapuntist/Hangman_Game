
//variable declarations 
var userChoice = ""; 
var wordSelect = []; 
var charMatch = null;
var charUsed = [];
var fullAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var hangman = 7;


//collection of words to use in game 

//var wordLibrary = "guitar"; 
var gotWords = ['targaryen', 'throne', 'westeros', 'blackfyre', 'stark', 'reyne', 'dragon', 'dragonlords'];

//random selection of word.  
var wordChoice = gotWords[Math.floor(Math.random() * gotWords.length)];  


// Loop for determining length of selected word and how many underscores to print to screen 
for ( var i = 0; i < wordChoice.length; i++ ) { 
	wordSelect[i] = " _";
	console.log(wordSelect);
	document.querySelector('#wordSelect').innerHTML = wordSelect.join(" ");
} 	

console.log(wordChoice);

//document.querySelector('#wordSelect').innerHTML = wordSelect; 
document.querySelector('#movesLeft').innerHTML = hangman; 

//Taking in user input on key press and printing results of choice to HTML 
document.onkeyup = function(event) {
	userChoice = event.key; 
	charUsed.push(" " + userChoice);
	letterMatch(userChoice);
	gameCounter(charMatch);

	
//	console.log(hangman); 
//	console.log(charUsed);
	
	document.querySelector('#userChoice').innerHTML = userChoice; 
	document.querySelector('#alphaUsed').innerHTML = charUsed;
	document.querySelector('#movesLeft').innerHTML = hangman;

}

//function that checks whether user choice is in the word
function letterMatch(letter) {
	charMatch = null;
	
	for (var i = 0; i < wordChoice.length; i++ ) {

		if (letter == wordChoice.charAt(i) ) {
			charMatch = true;
			wordSelect[i] = " " + letter;
			console.log(wordSelect)
		} 
	}
	
	document.querySelector('#wordSelect').innerHTML = wordSelect.join(' ');
	console.log(charMatch); 
}

function gameCounter () {

	if (charMatch !== true) {
		hangman = hangman - 1;
	}

}