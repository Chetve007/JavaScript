var bubble = document.querySelectorAll(".bubble");

for(var i = 0; i < bubble.length; i++) {
	bubble[i].addEventListener("click", function() {
		// this.style.background = "red";
		this.style.display = "none";
	})
}