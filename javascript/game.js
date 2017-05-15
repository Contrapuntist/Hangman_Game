
//variable declarations 
var userChoice = ""; 
var wordSelect = ""; 

//collection of words to use in game 
var wordLibrary = "guitar"; 

var gotWords = ['targaryen', 'throne', 'westeros', 'blackfyre', 'stark', 'reyne', 'dragon', 'dragonloards'];

//random selection of word.  
var wordChoice = gotWords[Math.floor(Math.random() * gotWords.length)];  



// Loop for determining length of selected word and how many underscores to print to screen 
for ( var i = 0; i < wordChoice.length; i++ ) { 
	wordSelect = wordSelect + "_ ";
	console.log(wordSelect);
} 	

console.log(wordChoice);

document.querySelector('#wordSelect').innerHTML = wordSelect; 

//getElementById('')

//.("#wordSelect").innerHTML = wordSelect;  querySelector 

