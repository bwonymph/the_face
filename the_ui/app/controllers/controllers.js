// app.controller('HomeController', function($rootScope, $location) {
// 	$rootScope.activeTabe = $location.path();
// });

// app.controller('SobreController', function($rootScope, $location) {
// 	$rootScope.activeTabe = $location.path();
// });

// app.controller('ContatoController', function($rootScope, $location) {
// 	$rootScope.activeTabe = $location.path();
// });

app.controller('HomeCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});
 
app.controller('SobreCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});
 
app.controller('ContatoCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});