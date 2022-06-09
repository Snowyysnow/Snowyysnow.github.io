//document.math.timer.value="the time";
//document.getElementById("timer").value = "time by ID";

// create variables
var time=43; //how much time they get
var timesup=0;
var started=0;
var claps = new Audio('claps.mp3');

var level = 0;



// +,-,x,or /
var operator;
var rightAnswer;



function setlevel(){
	var theLevel = document.getElementById("selectlevel").value;
	console.log(theLevel);
	// set time depending on level
	 if (theLevel == 0){
		 time = 9999;
	 }

	 if (theLevel == 1){
		 time = 10;
	 }
	 
	 if (theLevel == 2){
		 time = 20;
	 }


}

// Start the game
function startgame(){
	if (started!=0){
		alert('You\'ve Already Started!');}
	else
	{
		started=1;
		CountDown();
		getProb();
	}
}





// start countdown
function CountDown() {
if(time>0)
	{
	document.math.timer.value=time;
	time=time-1;
	
	var gameTimer=setTimeout("CountDown()", 1000)}

	else if (time==0)
		{document.math.timer.value="0";
		timesup=1;
		alert('Time\'s Up!');
		document.math.firstnum.value="";
		document.math.operator.value="";
		document.math.secondnum.value="";
		document.math.answer.value="";
	}
}









//generate a random number between 2 intergers
// return the random number
function randnum(min,max)
{
var num=Math.round(Math.random()*(max-min))+min;
return num;
}


// gernerate the question
// populate the form forelds
// generate the answer 

function getProb(){	
// select operand
// use our randnum function defined earlier
operator = randnum(1,4);

// operator +
if (operator=="1"){
	document.math.operator.value="+";
	var choose1=randnum(0,10);
	var choose2=randnum(0,10);
	document.math.firstnum.value=choose1;
	document.math.secondnum.value=choose2;
	rightAnswer=choose1 + choose2;
}

// operator -
if (operator=="2"){
	document.math.operator.value="-";
	var choose2=randnum(0,50);
	var choose1=randnum(choose2,10);
	// check for negative answer
	
	if(choose1 - choose2 < 1){
		getProb();
		
	}
	
	document.math.firstnum.value=choose1;
	document.math.secondnum.value=choose2;
	rightAnswer=choose1 -  choose2;

}


// operator *
if (operator=="3"){
	document.math.operator.value="x";
	var choose1=randnum(1,10);
	var choose2=randnum(0,10);
	document.math.firstnum.value=choose1;
	document.math.secondnum.value=choose2;
	rightAnswer=choose1 * choose2;
}

// operator /
if (operator=="4"){
	document.math.operator.value="/";
	var choose2=randnum(1,10);
	var choose1=choose2 * randnum(0,10);
	document.math.firstnum.value=choose1;
	document.math.secondnum.value=choose2;
	rightAnswer=choose1 /  choose2;
	}
}



// check your answer against the answer to the question
function answerit(){
	// has the gane started
	if (started==0)	{
		alert('You Must Click The Button Labeled \'Start\'!');}
	else {
	// is time up?	
	if (timesup!=0)	{
		alert('Time Ran Out!');}
	else{

		// assing user answer and user points to variables
		var userAnswer=eval(document.math.answer.value);
		var userPoints=eval(document.math.points.value);
		

			// has the use entered ann answer
			if (userAnswer==null){
				// no
				alert('Put Your Answer In The Box To The Left Of The Button Labeled \'Answer\'!');
				document.math.answer.select();
				}
				//yes
				else{
					// is their answer right
					if (userAnswer == rightAnswer){
					alert('Right');
					userPoints++;
					document.math.points.value=userPoints;
					time++5;
					claps.play();
					var gameTimer=setTimeout("claps.pause()", 1000);
				 setlevel();
				//	
					}
					else{
						// no, it's wrong
						alert(userAnswer + " is wrong!\n\n" + rightAnswer + " is correct!")}
						document.math.answer.select();
						getProb();
						}
					}
				}
	}
