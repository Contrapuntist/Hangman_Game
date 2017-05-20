
// Variable declarations 
var userChoice = ""; 
var wordSelect = []; 
var charMatch = null;
var charUsed = [];
var fullAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var hangman = 7;
var gameImg = null;
var newImg = null;
var spaceCount = null; 
var snd = new Audio("sounds/Swords_Collide.mp3");

// Collection of words to use in game 
var gotWords = ['targaryen', 'throne', 'westeros', 'blackfyre', 'stark', 'reyne', 'dragon', 'dragonlords', 'winterfell', 'baratheon', 'whitewalker', 'kingsguard', 'braavos', 'warden', 'dothraki', 'pentos', 'lannister', 'tyrells', 'greyjoys', 'durrandon', 'bolton', 'arryn', 'blackwater', 'kingsroad', 'valyrian'];

// Random selection of word.  
var wordChoice = gotWords[Math.floor(Math.random() * gotWords.length)];  
spaceCount = wordChoice.length; 
console.log("Space counter begins at:" + spaceCount);

// Loop for determining length of selected word and how many underscores to print to screen 
for ( var i = 0; i < wordChoice.length; i++ ) { 	
	wordSelect[i] = " _";
	document.querySelector('#wordSelect').innerHTML = wordSelect.join(" ");
} 	

// Know what word is selected from array gotWords to help with debugging   
console.log(wordChoice);

// Document.querySelector('#wordSelect').innerHTML = wordSelect; 
document.querySelector('#movesLeft').innerHTML = hangman; 

document.querySelector('#gameStatusTxt').innerHTML = "Game On"

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
		snd.play();
	} 
	
	// Win or Lose condition statement. Changes img and txt 
	if ( hangman === 0 ) {
		newImg.src = "images/game-of-thrones-arise.gif";
		document.querySelector('#gameStatusTxt').innerHTML = "You've been turned to a whitewalker"
	} else if (spaceCount === 0 ) {  
		newImg.src = "images/whitewalkerdead.gif"; 
		document.querySelector('#gameStatusTxt').innerHTML = "You've defeated a whitewalker"
	}   

	// condition and Loop to see if user wins 
	

	/* early try to declare player wins 
	if (hangman < 7 && hangman > 0) { 

		for ( var i = 0; i < wordSelect.length; i++) {
			
			//replace img when player wins to Jon Snow killing whitewalker 
			if ( wordSelect[i] !== "_" ) {
				console.log(wordSelect[i]);
				
			}
		}
	} 
	*/
}

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
	
} 

// call function to create img on screen/HTML "Winter is Coming" text
gameState(); 


/* 

Code Lauren helped me with; used above in gameState function 

var targetdiv = <grab parent div>
var img = document.createElement('img') 
newimg.src = < img path> 
targetDiv.appendChild(newimg)

*/