
//variable declarations 
var userChoice = ""; 
var wordSelect = ""; 
var charMatch = null;
//collection of words to use in game 
var wordLibrary = "guitar"; 

var gotWords = ['targaryen', 'throne', 'westeros', 'blackfyre', 'stark', 'reyne', 'dragon', 'dragonlords'];

//random selection of word.  
var wordChoice = gotWords[Math.floor(Math.random() * gotWords.length)];  


// Loop for determining length of selected word and how many underscores to print to screen 
for ( var i = 0; i < wordChoice.length; i++ ) { 
	wordSelect = wordSelect + "_ ";
	console.log(wordSelect);
} 	

console.log(wordChoice);

document.querySelector('#wordSelect').innerHTML = wordSelect; 

document.onkeyup = function(event) {
	userChoice = event.key; 

	for (var i = 0; i < wordChoice.length; i++ ) {
	
	if (userChoice == wordChoice.charAt(i) ) {
		charMatch = true;
		
	} else {
		charMatch = false;
	}

	console.log(charMatch);
	}

	document.querySelector('#userChoice').innerHTML = userChoice; 
}

