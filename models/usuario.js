const { Schema, model } = require('mongoose');
const UsuarioSchema = Schema({
    nombreUsuario: {
        type: String,
        required: [true, "El nombre de usuario es obligatorio"],
        unique: true
    },
    contrasenaUsuario: {
        type: String,
        required: [true, "La contraseña del usuario es obligatoria"]
    },
    estadoUsuario: {
        type: String,
        default: true
    }
});

module.exports = model('Usuario', UsuarioSchema);