// 商品列表页面
angular.module('goodsList.controller', ['goodsList.service'])
  .controller('GoodsListCtrl', function($scope,$stateParams,GoodsListFty,$ionicLoading,$ionicHistory) {

    // 列表数据数组
    $scope.obj_goodsListData=[];
    // 定义是否有更多数据加载
    $scope.pms_isMoreItemsAvailable=true;
    // 分页查询对象
    $scope.obj_pagingInfo = {
      amountMax: "",
      amountMin: "",
      billNum: "",
      createUser: "",
      dateFrom: "",
      dateTo: "",
      deptID: "",
      deptName: "",
      keyWord: "",
      loginName: "",
      billType: "",
      pageNum: 1,
      pageSize: 10,
      sortFlag: "0",
      sortType: "desc",
      typeNumber:""
    };

    // 视图事件
    $scope.$on('$ionicView.beforeEnter', function (e) {
      $scope.func_refreshGoodsList();
    });


    // 获取最新数据的代码
    $scope.func_refreshGoodsList=function(){
      // 每次刷新的时候让页面重置为1
      $scope.obj_pagingInfo.pageNum=1;
      // 获取分类页面传过来的分类参数
      $scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
      // 把分页信息对象变为了字符串
      var message=JSON.stringify($scope.obj_pagingInfo);

      var promise=GoodsListFty.refreshGoodsList(message);
      promise.then(
        function(data) {
          if(data!=null){
            $scope.obj_goodsListData = data;
            // 当我们刷新到新数据的时候我们让他默认可以有更多数据加载
            $scope.pms_isMoreItemsAvailable = true;
          }else {
            $scope.pms_isMoreItemsAvailable = false;
          }
        },
        function(reason){
          console.log(reason);
        }
      ).finally(function(){
        // 停止广播ion-refresher
        $scope.$broadcast('scroll.refreshComplete');
      })
    }


    // 获取更多数据
    $scope.func_loadMoreGoodsList=function(){

      $ionicLoading.show({
        template: '正在加载数据.....'
      });

      // 获取更多数据的时候每次页码加1
      $scope.obj_pagingInfo.pageNum= $scope.obj_pagingInfo.pageNum+1;
      // 获取分类页面传过来的分类参数
      $scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
      // 把分页信息对象变为了字符串
      var message=JSON.stringify($scope.obj_pagingInfo);
      console.log(message);
      var promise=GoodsListFty.loadMoreGoodsList(message);
      promise.then(
        function(data){
          if(data!=null){
            $.each(data,function(i,item){
              $scope.obj_goodsListData.push(item);
            });
          }else{
            $scope.pms_isMoreItemsAvailable=false;
          }
        },
        function(reason){
          console.log(reason);
        }
      ).finally(function(){
        // 停止加载更多事件
        $scope.$broadcast('scroll.infiniteScrollComplete');
        setTimeout(function(){
          $ionicLoading.hide();
        },2000)


      })
    }

    // 返回方法
    $scope.func_goBack=function(){
      $ionicHistory.goBack();
    }



  })
