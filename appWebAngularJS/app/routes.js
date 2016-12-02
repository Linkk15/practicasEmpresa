var Tubo = require('./modelo/tubo');
var Controller = require ('./controller');

module.exports = function(app) {

	// devolver todos los Tubos
	app.get('/api/tubo', Controller.getTubo);
	// Crear una nueva Tubo
	app.post('/api/tubo', Controller.setTubo);
	// Modificar los datos de una Tubo
	app.put('/api/tubo/:tubo_id', Controller.updateTubo);
	// Borrar una Tubo
	app.delete('/api/tubo/:tubo_id', Controller.removeTubo);

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};