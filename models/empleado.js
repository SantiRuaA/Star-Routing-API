const { Schema, model } = require('mongoose');

const EmpleadoSchema = Schema(
    {
        cedulaEmpleado: {
            type: String,
            required: [true, 'La cédula del empleado es obligatoria'],
            unique: true
        },
        nombreEmpleado: {
            type: String,
            required: [true, 'El nombre del empleado es obligatorio']
        },
        apellidoEmpleado: {
            type: String,
            required: [true, 'El apellido del empleado es obligatorio']
        },
        telefonoUno: {
            type: String,
            required: [true, 'El teléfono del empleado es obligatorio']
        },
        telefonoDos: {
            type: String
        },
        estadoEmpleado: {
            type: Boolean,
            default: true
        }
    }
);

module.exports = model('Empleado', EmpleadoSchema);