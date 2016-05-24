// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform, $state, $location) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
     if(localStorage.getItem("FirstStatePass")){
       $state.go("Home");
     }
     else{
        $state.go('Show');
     }

     if(localStorage.getItem("HourMorning") == undefined){
         localStorage.setItem("HourMorning", 11);
         localStorage.setItem("MinMorning", 20);
         localStorage.setItem("HourNight", 20);
         localStorage.setItem("MinNight",15);
     }



     /*


     --------------------- ONLY FOR DEBUGGING THE APP --------------------------

     ---------------------------------------------------------------------------

     localStorage.setItem("favorite","");

     */

  });
})

.config(function($stateProvider, $urlRouterProvider,  $ionicConfigProvider){

  $stateProvider

  .state('Home',{
    url: '/home',
    templateUrl: "templates/home.html",
    controller:'homeSCtrl'
  })

  .state('Bookmark',{
    url: '/bookmark',
    templateUrl: "templates/bookmark.html",
    controller: 'bookCtrl'
  })

  .state('RestDetail',{
    url: '/restDetail',
    templateUrl: "templates/restaurant_detail.html",
    controller: 'restCtrl'
  })

  .state('Rest',{
    url: '/rest',
    templateUrl: "templates/restaurant.html",
    controller: 'restBaseCtrl'
  })

  .state('Pref',{
    url: '/preference',
    templateUrl: "templates/preference.html",
    controller:"PrefCtrl"
  })

  .state('Show',{
    url: '/show',
    templateUrl: "templates/showscreen.html",
    controller:'starterCtrl'
  })

  .state('Set',{
    url: '/settings',
    templateUrl: "templates/settings.html",
    controller: 'settingCtrl'
  })

  .state('Check',{
      url: '/checking',
      templateUrl: "templates/checking.html",
      controller: 'checCtrl'
  })

  .state('History',{
      url: '/history',
      templateUrl: "templates/history.html",
      controller: 'hisCtrl'
  })

  $urlRouterProvider.otherwise("home");
});
