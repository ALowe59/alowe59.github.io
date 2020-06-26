//var password = prompt("please enter the password to awesominds");

//console.log(password);
//var wsr = document.getElementById("WSR");
var submit = false;

function validation() {
	pass = document.getElementById("psw").value;
	if(pass == "hello"){
		//alert("we get into the if statement");
		var container = document.getElementById("container");
		container.style.display = "none";
		
		//WSR Section
		document.getElementById("WSR").innerHTML = "<h1>This is for the WSR</h1>";
		
		//Scrum Section
		document.getElementById("Scrum").innerHTML = "<h1> This is for the Scrum Meetings</h1>";
		
		//Sprint Section
		document.getElementById("Sprint").innerHTML = "<h1> This is for the Sprint BackLog</h1>";
		
		//Meeting Section
		document.getElementById("Meeting").innerHTML = "<h1> This is for the Retrospective Meetings</h1>";
		
		//Minutes Section
		document.getElementById("Minutes").innerHTML = "<h1> This is for the Meetings Minutes</h1>";
		
		submit = false;
	}
	else{ 
	alert("Incorrect Password");
		window.location.reload();
	}
	
	return submit;
	
}
function myFunction() {
	  var x = document.getElementById("myTopnav");
	  if (x.className === "topnav") {
		x.className += " responsive";
	  } else {
		x.className = "topnav";
	  }
	}
		