// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter')

.factory('ReturnTime', function(){
    var d = new Date();
	  var hours = d.getHours();
	  var min = d.getMinutes();
	  var hourMorning = localStorage.getItem("HourMorning");
	  var hourNight = localStorage.getItem("HourNight");
	  var minMorning = localStorage.getItem("MinMorning");
	  var minNight = localStorage.getItem("MinNight");
	  var whichTime = true;
	  var HourArr = new Array();
    var thisHour;
    var thisMin;
    var globalMin;
    var globalHour;


    var minFix = function(min){
      if(min < 10){
        min = "0"+min;
      }

      return min;
    };

    var negativeTime = function(){
      var savetime;
      if(thisMin < 0){
        savetime = thisMin;
        thisMin = 60 + savetime;
        thisHour--;
      }

      if(thisHour < -1){
        savetime = thisHour;
        thisHour = 24 + thisHour;
      }
    };


	 return{
		 getHour : function(){
			 var time;

			 if(hourMorning > hours || hourNight <= hours){
					 	 time =  hourMorning+":"+minMorning;
						 whichTime = true;
			 } else{
				 time = hourNight+":"+minNight;
				 whichTime = false;
			 }

			 return time;
		 },

     calculateRemaining : function(){
        if(whichTime){
          thisHour = hourMorning - hours;
          thisMin = minMorning - min;
          globalHour = hourMorning;
          globalMin = minMorning;
        } else {
          thisHour = hourNight - hours;
          thisMin = minNight - min;
          globalHour = hourNight;
          globalMin = minNight;
        }

        // detect if the min is inferior to 0

        negativeTime();
        thisMin = minFix(thisMin);
        thisHour = minFix(thisHour);

        return thisHour.toString()+"H"+thisMin.toString();
     },
     getPerc : function(){
       var pers = ((parseInt(globalHour) * 60)+parseInt(globalMin));
       var remain = ((parseInt(thisHour) * 60)+parseInt(thisMin));
       var percentage = ((pers - remain) * 100) / pers;

       if(percentage < 0){
         percentage = 1;
       }

       return percentage;
     }
	 }
})

.factory('SetFac', function(){
  var dataArray = new Array();
  return{
    getData : function(){

      var data = JSON.parse(localStorage.getItem("UserValue"));
      return data;
    },

    getMiscData : function(){
      var thisdata = JSON.parse(localStorage.getItem('MiscValue'));
      return thisdata;
    }
  }
})
