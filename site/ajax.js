//Event Handline
document.addEventListener("DOMContentLoaded",
	function (event) {
		// Unbostrusive event binding
		document.querySelector("button").addEventListener("click", function() {
			var self = this;
			var name = "";
			// Call server to get the name
			$ajaxUtils.sendGetRequest("name.txt", 
				function(request) {
					self.name = request.responseText;
				});
			document.querySelector("#control").innerHTML = "<h2>Hello " + self.name + "!";
		});
	}

);