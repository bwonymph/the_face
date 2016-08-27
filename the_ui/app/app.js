// var app = angular.module('app', ['ngRoute']);

// app.config(function ($routeProvider, $locationProvider) {

// 	// remove the # from url
// 	$locationProvider.html5Mode(true);

// 	$routeProvider
// 	// for the route '/' load home.html template and HomeController
// 	.when('/', {
// 		templateUrl: 'app/views/home.html',
// 		controller: 'HomeController'
// 	})

// 	// for the route '/sobre' load sobre.html template and SobreController
// 	.when('/sobre', {
// 		templateUrl: 'app/views/sobre.html',
// 		controller: 'SobreController'
// 	})

// 	//for the route '/contato' load contato.html template and ContatoController
// 	.when('/contato', {
// 		templateUrl: 'app/views/contato.html',
// 		contato: 'ContatoController'
// 	})

// 	// defult redirect to '/'
// 	// .otherwise({
// 	// 	redirectTo: '/'
// 	// });

// });


var app = angular.module('app',['ngRoute']);
 
app.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   $locationProvider.html5Mode(true);
 
   $routeProvider
 
   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : '/hello-world-angular/app/views/home.html',
      controller : 'HomeCtrl',
   })
 
   // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
   .when('/sobre', {
      templateUrl : '/hello-world-angular/app/views/sobre.html',
      controller  : 'SobreCtrl',
   })
 
   // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
   .when('/contato', {
      templateUrl : 'app/views/contato.html',
      controller  : 'ContatoCtrl',
   })
 
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});