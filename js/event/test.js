var trigger = document.getElementsByClassName("trigger")[0];
var agree = document.getElementById("agree");
var secret = document.getElementById("secret");
var secretButton = document.getElementById("secretButton");
var attomy = document.getElementById("attomy");
var madness = document.getElementById("madness");
var lost = document.getElementById("lost");
var mazes = document.getElementById("mazes");
var agreeBox = document.getElementById("agreeBox");

function checkTrigger() {
	var agreed = "agreed=true";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(agreed) == 0) {
		  break
	  } else {
		trigger.style.display = "block";
		break;
	  }
	}
  }
checkTrigger();
agree.onclick = function(event) {
		trigger.style.display = "none";
		if (agreeBox.checked == true) {
			var d = new Date();
			d.setTime(d.getTime() + (62*24*60*60*1000));
			var expires = "expires="+ d.toUTCString();
			document.cookie = "agreed=true;" + expires + ";path=/";
			console.log(document.cookie);
		}
}

secretButton.onclick = function() {
	if(secret.value == "Cacophony") {
		madness.style.display = "block";
		mazes.style.display = "block";
		lost.style.display = "block";
		window.location.href = "#madness";
	} else if(secret.value == "Twisted") {
		madness.style.display = "block";
		mazes.style.display = "block";
		lost.style.display = "block";
		window.location.href = "#mazes";
	}
	secret.value = "";
}

secret.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
	  event.preventDefault();
	  secretButton.click();
	  secret.value = "";
	}
  });