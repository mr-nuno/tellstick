/*
* Tellstick view that handles all logic
*/
var TellstickView = new function(){
	var self = this;
	
	this.send = function(id, action){
		$.ajax({
		  type: "PUT",
		  url: "/device/" + id + "/" + action,
  		success: function(){
  			console.log("success");
  		},
  		error: function(){
  			console.log("error");
  		}
  	});
	};

	this.turnOn = function(id){
		self.send(id, "on");
	};

	this.turnOff = function(id){
		self.send(id, "off");
	};

	//events
	$("#turn-on-button").on("click", function(){
		self.turnOn("6,7,8");
	});

	$("#turn-off-button").on("click", function(){
		self.turnOff("6,7,8");
	});

};