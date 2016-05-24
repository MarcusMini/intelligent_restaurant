angular.module('starter')

.factory('histData', function(){


  // only for debugging


  var restName = [{"restaurantName" : "Shinagora", "Location" : "La défense", "P_Code" : "92000", "Meal_type":"Chinese","Region":"East asia", "img":"dummy.png","address":"20 rue du berger","comment":"Awesome restaurant","price":"10$ - $30","rate":"4","like":false},{"restaurantName" : "Chez Bong", "Location" : "Paris", "P_Code" : "75015", "Meal_type":"Korean","Region":"East asia", "img":"dummy.png","address":"20 rue du bergerac","comment":"Awesome restaurant","price":"10$ - $30","rate":"5","like":false},{"restaurantName" : "Big Fernand", "Location" : "Paris", "P_Code" : "75000", "Meal_type":"Western","Region":"West Europe", "img":"dummy.png","address":"20 rue du lala","comment":"Awesome restaurant","price":"20$ - $50","rate":"4","like":true},{"restaurantName" : "Peking duck", "Location" : "Beijing", "P_Code" : "20319", "Meal_type":"Chinese","Region":"East asia", "img":"dummy.png","address":"20 rue du lololo","comment":"Awesome restaurant","price":"10$ - $40","rate":"5","like":"true"},{"restaurantName" : "Khao", "Location" : "Paris", "P_Code" : "75013", "Meal_type":"Laotian","Region":"South East asia", "img":"dummy.png","address":"20 rue du pqpqpq","comment":"Awesome restaurant","price":"10$ - $40","rate":"5","like":true}];

  var hs = [[{
    "dishName" : "Bulgogi",
    "dishImage": "bulgogi.jpg",
    "Calorie" : "100 Kcal",
    "Price": "12.50€",
    "type" : "dish"
  },{
    "dishName" : "Gamjajorim",
    "dishImage": "gamjajorim.jpg",
    "Calorie" : "60 Kcal",
    "Price": "4.20€",
    "type" : "entree"
  },{
    "dishName" : "Hobaktteok",
    "dishImage": "tteokgalbi.jpg",
    "Calorie" : "70 Kcal",
    "Price": "8.50€",
    "type" : "dessert"
  }],[{
    "dishName" : "Bulgogi",
    "dishImage": "bulgogi.jpg",
    "Calorie" : "100 Kcal",
    "Price": "12.50€",
    "type" : "dish"
  },{
    "dishName" : "Heukimjajuk",
    "dishImage": "heukimjajuk.jpg",
    "Calorie" : "30 Kcal",
    "Price": "5.20€",
    "type" : "entree"
  },{
    "dishName" : "Chestnut cookie",
    "dishImage": "chestnut_cookie.jpg",
    "Calorie" : "60 Kcal",
    "Price": "8.50€",
    "type" : "dessert"
  }]];


  return{
    getRes : function(){
      return restName;
    },
    getOldMenu : function(){
      return hs;
    },
    setLike : function(index, likeValue){
      restName[index].like = likeValue;
    }
  }
})
