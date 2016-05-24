angular.module('starter')

.factory('restFc', function($state){
  var restaurantMenu = [{
    "dishName" : "Bulgogi",
    "dishImage": "bulgogi.jpg",
    "Calorie" : "100 Kcal",
    "Price": "12.50€",
    "type" : "dish"
  },{
    "dishName" : "Dwaejibulgogi",
    "dishImage": "dwaejibulgogi.jpg",
    "Calorie" : "120 Kcal",
    "Price": "12.50€",
    "type" : "dish"
  },{
    "dishName" : "Tteokgalbi",
    "dishImage": "tteokgalbi.jpg",
    "Calorie" : "130 Kcal",
    "Price": "8.50€",
    "type" : "dish",
  },{
    "dishName" : "Dak Galbi",
    "dishImage": "dak_galbi.jpg",
    "Calorie" : "135 Kcal",
    "Price": "12.50€",
    "type" : "dish",
  },{
    "dishName" : "Bibimbap",
    "dishImage": "bibimbap.jpg",
    "Calorie" : "90 Kcal",
    "Price": "10.50€",
    "type" : "dish"
  },{
    "dishName" : "Jjamppong",
    "dishImage": "jjamppong.jpg",
    "Calorie" : "90 Kcal",
    "Price": "10.50€",
    "type" : "dish"
  },{
    "dishName" : "Hobaktteok",
    "dishImage": "tteokgalbi.jpg",
    "Calorie" : "70 Kcal",
    "Price": "8.50€",
    "type" : "dessert"
  },{
    "dishName" : "Chestnut cookie",
    "dishImage": "chestnut_cookie.jpg",
    "Calorie" : "60 Kcal",
    "Price": "8.50€",
    "type" : "dessert"
  },{
    "dishName" : "Bukkumi",
    "dishImage": "bukkumi.jpg",
    "Calorie" : "130 Kcal",
    "Price": "8.50€",
    "type" : "dessert"
  },{
    "dishName" : "Gyoza",
    "dishImage": "gyoza.jpg",
    "Calorie" : "70 Kcal",
    "Price": "8.50€",
    "type" : "entree"
  },{
    "dishName" : "Heukimjajuk",
    "dishImage": "heukimjajuk.jpg",
    "Calorie" : "30 Kcal",
    "Price": "5.20€",
    "type" : "entree"
  },{
    "dishName" : "Gamjajorim",
    "dishImage": "gamjajorim.jpg",
    "Calorie" : "60 Kcal",
    "Price": "4.20€",
    "type" : "entree"
  },{
    "dishName" : "Gamjajorim",
    "dishImage": "gamjajorim.jpg",
    "Calorie" : "60 Kcal",
    "Price": "4.20€",
    "type" : "entree"
  }];

  return{
    getDish : function(){
      return restaurantMenu;
    }
  }
})
