var trigger = document.getElementsByClassName("trigger")[0];

var secret = document.getElementById("secret");

var secretButton = document.getElementById("secretButton");

var lukas = document.getElementById("lukas");

window.onclick = function(event) {
	if (event.target == trigger) {
		trigger.style.display = "none";
	}
}

secret.onfocus = function() {
	secretButton.style.display = "inline";
	secretButton.style.color = "white";
	secretButton.style.border = "0.2em solid white";
	secret.style.outline = "0.2em solid white";
}

secretButton.onclick = function() {
	if(secret.value == "Lukas") {
		lukas.style.display = "block";
		window.location.href = "#lukas";
	}
}