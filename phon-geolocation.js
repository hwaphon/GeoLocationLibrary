/*
* @Author: hwaphon
* @Date:   2016-12-22 15:40:52
* @Last Modified by:   hwaphon
* @Last Modified time: 2016-12-22 19:49:49
*/


 (function() {

 	var options = {
 		enableHighAccuracy: false,
 		timeout: Infinity,
 		maximumAge: 0
 	};

 	if (!window.phon) {
		window["phon"] = {};
	}
	function addFunction(name, handler) {
		window["phon"][name] = handler;
	}

	function isSupport() {
		if (navigator.geolocation) {
			return true;
		}
		return false;
	}
	addFunction("isSupport", isSupport);

	function enableHighAccuracy(accuracy) {
		options.enableHighAccuracy = accuracy;
	}
	addFunction("enableHighAccuracy", enableHighAccuracy);

	function setTimeout(timeout) {
		if (typeof timeout == "number") {
			options.timeout = timeout;
		}
	}
	addFunction("setTimeout", setTimeout);

	function setMaximumAge(age) {
		if (typeof age == "number") {
			options.maximumAge = age;
		}
	}
	addFunction("setMaximumAge", setMaximumAge);

	function errorHandler(error) {
		var errorType = {
			0: "Unkown error",
			1: "Permission denied by user",
			2: "Position is not avaliable",
			3: "Request timed out"
		};

		var errorMessage = errorType[error.code];
		console.error(errorMessage);
	}


	function getLocation(successHandler) {
		if (isSupport()) {
			navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);
		}
	}
	addFunction("getLocation", getLocation);

	function getLatitude(handler) {
		getLocation(function(position) {
			handler(position.coords.latitude);
		});
	}
	addFunction("getLatitude", getLatitude);

	function getLongitude(handler) {
		getLocation(function(position) {
			handler(position.coords.longitude);
		});
	}
	addFunction("getLongitude", getLongitude);

	function showGoogleMap(element) {

		getLocation(function(position) {

			var googleLatAndLong = new google.maps.LatLng(position.coords.latitude,
				position.coords.longitude);

			var mapOptions = {
				zoom: 15,
				center: googleLatAndLong,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(element, mapOptions);
		});
	}
	addFunction("showGoogleMap", showGoogleMap);
})();
