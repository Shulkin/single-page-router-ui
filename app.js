var routerApp = anguler.module("routerApp", ["ui.router"]);

routerApp.config(function($stateProvider, $urlRouterProvider) {
  // all routes will lead to state /home
  $urlRouterProvider.otherwise("/home");
  // define states and corresponding views for ui-view
  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "views/home.html"
    })
    .state("about", {
    })
})
