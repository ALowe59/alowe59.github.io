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
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR1.pdf' target = '_blank'> Weekly Status Report #1</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 2 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR2.pdf' target = '_blank'> Weekly Status Report #2</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 3 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR3.pdf' target = '_blank'> Weekly Status Report #3</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 4 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR4.pdf' target = '_blank'> Weekly Status Report #4</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 5 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR5.pdf' target = '_blank'> Weekly Status Report #5</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 6 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR6.pdf' target = '_blank'> Weekly Status Report #6</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 7 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR7.pdf' target = '_blank'> Weekly Status Report #7</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 8 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR8.pdf' target = '_blank'> Weekly Status Report #8</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 9 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR9.pdf' target = '_blank'> Weekly Status Report #9</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 10 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR10.pdf' target = '_blank'> Weekly Status Report #10</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 11 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR11.pdf' target = '_blank'> Weekly Status Report #11</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//Week 12 WSR
		document.getElementById("WSR").innerHTML += "<div><a href = 'includes/WSR/WSR12.pdf' target = '_blank'> Weekly Status Report #12</div>";
		document.getElementById("WSR").innerHTML += "<hr>";
		//bottom of WSR
		// document.getElementById("WSR").innerHTML += "<hr style='height:2px;border-width:0;color:gray;background-color:gray'>";
		
		
		//Scrum Section
		document.getElementById("Scrum").innerHTML = "<h1>Scrum Meetings</h1>";
		
		//Scrum Sprint 1
		document.getElementById("Scrum").innerHTML += "<h3>Sprint 1</h3>";
		document.getElementById("Scrum").innerHTML += "<div><a href = 'includes/Scrum/Week1.pdf' target = '_blank'> Scrum Meeting #1</div>";
		document.getElementById("Scrum").innerHTML += "<div><a href = 'includes/Scrum/Week2.pdf' target = '_blank'> Scrum Meeting #2</div>";
		document.getElementById("Scrum").innerHTML += "<hr>";
		
		//Scrum Sprint 2
		document.getElementById("Scrum").innerHTML += "<h3>Sprint 2</h3>";
		document.getElementById("Scrum").innerHTML += "<div><a href = 'includes/Scrum/Week3.pdf' target = '_blank'> Scrum Meeting #3</div>";
		document.getElementById("Scrum").innerHTML += "<div><a href = 'includes/Scrum/Week4.pdf' target = '_blank'> Scrum Meeting #4</div>";
		document.getElementById("Scrum").innerHTML += "<hr>";
		
		//Scrum Sprint 3
		document.getElementById("Scrum").innerHTML += "<h3>Sprint 3</h3>";
		document.getElementById("Scrum").innerHTML += "<div><a href = 'includes/Scrum/Week5.pdf' target = '_blank'> Scrum Meeting #5</div>";
		document.getElementById("Scrum").innerHTML += "<div><a href = 'includes/Scrum/Week6.pdf' target = '_blank'> Scrum Meeting #6</div>";
		document.getElementById("Scrum").innerHTML += "<hr>";
		
		//Scrum Sprint 4
		document.getElementById("Scrum").innerHTML += "<h3>Sprint 4</h3>";
		document.getElementById("Scrum").innerHTML += "<div><a href = 'includes/Scrum/Week7.pdf' target = '_blank'> Scrum Meeting #7</div>";
		document.getElementById("Scrum").innerHTML += "<div><a href = 'includes/Scrum/Week8.pdf' target = '_blank'> Scrum Meeting #8</div>";
		document.getElementById("Scrum").innerHTML += "<hr>";
		
		//Scrum Sprint 5
		document.getElementById("Scrum").innerHTML += "<h3>Sprint 5</h3>";
		document.getElementById("Scrum").innerHTML += "<div><a href = 'includes/Scrum/Week9.pdf' target = '_blank'> Scrum Meeting #9</div>";
		document.getElementById("Scrum").innerHTML += "<div><a href = 'includes/Scrum/Week10.pdf' target = '_blank'> Scrum Meeting #10</div>";
		document.getElementById("Scrum").innerHTML += "<hr>";
		
		//Scrum Sprint 6
		document.getElementById("Scrum").innerHTML += "<h3>Sprint 6</h3>";
		document.getElementById("Scrum").innerHTML += "<div><a href = 'includes/Scrum/Week11.pdf' target = '_blank'> Scrum Meeting #11</div>";
		document.getElementById("Scrum").innerHTML += "<div><a href = 'includes/Scrum/Week12.pdf' target = '_blank'> Scrum Meeting #12</div>";
		document.getElementById("Scrum").innerHTML += "<hr>";
		
		//Bottom of Scrum Section
		// document.getElementById("Scrum").innerHTML += "<hr style='height:2px;border-width:0;color:gray;background-color:gray'>";
		
		//Sprint Section
		document.getElementById("Sprint").innerHTML = "<h1>Sprint BackLog</h1>";
		
		//Sprint 1
		document.getElementById("Sprint").innerHTML += "<div><a href = 'includes/Sprint/Sprint1.pdf' target = '_blank'> Sprint 1</div>";
		document.getElementById("Sprint").innerHTML += "<hr>";
		//Sprint 2
		document.getElementById("Sprint").innerHTML += "<div><a href = 'includes/Sprint/Sprint2.pdf' target = '_blank'> Sprint 2</div>";
		document.getElementById("Sprint").innerHTML += "<hr>";
		//Sprint 3
		document.getElementById("Sprint").innerHTML += "<div><a href = 'includes/Sprint/Sprint3.pdf' target = '_blank'> Sprint 3</div>";
		document.getElementById("Sprint").innerHTML += "<hr>";		
		//Sprint 4
		document.getElementById("Sprint").innerHTML += "<div><a href = 'includes/Sprint/Sprint4.pdf' target = '_blank'> Sprint 4</div>";
		document.getElementById("Sprint").innerHTML += "<hr>";		
		//Sprint 5
		document.getElementById("Sprint").innerHTML += "<div><a href = 'includes/Sprint/Sprint5.pdf' target = '_blank'> Sprint 5 </div>";
		document.getElementById("Sprint").innerHTML += "<hr>";		
		//Sprint 6
		document.getElementById("Sprint").innerHTML += "<div><a href = 'includes/Sprint/Sprint6.pdf' target = '_blank'> Sprint 6</div>";
		document.getElementById("Sprint").innerHTML += "<hr>";		
		//Bottom of Sprint Section
		document.getElementById("Sprint").innerHTML += "<div><a href = 'includes/Sprint/Final_sprint.pdf' target = '_blank'>Finished Project</div>";
		document.getElementById("Sprint").innerHTML += "<hr>";			
		
		// document.getElementById("Sprint").innerHTML += "<hr style='height:2px;border-width:0;color:gray;background-color:gray'>";
		
		
		//Minutes Section
		document.getElementById("Minutes").innerHTML = "<h1>Meetings Minutes</h1>";
		
		//Minutes Sprint 1
		document.getElementById("Minutes").innerHTML += "<h3>Sprint 1</h3>";
		//Minutes 1
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting1.pdf' target = '_blank'> Meeting Minutes 1</div>";
		//Minutes 2
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting2.pdf' target = '_blank'> Meeting Minutes 2</div>";
		document.getElementById("Minutes").innerHTML += "<hr>";
		
		//Minutes Sprint 2
		document.getElementById("Minutes").innerHTML += "<h3>Sprint 2</h3>";
		//Minutes 3
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting3.pdf' target = '_blank'> Meeting Minutes 3</div>";
		//Minutes 4
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting4.pdf' target = '_blank'> Meeting Minutes 4</div>";
		document.getElementById("Minutes").innerHTML += "<hr>";
		
		//Minutes Sprint 3
		document.getElementById("Minutes").innerHTML += "<h3>Sprint 3</h3>";
		//Minutes 5
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting5.pdf' target = '_blank'> Meeting Minutes 5</div>";
		//Minutes 6
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting6.pdf' target = '_blank'> Meeting Minutes 6</div>";
		document.getElementById("Minutes").innerHTML += "<hr>";
		
		//Minutes Sprint 4
		document.getElementById("Minutes").innerHTML += "<h3>Sprint 4</h3>";
		//Minutes 7
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting7.pdf' target = '_blank'> Meeting Minutes 7</div>";
		//Minutes 8
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting8.pdf' target = '_blank'> Meeting Minutes 8</div>";
		document.getElementById("Minutes").innerHTML += "<hr>";
		
		//Minutes Sprint 5
		document.getElementById("Minutes").innerHTML += "<h3>Sprint 5</h3>";
		//Minutes 9
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting9.pdf' target = '_blank'> Meeting Minutes 9</div>";
		//Minutes 10
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting10.pdf' target = '_blank'> Meeting Minutes 10</div>";
		document.getElementById("Minutes").innerHTML += "<hr>";
		
		//Minutes Sprint 6
		document.getElementById("Minutes").innerHTML += "<h3>Sprint 6</h3>";
		//Minutes 11
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting11.pdf' target = '_blank'> Meeting Minutes 11</div>";
		//Minutes 12
		document.getElementById("Minutes").innerHTML += "<div><a href = 'includes/Minutes/Meeting12.pdf' target = '_blank'> Meeting Minutes 12</div>";
		
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
		