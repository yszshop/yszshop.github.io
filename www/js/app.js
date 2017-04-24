// 入口文件
angular.module('starter', ['ionic','route','global','config','ionicLazyLoad','indexdb','commonJs','ngCordova',])

.run(function($ionicPlatform,$location,$ionicHistory,$cordovaToast,$rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }




    //给android的物理返回按钮添加点击事件
    $ionicPlatform.registerBackButtonAction(function(e){
      if($rootScope.backButtonPressedOnceToExit){
        ionic.Platform.exitApp();
      }
      else {
        if($location.path()=="/tab/home"||$location.path()=="/tab/category"||$location.path()=="/tab/account"||$location.path()=="/tab/cart"){
          $rootScope.backButtonPressedOnceToExit=true;
          $cordovaToast.showShortBottom('再点一次退出！');
          setTimeout(function(){
            $rootScope.backButtonPressedOnceToExit=false;
          },2000)
        }
        else {
          $ionicHistory.goBack();
        }
      }
      e.preventDefault();
      return false
    },110);
  });

})
