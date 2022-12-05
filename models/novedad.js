const { Schema, model } = require('mongoose');

const NovedadSchema = Schema({
    descripcionNovedad: {
        type: String
    },
    idPaquete: {
        type: Schema.Types.ObjectId,
        ref: 'Paquete',
        required: [true, 'El paquete es obligatorio']
    },
    idTipoNovedad: {
        type: Schema.Types.ObjectId,
        ref: 'tipoNovedad',
        required: [true, 'El tipo de novedad es obligatorio']
    },
    idRuta: {
        type: Schema.Types.ObjectId,
        ref: 'Ruta',
        required: [true, 'La ruta es obligatoria']
    },
    estadoNovedad: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Novedad', NovedadSchema);