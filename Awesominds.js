//var password = prompt("please enter the password to awesominds");

//console.log(password);
//var wsr = document.getElementById("WSR");
var submit = false;

function validation() {
	pass = document.getElementById("psw").value;
	if(pass == "hello"){
		var container = document.getElementById("container");
		container.style.display = "none";
		
		//WSR Section
		document.getElementById("WSR").innerHTML = "<h1>Weekly Status Report</h1>";
		
		//Week 1 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR1.pdf'> Weekly Status Report #1</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 2 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR2.pdf'> Weekly Status Report #2</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 3 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR3.pdf'> Weekly Status Report #3</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 4 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR4.pdf'> Weekly Status Report #4</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 5 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR5.pdf'> Weekly Status Report #5</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 6 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR6.pdf'> Weekly Status Report #6</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 7 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR7.pdf'> Weekly Status Report #7</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 8 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR8.pdf'> Weekly Status Report #8</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 9 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR9.pdf'> Weekly Status Report #9</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 10 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR10.pdf'> Weekly Status Report #10</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 11 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR11.pdf'> Weekly Status Report #11</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 12 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR12.pdf'> Weekly Status Report #12</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//bottom of WSR
		// document.getElementById("WSR").innerHTML += "<hr style='height:2px;border-width:0;color:gray;background-color:gray'>";
		
		
		//Scrum Section
		document.getElementById("Scrum").innerHTML = "<h1>Scrum Meetings</h1>";
		
		//Scrum Sprint 1
		
		//Scrum Sprint 2
		
		//Scrum Sprint 3
		
		//Scrum Sprint 4
		
		//Scrum Sprint 5
		
		//Scrum Sprint 6
		
		//Bottom of Scrum Section
		// document.getElementById("Scrum").innerHTML += "<hr style='height:2px;border-width:0;color:gray;background-color:gray'>";
		
		//Sprint Section
		document.getElementById("Sprint").innerHTML = "<h1>Sprint BackLog</h1>";
		
		//Sprint 1
		
		//Sprint 2
		
		//Sprint 3
		
		//Sprint 4
		
		//Sprint 5
		
		//Sprint 6
		
		//Bottom of Sprint Section
		// document.getElementById("Sprint").innerHTML += "<hr style='height:2px;border-width:0;color:gray;background-color:gray'>";
		
		
		//Meeting Section
		document.getElementById("Meeting").innerHTML = "<h1>Retrospective Meetings</h1>";
		
		//Meeting Sprint 1

		
		//Meeting Sprint 2
		
		//Meeting Sprint 3
		
		//Meeting Sprint 4
		
		//Meeting sprint 5
		
		//Meeting Sprint 6
		
		//Bottom of Meeting Section
		// document.getElementById("Meeting").innerHTML += "<hr style='height:2px;border-width:0;color:gray;background-color:gray'>";
		
		//Minutes Section
		document.getElementById("Minutes").innerHTML = "<h1>Meetings Minutes</h1>";
		
		//Minutes Sprint 1
		document.getElementById("Minutes").innerHTML += "<h3>Sprint 1</h3>";
		//Minutes 1
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting1.pdf'> Meeting Minutes 1</div>";
		//Minutes 2
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting2.pdf'> Meeting Minutes 2</div>";
		document.getElementById("Minutes").innerHTML += "<hr>";
		
		//Minutes Sprint 2
		document.getElementById("Minutes").innerHTML += "<h3>Sprint 2</h3>";
		//Minutes 3
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting3.pdf'> Meeting Minutes 3</div>";
		//Minutes 4
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting4.pdf'> Meeting Minutes 4</div>";
		document.getElementById("Minutes").innerHTML += "<hr>";
		
		//Minutes Sprint 3
		document.getElementById("Minutes").innerHTML += "<h3>Sprint 3</h3>";
		//Minutes 5
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting5.pdf'> Meeting Minutes 5</div>";
		//Minutes 6
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting6.pdf'> Meeting Minutes 6</div>";
		document.getElementById("Minutes").innerHTML += "<hr>";
		
		//Minutes Sprint 4
		document.getElementById("Minutes").innerHTML += "<h3>Sprint 4</h3>";
		//Minutes 7
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting7.pdf'> Meeting Minutes 7</div>";
		//Minutes 8
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting8.pdf'> Meeting Minutes 8</div>";
		document.getElementById("Minutes").innerHTML += "<hr>";
		
		//Minutes Sprint 5
		document.getElementById("Minutes").innerHTML += "<h3>Sprint 5</h3>";
		//Minutes 9
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting9.pdf'> Meeting Minutes 9</div>";
		//Minutes 10
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting10.pdf'> Meeting Minutes 10</div>";
		document.getElementById("Minutes").innerHTML += "<hr>";
		
		//Minutes Sprint 6
		document.getElementById("Minutes").innerHTML += "<h3>Sprint 6</h3>";
		//Minutes 11
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting11.pdf'> Meeting Minutes 11</div>";
		//Minutes 12
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting12.pdf'> Meeting Minutes 12</div>";
		
		//Bottom of Minutes Section
		document.getElementById("Minutes").innerHTML += "<hr style='height:2px;border-width:0;color:gray;background-color:gray'>";
		
		submit = false;
	}
	else{ 
	alert("Incorrect Password");
		window.location.reload();
	}
	
	return submit;
	
}
// function myFunction() {
// 	  var x = document.getElementById("myTopnav");
// 	  if (x.className === "topnav") {
// 		x.className += " responsive";
// 	  } else {
// 		x.className = "topnav";
// 	  }
// 	}
		