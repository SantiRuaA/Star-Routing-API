const { Schema, model } = require('mongoose');

const EntregaSchema = Schema({
    firmaDestinatario: {
        type: String,
        required: [true, 'El codigo es obligatorio'],
        unique: true
    },
    descripcionEntrega: {
        type: String
    },
    fechaEntrega: {
        type: Date,
        required: [true, 'La fecha es obligatoria']
    },
    estadoEntrega: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Entrega', EntregaSchema);