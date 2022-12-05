const express = require('express');
const bycript = require('bcryptjs');
const Usuario = require('../models/usuario');

const { validationResult } = require('express-validator');
const usuario = require('../models/usuario');

const usuariosPost = async(req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    };

    const { nombreUsuario, contrasenaUsuario, estadoUsuario } = req.body;

    const usuario = new Usuario({ nombreUsuario, contrasenaUsuario, estadoUsuario });

    const existeNombre = await Usuario.findOne({ nombreUsuario });

    if (existeNombre) {
        // Retornar un error 400
        return res.json({
            msg: 'El nombre de usuario ya está registrado'
        });
    }

    const salt = bycript.genSaltSync();
    usuario.contrasenaUsuario = bycript.hashSync(contrasenaUsuario, salt); // Encriptar la contraseña

    usuario.save();

    res.json({ msg: "Usuario creado exitosamente", usuario });
}

const usuariosGet = async(req, res) => {

    const usuarios = await Usuario.find();

    res.json({
        msg: "Lista de usuarios",
        usuarios
    });
}

const usuarioGet = async(req, res) => {

    const { id } = req.params;

    const usuario = await Usuario.findById(id);

    if (!usuario) {
        return res.status(400).json({
            msg: "Usuario no encontrado"
        });
    }

    res.json({
        msg: "Usuario encontrado",
        usuario
    });

}

const usuarioPut = async(req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    };

    const { id } = req.params;

    const { _id, ...resto } = req.body;

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        msg: "Usuario actualizado con exito"
    });

}

const usuarioDelete = async(req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    };

    const { id } = req.params;

    const { _id, ...resto } = req.body;

    const usuario = await Usuario.findByIdAndUpdate(id, { estadoUsuario: false });

    res.json({
        msg: "estado del usuario actualizado con exito"
    });

}

module.exports = {
    usuariosPost,
    usuariosGet,
    usuarioGet,
    usuarioPut,
    usuarioDelete
};