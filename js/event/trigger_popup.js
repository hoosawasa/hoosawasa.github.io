var trigger = document.getElementsByClassName("trigger")[0];

var btn = document.getElementById("triggerButton");

btn.onclick = function() {
	trigger.style.display = "block";
}

window.onclick = function(event) {
	if (event.target == trigger) {
		trigger.style.display = "none";
	}
}