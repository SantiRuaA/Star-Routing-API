const { Schema, model } = require("mongoose");

const RutaSchema = Schema({
    nombreRuta: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    distanciaRuta: {
        type: Number,
        required: [true, 'La distancia es obligatoria']
    },
    tiempoRuta: {
        type: Number,
        required: [true, 'El tiempo es obligatorio']
    },
    estadoRuta: {
        type: Boolean,
        default: true
    }
});

module.exports = model('ruta', RutaSchema);