var mongoose = require('mongoose');

module.exports = mongoose.model('Tubo', {
	diametro: Number,
	cola: Number,
	accesorios: Number,
	encoladuras: Number,
	cantidad: Number,
	botes: Number
});