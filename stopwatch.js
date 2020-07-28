var sec = 0;
var min = 0;
var hours = 0;

var displaySeconds = 0;
var displayMinutes = 0;
var displayHours = 0;

var start = document.querySelector("#start");
var reset = document.querySelector("#reset");

function stopwatch(){

	sec++;
	if(sec%60==0){
		sec=0;
		min++;
		if(min%60==0){
			min=0;
			hours++;
		}
	}

	if(sec<10){
		displaySeconds = "0" + sec.toString();
	}else{
		displaySeconds = sec;
	}
	if(min<10){
		displayMinutes = "0" + min.toString();
	}else{
		displaySeconds = min;
	}
	if(hours<10){
		displayHours = "0" + hours.toString();
	}else{
		displaySeconds = hours;
	}


	document.getElementById("display").innerHTML = displayHours + ":" +displayMinutes + ":" + displaySeconds;

}

var isStart = false;
var isStop = true;
var interval;

start.addEventListener("click", function(){
	if(isStop){
		start.textContent = "stop";
		isStop = false;
		interval = window.setInterval(stopwatch,1000);
		isStart=true;
	}else{
		start.textContent = "start";
		isStop = true;
		isStart = false;
		window.clearInterval(interval);
	}
});

reset.addEventListener("click", function(){
	start.textContent = "start";
	document.getElementById("display").innerHTML = "00:00:00";
	sec = 0;
	min = 0;
	hours = 0;
	displaySeconds = 0;
	displayMinutes = 0;
	displayHours = 0;
	isStart = false;
	isStop = true;
	window.clearInterval(interval);
});