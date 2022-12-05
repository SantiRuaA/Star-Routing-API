const { Schema, model } = require('mongoose');

const TipoPaqueteSchema = Schema({
    tipoPaquete: {
        type: String,
        required: [true, 'El tipo del paquete es obligatorio']
    },
    estadoTipoPersona: {
        type: Boolean,
        default: true
    }
});

module.exports = model('TipoPaquete', TipoPaqueteSchema);