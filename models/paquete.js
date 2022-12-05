const { Schema, model } = require('mongoose');

const PaqueteSchema = Schema({
    codigoqrPaquete: {
        type: String,
        required: [true, 'El codigo es obligatorio'],
    },
    descripcionPaquete: {
        type: String
    },
    pesoPaquete: {
        type: Number,
        required: [true, 'El peso es obligatorio']
    },
    idDestinatario: {
        type: Schema.Types.ObjectId,
        ref: 'Destinatario',
        required: [true, 'El destinatario es obligatorio']
    },
    estadoPaquete: {
        type: Boolean,
        default: true
    },
    idTipoPaquete: {
        type: Schema.Types.ObjectId,
        ref: 'tipoPaquete',
        required: [true, 'El tipo de paquete es obligatorio']
    },
    idEmpleado: {
        type: Schema.Types.ObjectId,
        ref: 'Empleado',
        required: [true, 'La cédula del empleado es obligatoria']
    }

});

module.exports = model('Paquete', PaqueteSchema);