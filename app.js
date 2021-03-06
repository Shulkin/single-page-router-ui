var routerApp = angular.module("routerApp", ["ui.router"]);

routerApp.config(function($stateProvider, $urlRouterProvider) {
  // all routes will lead to state /home
  $urlRouterProvider.otherwise("/home");
  // define states and corresponding views for ui-view
  $stateProvider
    // state with greetings info
    .state("home", {
      url: "/home",
      templateUrl: "views/home.html"
    })
    // nested list with custom controller
    .state("home.list", {
      url: "/list",
      templateUrl: "views/home-list.html",
      controller: function($scope) {
        $scope.cats = ["Pussy", "Nya", "Kitty"];
      }
    })
    // nested view with random string data
    .state("home.paragraph", {
      url: "/paragraph",
      // if data in view is very simple, like one string, we can use template,
      // instead of templateUrl and just write data here
      template: "Test string"
    })
    .state("about", {
      url: "/about",
      views: {
        // the main template will be placed here (relatively named)
        "": { templateUrl: "views/about.html"},
        // the child view (absolutely named)
        "columnOne@about": { template: "I am a column one!" },
        // this child will have more complex template in separate file,
        // and a separate controller
        "columnTwo@about": {
          templateUrl: "table-data.html",
          controller: "scotchController"
        }
      }
    })
}); // closes routerAll.config()

routerApp.controller("scotchController", function($scope) {
  $scope.message = "Some string";
  $scope.scotches = [
    {
      name: "Macallan 12",
      price: 50
    },
    {
      name: "Chivas Regal Royal Salute",
      price: 10000
    },
    {
      name: "Glenfiddich 1937",
      price: 20000
    }
  ];
});
