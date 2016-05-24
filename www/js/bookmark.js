// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter')

.factory('BookFc', function($state, $http, getRestaurant){

	var fakeRestaurantData = new Array();
	var res = new Array();
	var oldArr;

	var detail;

	 return{
		 getFavorite : function(){
			 res = JSON.parse(localStorage.getItem('favorite'));

			 if(res){
				 for(var i = 0; i < res.length; i++){
					 fakeRestaurantData.push({
						 "restaurantName" : res[i].restaurantName,
						 "rate": res[i].rate,
						 "price":res[i].price,
						 "img":res[i].img,
						 "comment":res[i].comment,
						 "address":res[i].address,
						 "Region":res[i].Region,
						 "P_Code":res[i].P_Code,
						 "Meal_type":res[i].Meal_type,
						 "Location":res[i].Location,
						 "position": 0
					 });
				 }
			 }

			 return res;
		 },
		 setDetail : function(data){
			 detail = data;
		 },
		 getDetail : function(){
			 return detail;
		 },
		 registerFavorite : function (data) {

			 res = JSON.parse(localStorage.getItem('favorite'));
			 // check if the data already exist
			 var toPush = false;
			 var continueLoop = true;

			 if(res != null && res.length > 0){
				 var i = 0;

				 while(continueLoop){
						if(res[i].restaurantName != data.restaurantName && res[i].address != data.address){
							toPush = true;
						} else {
							toPush = false;
							continueLoop = false;
						}

						if(i < res.length - 1){
							i++;
						} else{
							continueLoop = false;
						}
				 }
			 } else{
				 res = new Array();
				 toPush = true;
			 }

			 if(toPush){

				 res.push({
					 "restaurantName" : data.restaurantName,
					 "rate": data.rate,
					 "price":data.price,
					 "img":data.img,
					 "comment":data.comment,
					 "address":data.address,
					 "Region":data.Region,
					 "P_Code":data.P_Code,
					 "Meal_type":data.Meal_type,
					 "Location":data.Location,
				 });
				 localStorage.setItem('favorite',JSON.stringify(res));
			 }
		 },
		 deleteItem : function(index){
			 console.log(res);
			 res.splice(index, 1);
			 localStorage.setItem('favorite',JSON.stringify(res));
		 }
	 }
})

.factory('getRestaurant', function($http){

	// put it in the database after...

	var fakeRestaurantData = new Array();

	fakeRestaurantData = [{"restaurantName" : "Shinagora", "Location" : "La défense", "P_Code" : "92000", "Meal_type":"Chinese","Region":"East asia", "img":"dummy.jpg","address":"20 rue du berger","comment":"Awesome restaurant","price":"10$ - $30","rate":"4"},{"restaurantName" : "Chez Bong", "Location" : "Paris", "P_Code" : "75015", "Meal_type":"Korean","Region":"East asia", "img":"dummy.jpg","address":"20 rue du bergerac","comment":"Awesome restaurant","price":"10$ - $30","rate":"5"},{"restaurantName" : "Big Fernand", "Location" : "Paris", "P_Code" : "75000", "Meal_type":"Western","Region":"West Europe", "img":"dummy.jpg","address":"20 rue du centaure","comment":"Awesome restaurant","price":"20$ - $50","rate":"4"},{"restaurantName" : "Peking duck", "Location" : "Beijing", "P_Code" : "20319", "Meal_type":"Chinese","Region":"East asia", "img":"dummy.jpg","address":"20 rue du blob","comment":"Awesome restaurant","price":"10$ - $40","rate":"5"}];

	return{
		restName : function(){
			var copyArray;

			if(fakeRestaurantData.length > 0){
				copyArray  = fakeRestaurantData.slice(1);
			} else{
				copyArray = false;
			}

			return copyArray;
		},
		favoName : function(){
			return fakeRestaurantData[0];
		},
		returnFavorite : function(){
			return fakeRestaurantData;
		}
	}
})
