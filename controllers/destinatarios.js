const express = require('express');
const Destinatario = require('../models/destinatario');
const { validationResult } = require('express-validator');

const destinatariosPost = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const {
        nombreDestinatario,
        apellidoDestinatario,
        direccionDestinatario,
        telefonoDestinatario,
        correoDestinatario,
    } = req.body;

    const destinatario = new Destinatario({
        nombreDestinatario,
        apellidoDestinatario,
        direccionDestinatario,
        telefonoDestinatario,
        correoDestinatario
    });

    const existeEmail = await Destinatario.findOne({ correoDestinatario });

    if (existeEmail) {
        // Retornar un error 400
        return res.json({
            msg: 'El correo ya está registrado'
        });
    }

    destinatario.save();

    res.json({ msg: "Destinatario creado correctamente", destinatario });
}

const destinatariosGet = async(req, res) => {

    const destinatarios = await Destinatario.find();

    res.json({ msg: "Lista de destinatarios", destinatarios });
}

const destinatarioGet = async(req, res) => {

    const id = req.params.id;

    const destinatario = await Destinatario.findById(id);

    res.json({ msg: "Destinatario encontrado", destinatario });
}

const destinatarioPut = async(req, res) => {

    const { id } = req.params;

    const destinatario = await Destinatario.findById(id);

    if (!destinatario) {
        return res.status(400).json({
            msg: "Destinatario no encontrado"
        });
    }

    const { _id, ...resto } = req.body;

    const destinatarioActualizado = await Destinatario.findByIdAndUpdate(id, resto);

    res.json({ msg: "Destinatario actualizado correctamente", destinatarioActualizado });

}

const destinatarioDelete = async(req, res) => {

    const { id } = req.params;

    const destinatario = await Destinatario.findByIdAndUpdate(id, { estadoDestinatario: false });

    if (!destinatario) {
        return res.status(400).json({
            msg: "Destinatario no encontrado"
        });
    }

    res.json({ msg: "Estado del destinatario actualizado correctamente", destinatario });
}

module.exports = {
    destinatariosPost,
    destinatariosGet,
    destinatarioGet,
    destinatarioPut,
    destinatarioDelete
}