// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter')

.factory('PreferenceSetup', function($state){
	var getTime = ["hoursM","HoursN","MinMor","MinNigh"];

	 return{
		returnTime : function(){
			getTime[0] = localStorage.getItem("HourMorning");
			getTime[1] = localStorage.getItem("HourNight");
			getTime[2] = localStorage.getItem("MinMorning");
			getTime[3] = localStorage.getItem("MinNight");

			return getTime;
		},

		analyzeSwitch : function(prefValue, add, isSetting){
			var saveData;

			for(var i in prefValue){

						if(prefValue[i]){
									saveData = true;
						}
						else if(!isSetting){
									if(add == 1 && i == "third_taste" || add == 2  && i == "fourth_taste"){
											 saveData = false;
									}
									else if(i != "third_taste" && i != "fourth_taste" && i != "vegan"){
												saveData = false;
												break;
									}
						}
			}

			if(saveData){
						localStorage.setItem("UserValue", JSON.stringify(prefValue));
						localStorage.setItem("FirstStatePass", true);
            $state.go('Home');
			}
		},

		setSetting : function(miscValue) {
			localStorage.setItem("MiscValue", JSON.stringify(miscValue));
		}
	 }
})

.factory('changeStyle', function(){
	return{
		getColor : function(){
			var color = new Array();
			var colorObj = JSON.parse(localStorage.getItem("MiscValue"));

			if(colorObj.misc){
				color[0] = "#3D3D3D";
				color[1] = "#4a4a4a";
				color[2] = "#222222";
				color[3] = "#F8F5EF";
			} else{
				if(colorObj.currentColor){
					color[0] = colorObj.currentColor;
					color[1] = colorObj.secondColor;
					color[2] = "#F8F5EF";
					color[3] = "#222222";
				} else{
					color[0] = "#ffc146";
					color[1] = "#ffd072";
					color[2] = "#F8F5EF";
					color[3] = "#222222";
				}
			}

			return color;
		},
		setColor : function(obj){
			localStorage.setItem("MiscValue", JSON.stringify(obj));
		}
	}
})
