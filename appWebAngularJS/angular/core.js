angular.module('MainApp', [])


function mainController($scope, $http) {
	$scope.newTubo = {};
	$scope.tubos = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/tubo').success(function(data) {
		$scope.tubos = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});


	// Función para registrar a una tubo
	$scope.registrarTubo = function() {
		$http.post('/api/tubo', $scope.newTubo)
		.success(function(data) {
				$scope.newTubo = {}; // Borramos los datos del formulario
				$scope.tubos = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de una tubo
	$scope.modificarTubo = function(newTubo) {
		$http.put('/api/tubo/' + $scope.newTubo._id, $scope.newTubo)
		.success(function(data) {
				$scope.newTubo = {}; // Borramos los datos del formulario
				$scope.tubos = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto tubo conocido su id
	$scope.borrarTubo = function(newTubo) {
		$http.delete('/api/tubo/' + $scope.newTubo._id)
		.success(function(data) {
			$scope.newTubo = {};
			$scope.tubos = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectTubo = function(tubo) {
		$scope.newTubo = tubo;
		$scope.selected = true;
		console.log($scope.newTubo, $scope.selected);
	};
}