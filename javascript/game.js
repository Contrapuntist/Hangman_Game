// I'm struggling a little bit with code organization. I'd like to know if there a good practice I should follow?
// Or, if there are some bad practices to avoid? 



// Variable declarations 
var userChoice = "";		// tracks the key user chooses 
var wordSelect = [];     	// array for underscores to appear
var charMatch = null;		// used to track if userChoice in word
var charUsed = [];			// array for selected letters 
var fullAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var hangman = 7;  			// Used to track moves left before player loses 
var gameImg = null; 		// for img creation
var newImg = null;			// changes img source 
var spaceCount = null;  	// tracks the number of spaces left for win state 
var snd = new Audio("sounds/Swords_Collide.mp3");

// Collection of words to use in game 
var gotWords = ['targaryen', 'throne', 'westeros', 'blackfyre', 'stark', 'reyne', 'dragon', 'dragonlords', 'winterfell', 'baratheon', 'whitewalker', 'kingsguard', 'braavos', 'warden', 'dothraki', 'pentos', 'lannister', 'tyrells', 'greyjoys', 'durrandon', 'bolton', 'arryn', 'blackwater', 'kingsroad', 'valyrian'];

// Random selection of word.  
var wordChoice = gotWords[Math.floor(Math.random() * gotWords.length)];  
spaceCount = wordChoice.length; 

// Loop for determining length of selected word and how many underscores to print to screen 
for ( var i = 0; i < wordChoice.length; i++ ) { 	
	wordSelect[i] = " _";
	document.querySelector('#wordSelect').innerHTML = wordSelect.join(" ");
} 	

// Prints moves left and initial game state at start and refresh (F5 hit)
document.querySelector('#movesLeft').innerHTML = hangman; 
document.querySelector('#gameStatusTxt').innerHTML = "Game On"


// Know what word is selected from array gotWords to know what word was randomly selected   
// console.log(wordChoice);

//function that checks whether user choice is in the word
function letterMatch(letter) {
	charMatch = null;
	
	for (var i = 0; i < wordChoice.length; i++ ) {

		if (letter == wordChoice.charAt(i) ) {
			charMatch = true;
			wordSelect[i] = " " + letter;
			spaceCount -= 1;
			console.log(spaceCount); 
		} 		
	}
	document.querySelector('#wordSelect').innerHTML = wordSelect.join(' ');
}

// function tracks lives left 
function gameCounter () {
	if (charMatch !== true && hangman > 0) {
		hangman = hangman - 1;
	}
} 

// function creates img tag and adds it to HTML
function gameState () { 

	gameImg = document.getElementById('gameStatusImg');
	newImg = document.createElement('img');
	newImg.src = "images/johnsnow-winteriscoming.jpg";
	gameImg.appendChild(newImg);
	
} 

// call function to create img on screen/HTML 
gameState(); 

// Taking in user input on key press and printing results of choice to HTML 
document.onkeyup = function(event) {

	userChoice = event.key;  

	// checks if userChoice is an in alphabet. If true, then magic happens. 
	if ( fullAlphabet.indexOf(userChoice) !== -1  ) { 

		charUsed.push(" " + userChoice);
		letterMatch(userChoice);
		gameCounter(charMatch);
		document.querySelector('#userChoice').innerHTML = userChoice; 
		document.querySelector('#alphaUsed').innerHTML = charUsed;
		document.querySelector('#movesLeft').innerHTML = hangman;
		snd.play();
	} 
	
	// Win or Lose condition statement. Changes img and txt.  Hindsight, I probably could've placed in function.   
	if ( hangman === 0 ) {
		newImg.src = "images/game-of-thrones-arise.gif";
		document.querySelector('#gameStatusTxt').innerHTML = "You've been turned to a whitewalker"
	} else if (spaceCount === 0 ) {  
		newImg.src = "images/whitewalkerdead.gif"; 
		document.querySelector('#gameStatusTxt').innerHTML = "You've defeated a whitewalker"
	}   

}