var trigger = document.getElementsByClassName("trigger")[0];

var btn = document.getElementById("triggerButton");

window.onclick = function(event) {
	if (event.target == trigger) {
		trigger.style.display = "none";
	}
}