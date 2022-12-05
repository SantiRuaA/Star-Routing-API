const { Schema, model } = require('mongoose');

const DestinatarioSchema = Schema({
    nombreDestinatario: {
        type: String,
        required: [true, 'El nombre del destinatario es obligatorio']
    },
    apellidoDestinatario: {
        type: String,
        required: [true, 'El apellido del destinatario es obligatorio']
    },
    direccionDestinatario: {
        type: String,
        required: [true, 'La dirección del destinatario es obligatoria']
    },
    telefonoDestinatario: {
        type: String,
        required: [true, 'El telefono es obligatorio']
    },
    correoDestinatario: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    estadoDestinatario: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Destinatario', DestinatarioSchema);