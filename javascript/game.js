
// Variable declarations 
var userChoice = ""; 
var wordSelect = []; 
var charMatch = null;
var charUsed = [];
var fullAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var hangman = 7;
var gameImg = null;
var newImg = null;

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
	
	if ( hangman === 0 ) {
		// if player loses, then gif of whitewalker king replaces Jon Snow img  
		//newImg.src = "images/whitewalkerdead.gif";
		gameImg.src="images/whitewalkerdead.gif";
		console.log("you lose");
		console.log(gameImg);
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


function gameState () { 

	gameImg = document.getElementById('gameStatusImg');
	newImg = document.createElement('img');
	newImg.src = "images/johnsnow-winteriscoming.jpg";
	gameImg.appendChild(newImg);
	//gameImg.addId()
	gameImg.setAttribute("id", "changeSrc");
} 

// call function at start or reset of game; default should be Jon Snow img with "Winter is Coming" text
gameState(); 


/* 

Code Lauren helped me with; used above in gameState function 

var targetdiv = <grab parent div>
var img = document.createElement('img') 
newimg.src = < img path> 
targetDiv.appendChild(newimg)

*/