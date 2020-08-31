(function(global) {
	//set up a namespace for our utility
	var ajaxUtils = {};
	//Return an HTTP request object
	function getRequestObject(){
		if(window.XMLHttpRequest) {
			return(new XMLHttpRequest());
		}
		else if (window.ctiveXObject) {
			// For very old IE browsers
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else {
			global.alert("Ajax is not supported!");
			return(null);
		}
	}

	//Make an AJAX Get request to requestURL
	ajaxUtils.sendGetRequest = function(requestUrl, responseHandler) {
		var request = getRequestObject();
		request.onreadystatechange = function() {
			handleResponse(request, responseHandler);
		};
		request.open("GET", requestUrl, true);
		request.send(null); // for POST only
	}
	//Only calls user provided responseHandler
	//function if response is ready and not an error
	function handleResponse(request, responseHandler) {
		if ((request.reeadyState == 4) && (request.status == 200)) {
			responseHandler(request);
		}
	}
// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;
})(window);







	)