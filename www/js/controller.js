// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter')

.controller('starterCtrl', function($scope, $state){
     $scope.savePage = function(){
       $state.go('Pref');
     };
})

.controller('PrefCtrl', function($scope, $state, $ionicPopover, $rootScope, PreferenceSetup){
      $rootScope.id = 1;
      $scope.add = 0;

      $scope.value = {
           vegan : false,
           first_taste : "",
           second_taste : "",
           type_of_meal : "",
           third_taste : "",
           fourth_taste : "",
           luminosity : false,
           location : false,
           weather: false
      };

      $ionicPopover.fromTemplateUrl('templates/popup-hover.html', {
            scope: $scope
            }).then(function(popover) {
            $scope.popover = popover;
       });

       $scope.setValue = function(){
          $rootScope.time = PreferenceSetup.returnTime();
       };

      $scope.setHour = function(id, $event){
                $rootScope.id = id;
                $rootScope.getId();
                $scope.popover.show($event);
      };

      $scope.setPref = function(){
            PreferenceSetup.analyzeSwitch($scope.value, $scope.add, false);
      };

      $scope.addInput = function(){
          $scope.add++;
      };

      $scope.$on('popover.hidden', function() {
            $rootScope.saveItem();
            $scope.setValue();
      });

      $scope.$on("$ionicView.loaded", function(){
             $scope.setValue();
      });
})

.controller("PopUpCtrl",function($scope, $rootScope, PreferenceSetup){

      $scope.setData;
      $scope.UserInput = true;

      $scope.timeSetting = {
        min:  0,
        max:  0,
        hour: 0,
        minutes: 0
      };

      $rootScope.getId = function(){
           if($rootScope.id == 1){
               $scope.timeSetting.hour = $rootScope.time[0];
               $scope.timeSetting.minutes = $rootScope.time[2];
           }
           else{
               $scope.timeSetting.hour = $rootScope.time[1];
               $scope.timeSetting.minutes = $rootScope.time[3];
           }
           $scope.setData = $scope.timeSetting.hour;
           $scope.detectInput(true);
      };

      $scope.detectInput = function(userInput){
           $scope.UserInput = userInput;
            if(userInput){
                 $scope.setData = $scope.timeSetting.hour;
                 $scope.timeSetting.min = 0;
                 $scope.timeSetting.max = 23;
            }
            else{
                 $scope.setData = $scope.timeSetting.minutes;
                 $scope.timeSetting.min = 0;
                 $scope.timeSetting.max = 59;
            }
      };

      $scope.Up = function(){
         if($scope.setData < $scope.timeSetting.max){
             $scope.setData++;
             $scope.setData = $scope.AddZero($scope.setData);
         }
      };

      $scope.Down = function(){
         if($scope.setData > 0){
             $scope.setData--;
             $scope.setData = $scope.AddZero($scope.setData);
         }
      };

      $scope.AddZero = function(timeValue){
            if(timeValue < 10){
                  timeValue = "0"+timeValue;
            }
            if($scope.UserInput){
                  $scope.timeSetting.hour = timeValue;
            } else{
                  $scope.timeSetting.minutes = timeValue;
            }
            return timeValue;
      }

      $rootScope.saveItem = function(){
           if($rootScope.id == 1){
               localStorage.setItem("HourMorning", $scope.timeSetting.hour);
               localStorage.setItem("MinMorning", $scope.timeSetting.minutes);
           }
           else{
               localStorage.setItem("HourNight", $scope.timeSetting.hour);
               localStorage.setItem("MinNight", $scope.timeSetting.minutes);
           }
      };
})

.controller('homeSCtrl',function($scope,ReturnTime,$rootScope,changeStyle, getRestaurant, BookFc){

      $scope.getRemain = function(){
        $scope.thistime = ReturnTime.calculateRemaining();
      };

      $scope.getPercent = function(){
        $scope.percent = ReturnTime.getPerc()+'%';
      };

      $scope.$on("$ionicView.loaded", function(){
        $scope.Time =  ReturnTime.getHour();
        $scope.getRemain();
        $scope.getPercent();
        $rootScope.color = changeStyle.getColor();
      });

      $scope.$on("$ionicView.beforeEnter", function(){
        $scope.history = getRestaurant.restName();
      });

      $scope.setDetail = function(data){
        BookFc.setDetail(data);
      }
})

.controller('bookCtrl', function($scope, BookFc){

  $scope.go = function(data){
    BookFc.setDetail(data);
  }

  $scope.deleteFav = function(index){
    BookFc.deleteItem(index);
  }

  $scope.remove = function(data){
    data.position = event.gesture.deltaX+"px";
  }

  $scope.reset = function(data){
    data.position = "0px";
  }

  $scope.$on("$ionicView.beforeEnter", function(){
    $scope.favorite = BookFc.getFavorite();
  });
})

.controller('restCtrl', function($scope, BookFc, restFc, $ionicHistory, $state){
  $scope.url = "Home";
  $scope.$on("$ionicView.beforeEnter", function(){
    $scope.myData = BookFc.getDetail();
    $scope.getDish = restFc.getDish();
  });

  $scope.$on("$ionicView.afterEnter", function(){
    $scope.whereToBack();
  })

//  $scope.url = "Home";
  $scope.whereToBack = function(){

    var hs = $ionicHistory.backView();
    if(hs.stateName == "Home"){
      $scope.url = "#/home";
    }
    else if(hs.stateName == "Bookmark"){
      $scope.url = "#/bookmark";
    }
    else{
      $scope.url = "#/rest";
    }
  }
})

.controller('settingCtrl', function($scope, SetFac, PreferenceSetup, changeStyle, $rootScope, $ionicPopover){

  $ionicPopover.fromTemplateUrl('templates/colorPicker.html', {
        scope: $scope
        }).then(function(popover) {
        $scope.popover = popover;
   });

  $scope.settingValue = {
    vegan : false,
    first_taste : "",
    second_taste : "",
    type_of_meal : "",
    third_taste : "",
    fourth_taste : "",
    luminosity : false,
    location : false,
    weather: false
  };

  $scope.closeSettingValue = {
    name : '',
    firstname : '',
    male : '',
    female : '',
    misc : false,
    currentColor : '',
    secondColor : ''
  };

  $scope.getInformation = function(){
    var data = SetFac.getData();
    var miscData = SetFac.getMiscData();

    for(var i in data){
        if(data[i]){
          $scope.settingValue[i] = data[i];
        } else {
          $scope.settingValue[i] = "Not defined";
        }
    }

    for(var i in miscData){
      $scope.closeSettingValue[i] = miscData[i];
    }
  };

  $rootScope.getColor = function(){
    $rootScope.color = changeStyle.getColor();
  };

  $scope.saveMisc = function(){
    PreferenceSetup.setSetting($scope.closeSettingValue);
  };

  $scope.colorPicker = function(){
    $scope.popover.show();
  };

  $scope.getColorChoosen = function(colorID, secColorID){
    $scope.closeSettingValue.currentColor = colorID;
    $scope.closeSettingValue.secondColor = secColorID;
    changeStyle.setColor($scope.closeSettingValue);
    $scope.getColor();
  };

  $scope.$on("$ionicView.beforeEnter", function(){
    $scope.getInformation();
    $scope.getColor();
  });

  $scope.$on("$ionicView.beforeLeave", function(){
    PreferenceSetup.analyzeSwitch($scope.settingValue, 0, true);
    PreferenceSetup.setSetting($scope.closeSettingValue);
  });
})

.controller('checCtrl', function($scope, $state){
  $scope.$on("$ionicView.beforeEnter", function(){
    setTimeout(function(){
      $state.go('Rest');
    }, 5000);
  });
})

.controller('hisCtrl', function($scope, histData, BookFc){
  $scope.$on("$ionicView.beforeEnter", function(){
    $scope.hS = histData.getRes();
    $scope.myDishes = histData.getOldMenu();
  })

  $scope.$on("$ionicView.afterEnter", function(){
    $scope.addEl(0);
  })

  $scope.addEl = function(index){
    $scope.myIndex = index;
  };

  $scope.onDoubleTap = function(data, index){
    BookFc.registerFavorite(data);
    if(data.like)
      data.like = false;
    else
      data.like = true;

    histData.setLike(index, data.like);
  }
})

.controller('restBaseCtrl', function($scope, BookFc, $state, getRestaurant){
  $scope.setDetail = function(data){
    BookFc.setDetail(data);
    $state.go('RestDetail');
  };

  $scope.$on("$ionicView.beforeEnter", function(){
    $scope.getRes = getRestaurant.restName();
    $scope.getFav = getRestaurant.favoName();
  });
})

.controller('ColorCtrl', function($scope){

})
