var Tubo = require('./modelo/tubo');


// Obtiene todos los objetos Tubo de la base de datos
exports.getTubo = function(req, res) {
    Tubo.find(
        function(err, tubo) {
            if (err)
                res.send(err);
            res.json(tubo); // devuelve todas las Tubos en JSON
        }
    );
};

// Guarda un objeto Tubo en base de datos
exports.setTubo = function(req, res) {
    // Creo el objeto Tubo
    colaForm = req.body.cola;
    calcEncoladuras = (req.body.accesorios * 2.3).toFixed(2);
    calcCantidad = ((calcEncoladuras * parseInt(colaForm)) / 100).toFixed(2);
    calcBotes = (calcCantidad / 1000).toFixed(2);

    Tubo.create({
            diametro: req.body.diametro,
            cola: req.body.cola,
            accesorios: req.body.accesorios,
            encoladuras: calcEncoladuras,
            cantidad: calcCantidad,
            botes: calcBotes
        },
        function(err, tubo) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas las tubos tras crear una de ellas
            Tubo.find(function(err, tubo) {
                if (err)
                    res.send(err);
                res.json(tubo);
            });
        });
};

// Modificamos un objeto Tubo de la base de datos
exports.updateTubo = function(req, res) {
    colaForm = req.body.cola;
    calcEncoladuras = (req.body.accesorios * 2.3).toFixed(2);
    calcCantidad = ((calcEncoladuras * parseInt(colaForm)) / 100).toFixed(2);
    calcBotes = (calcCantidad / 1000).toFixed(2);

    Tubo.update({
            _id: req.params.tubo_id
        }, {
            $set: {
                diametro: req.body.diametro,
                cola: req.body.cola,
                accesorios: req.body.accesorios,
                encoladuras: calcEncoladuras,
                cantidad: calcCantidad,
                botes: calcBotes
            }
        },
        function(err, tubo) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas las tubos tras crear una de ellas
            Tubo.find(function(err, tubo) {
                if (err)
                    res.send(err);
                res.json(tubo);
            });
        });
};

// Elimino un objeto Tubo de la base de Datos
exports.removeTubo = function(req, res) {
    Tubo.remove({
        _id: req.params.tubo_id
    }, function(err, tubo) {
        if (err)
            res.send(err);

        // Obtine y devuelve todas las tubos tras borrar una de ellas
        Tubo.find(function(err, tubo) {
            if (err)
                res.send(err);
            res.json(tubo);
        });
    });
};
