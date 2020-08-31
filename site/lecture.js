//Event Handling happens before any images or CSS happen.
document.addEventListener("DOMContentLoaded",
	function (event) {
		//This function accesse the user's input and stores it and prints what the user wrote
		function sayHello(event) {
			this.textContent = "Said it !";
			//getElementById.value accesses the user's input
			var Name=document.getElementById("name").value;
			var message = "<h2>Hello " + Name + " !</h2>";
			document.getElementById("content").textContent = message;
			if (Name === "Cesar"){
				var message = "<h2>Hello " + "Slave" + " !</h2>";
				//Necessary for message to show up in the website 
				document.getElementById("content").textContent = message;
			}
			if (Name==="Parisa"){
				var message = "<h2>Hello Sue's master " + " !</h2>";
				document.getElementById("content").textContent = message;
			}
			//you can change the size of heading with innerHTML
			document.getElementById("content").innerHTML = message;

			if(Name==="Student"){
				var title = document.querySelector("#title").textContent;
				title += "& Lovin it !";
				//more flexible than getElementById
				document.querySelector("#title").textContent = title;
			}
		}
	
		//Unobstrusive event binding, HTML doesn't have to know about this code. 
		//It binds the button to click event and to display the message 
		document.querySelector("button").addEventListener("click", sayHello);
		// if the user hits shift and clicks hence an event is trigerred and it's printing 
		// x and y coordinates. 
		document.querySelector("body").addEventListener("mouseover",
			function(event) {
				if (event.shiftKey === true) {
					console.log("x: " + event.clientX);
					console.log("y: " + event.clientY);
				}
				
			}

		);
	}
);
	