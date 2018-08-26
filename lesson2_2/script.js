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
			// console.log(123);
			break;
		case 40:
			topKey += 5;
			break;

	}
	platform.style.top = topKey +"px";
})

function collision() {
	if(circle.offsetTop > platform.offsetTop && circle.offsetTop < platform.offsetTop + platform.offsetHeight && circle.offsetLeft == platform.offsetLeft + platform.offsetWidth) {
		boolX = true;
		// console.log("fail");
	}
	if(circle.offsetLeft == 0) {
		clearInterval(interval);
		alert("GAME OVER");
	}
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
if(y >= 840 && y <= 0) {
	platform.style.top = y + "px";
}
collision();
moveBot();
// console.log(platform.offsetHeight);

}

var interval = setInterval(offset, 10);