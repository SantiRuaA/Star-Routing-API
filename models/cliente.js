const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    idTipoPersona: {
        type: Schema.Types.ObjectId,
        ref: 'tipoPersona',
        required: [true, 'El tipo de persona es obligatorio']
    },
    nombreCliente: {
        type: String,
        required: [true, 'El nombre del cliente es obligatorio'],
    },
    apellidoCliente: {
        type: String,
        required: [true, 'El apellido del cliente es obligatorio']
    },
    telefonoUno: {
        type: String,
        required: [true, 'El teléfono del cliente es obligatorio']
    },
    telefonoDos: {
        type: String
    },
    correoCliente: {
        type: String,
        required: [true, 'El correo del cliente es obligatorio'],
        unique: true
    },
    idEmpleado: {
        type: Schema.Types.ObjectId,
        ref: 'Empleado',
        required: [true, 'La cédula del empleado es obligatoria']
    },
    estadoCliente: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Cliente', ClienteSchema);