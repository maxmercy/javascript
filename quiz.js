
var user = {}
var responses = []

function question1() {
	var name = prompt('what is your name?')
	user.name = name
}

function question2() {
	var firstQuestion = prompt('Does 4*2 = 18? (yes or no?)')
	firstQuestion = firstQuestion.toLowerCase();
	if (firstQuestion === 'yes' ) {
		firstQuestion = false
	}
	else if (firstQuestion === 'no') {
		firstQuestion = true
	}
	else {
		alert('Please answer by yes or no');
		return question2()
	}
	responses.push(firstQuestion);
}


function question3() {
  var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  js = js.toLowerCase();
  switch (js) {
  		case "livescript":
  			js = true ;
  			break;
  		default:
  			js = false ;
  			break;
  }
  	responses.push(js);
}


function question4() {
  var logical = prompt('Give the logical operator \'or\'.');
   if ( logical === '||') {
   	logical = true ;
   }
   else {logical = false; }
   	responses.push(logical);
  }


  function question5() {
  var city = prompt('Where Where IronHack does\'nt have a bootcamp? \n Barcelona, Miami, Paris?');
 city = city.toLowerCase();
  switch (city) {
  		case "Paris":
  			city = true ;
  			break;
  		default:
  			city = false ;
  			break;
  }
  	responses.push(city);
}


question1(); 
question2();
question3();
question4();
question5();


function evaluate(responses) {
// declare two variables to store the totals
	var countertrue = 0  ;
	var counterfalse = 0 ;
	var length = responses.length ;
// populate the “totals” variables from the “responsesArray”
	for (var i = 0 ; i < length ; i++ ) {
		// console.log(responses[i]) ; // test
		if ( responses[i] === true ) {
			countertrue += 1 ;
		}
		else {
			counterfalse += 1 ;
		}

	}


//	console.log(countertrue) ; // test
//	console.log(counterfalse); // test

// save the “totals” variables inside the user object
	user.rtrue = countertrue;
	user.rfalse = counterfalse;
// call showResults
}


function showResults(name) {
// display the user results
	console.log( 
		user.name + " has " + user.rtrue + " true and " + user.rfalse + " false answers!"
	 )
}

// call the function, passing it the responses array
evaluate(responses);



showResults(); 








