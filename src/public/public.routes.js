(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    // I add this - begin
    .state('public.myinfo', {
      url: '/register/myinfo',
      templateUrl: 'src/public/registered/my-info.html',
      controller: 'MyInfoController',
      controllerAs: 'myInfCtrl',
      resolve: {
        favoriteItem: ['UserService', function (UserService) {
          if ((UserService.userInfo.fave===undefined)||(UserService.userInfo.fave==="")){
            var favoriteItem;
            favoriteItem.short_name="";
            favoriteItem.description="";
            favoriteItem.name="";
            return favoriteItem;
          }else{
            return UserService.getMenuItem(UserService.userInfo.fave);
          }
        }]
      }
    })
    .state('public.signup', {
      url: '/register/signup',
      templateUrl: 'src/public/registered/signup.html',
      controller: 'SignUpController',
      controllerAs: 'signUpCtrl'
    })
    // I add this - end
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
})();
