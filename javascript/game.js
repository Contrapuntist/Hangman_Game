
//variable declarations 
var userChoice = ""; 
var wordSelect = ""; 

//collection of words to use in game 
var wordLibrary = "guitar"; 

var instrumentWords = ['guitar', 'trumpet', 'drums', 'violin', 'cello', 'saxophone', 'tuba'];

//random selection of word.  
var wordChoice = instrumentWords[Math.floor(Math.random() * instrumentWords.length)];  



// Loop for determining length of selected word and how many underscores to print to screen 
for ( var i = 0; i < wordChoice.length; i++ ) { 
	wordSelect = wordSelect + "_ ";
	console.log(wordSelect);
} 	

console.log(wordChoice);
//document.querySelector('#wordSelect').innerHTML = wordSelect; 

//getElementById('')

//.("#wordSelect").innerHTML = wordSelect;  querySelector 

