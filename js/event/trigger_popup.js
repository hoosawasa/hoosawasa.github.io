var trigger = document.getElementsByClassName("trigger")[0];

window.onclick = function(event) {
	if (event.target == trigger) {
		trigger.style.display = "none";
	}
}