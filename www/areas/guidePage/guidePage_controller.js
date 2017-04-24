// 引导页功能的业务逻辑
angular.module('guidePage.controller', ['guidePage.service'])
  .controller('GuidePageCtrl', function($scope,GlobalVariable,$ionicActionSheet,$state) {

    //引导页slide初始化
    var guideSlide = new Swiper('#guideSlide', {
      pagination: '.swiper-pagination',
      onSlideChangeEnd: function(swiper){
        var index = guideSlide.activeIndex+1;
        if(index==2||index==3){
          var item = $("#tips-"+index);
          if(item.hasClass("hidden")){
            item.removeClass("hidden");
            item.addClass("guide-show");
          }
        }
      }
    });

    // 跳转到首页方法
    $scope.func_goHome=function(){
      localStorage["isFirst"]=true;
      $state.go('tab.home');
    }
























    // 点击按钮触发，或一些其他的触发条件
    //$scope.show = function() {
    //
    //  // 显示操作表
    //  $ionicActionSheet.show({
    //    buttons: [
    //      { text: '相机' },
    //      { text: '相册' },
    //    ],
    //    //destructiveText: 'Delete',
    //    titleText: '选择图片',
    //    cancelText: '取消',
    //    buttonClicked: function(index) {
    //
    //      switch (index){
    //        case 0:
    //          console.log(0);break;
    //        case 1:
    //          console.log(1);break;
    //
    //      }
    //      return true;
    //    }
    //  });
    //
    //};



    //$ionicModal.fromTemplateUrl('modal.html', {
    //  scope: $scope,
    //  animation: 'slide-in-up'
    //}).then(function(modal) {
    //  $scope.modal = modal;
    //});
    //$scope.openModal = function() {
    //  $scope.modal.show();
    //};
    //$scope.closeModal = function() {
    //  $scope.modal.hide();
    //};
    ////当我们用到模型时，清除它！
    //$scope.$on('$destroy', function() {
    //  $scope.modal.remove();
    //});
    //// 当隐藏的模型时执行动作
    //$scope.$on('modal.hide', function() {
    //  // 执行动作
    //});
    //// 当移动模型时执行动作
    //$scope.$on('modal.removed', function() {
    //  // 执行动作
    //});





    // 自动执行切换幻灯片的方法
    //setInterval(function(){
    //  $ionicSlideBoxDelegate.next();
    //},2000)
    // 幻灯片切换触发的事件
    //$scope.func_change=function(active){
    //  console.log(active);
    //}

  })
