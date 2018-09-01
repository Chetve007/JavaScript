var x = 0;
var y = 0;
var boolX = true;
var boolY = true;
var topKey = 0;

var circle = document.querySelector(".circle");
var platform = document.querySelector(".platform");
var platBot = document.querySelector(".platBot");

function moveBot() {
	platBot.style.top = circle.style.top;
}

document.addEventListener('keydown', function(e) {
	switch(e.keyCode) {
		case 38:
			topKey -= 5;
			break;
		case 40:
			topKey += 5;
			break;
	}
})

function collision() {
	if(circle.offsetTop > platform.offsetTop && circle.offsetTop < platform.offsetTop + platform.offsetHeight && circle.offsetLeft == platform.offsetLeft + platform.offsetWidth) {
		boolX = true;
		// console.log(circle.offsetTop);
	}
	if(circle.offsetLeft == 0) {
		clearInterval(interval);
		alert("GAME OVER");
	}
	console.log(platform.offsetTop);
}

function offset() {

	if(boolX) {
		x++;
		if(x == 880) {
			boolX = false;
		}
	}
	if(!boolX) {
		x--;
		if(x == 0) {
			boolX = true;
		}
	}
	if(boolY) {
		y++;
		if(y == 480) {
			boolY = false;
		}
	}
	if(!boolY) {
		y--;
		if(y == 0) {
			boolY = true;
		}
	}
circle.style.left = x + "px";
circle.style.top = y + "px";

	if(topKey >= 440) {
		topKey = 440;
	}
	else if(topKey <= 0) {
		topKey = 0;
	}
	platform.style.top = topKey + "px";

collision();
moveBot();

}

var interval = setInterval(offset, 10);