const { Schema, model } = require('mongoose');

const TipoNovedadSchema = Schema({
    tipoNovedad: {
        type: String,
        required: [true, 'El tipo de novedad es obligatorio']
    },
    estadoTipoNovedad: {
        type: Boolean,
        default: true
    }
});

module.exports = model('TipoNovedad', TipoNovedadSchema);