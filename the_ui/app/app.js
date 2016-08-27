var app = angular.module('app',['ngRoute']);
 
app.config(function($routeProvider, $locationProvider)
{
   $locationProvider.html5Mode(true);
 
   $routeProvider
 
   .when('/', {
      templateUrl : '/hello-world-angular/app/views/home.html',
      controller : 'HomeCtrl',
   })
 
   .when('/sobre', {
      templateUrl : '/hello-world-angular/app/views/sobre.html',
      controller  : 'SobreCtrl',
   })
 
   .when('/contato', {
      templateUrl : 'app/views/contato.html',
      controller  : 'ContatoCtrl',
   })
 
   .otherwise ({ redirectTo: '/' });
});