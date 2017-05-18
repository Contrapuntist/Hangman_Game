
// Variable declarations 
var userChoice = ""; 
var wordSelect = []; 
var charMatch = null;
var charUsed = [];
var fullAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var hangman = 7;


// Collection of words to use in game 
var gotWords = ['targaryen', 'throne', 'westeros', 'blackfyre', 'stark', 'reyne', 'dragon', 'dragonlords'];

// Random selection of word.  
var wordChoice = gotWords[Math.floor(Math.random() * gotWords.length)];  

// Loop for determining length of selected word and how many underscores to print to screen 
for ( var i = 0; i < wordChoice.length; i++ ) { 
	
	wordSelect[i] = " _";
	document.querySelector('#wordSelect').innerHTML = wordSelect.join(" ");
} 	

// Know what word is selected from array gotWords to help with debugging   
console.log(wordChoice);

// Document.querySelector('#wordSelect').innerHTML = wordSelect; 
document.querySelector('#movesLeft').innerHTML = hangman; 

// Taking in user input on key press and printing results of choice to HTML 
document.onkeyup = function(event) {

	userChoice = event.key; 

	if ( fullAlphabet.indexOf(userChoice) !== -1  ) { 

		charUsed.push(" " + userChoice);
		letterMatch(userChoice);
		gameCounter(charMatch);
		document.querySelector('#userChoice').innerHTML = userChoice; 
		document.querySelector('#alphaUsed').innerHTML = charUsed;
		document.querySelector('#movesLeft').innerHTML = hangman;

	} 
	
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

}

function gameCounter () {

	if (charMatch !== true && hangman > 0) {
		hangman = hangman - 1;
	}

} 

/*
function gameState () { 

	var gameImg = document.getElementById('gameStatusImg');
	gameImg.innerHTML = '<img src='images/johnsnow-winteriscoming.jpg' width="300px">';

	if (hangman > 0 ) {

	}

} 

*/