const { Schema, model } = require('mongoose');

const TipoPersonaSchema = Schema({
    tipoPersona: {
        type: String,
        required: [true, 'El tipo de persona es obligatorio'],
    },
    estadoTipoPersona: {
        type: Boolean,
        default: true
    }
});

module.exports = model('TipoPersona', TipoPersonaSchema);