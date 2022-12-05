const express = require('express');
const Paquete = require('../models/paquete');
const { validationResult } = require('express-validator');

const paquetesPost = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const body = req.body;


    const paquete = new Paquete(body);

    paquete.save();

    res.json({ msg: "Paquete creado correctamente", paquete });
}

const paquetesGet = async(req, res) => {

    const paquetes = await Paquete.find();

    res.json({ msg: "Lista de paquetes", paquetes });
}

const paqueteGet = async(req, res) => {

    const id = req.params.id;

    const paquete = await Paquete.findById(id);

    res.json({ msg: "Cliente encontrado", paquete });
}

const paquetePut = async(req, res) => {

    const { id } = req.params;

    const paquete = await Paquete.findById(id);

    if (!paquete) {
        return res.status(400).json({
            msg: "Cliente no encontrado"
        });
    }

    const { _id, codigoqrPaquete, ...resto } = req.body;

    const paqueteActualizado = await Paquete.findByIdAndUpdate(id, resto);

    res.json({ msg: "Paquete actualizado correctamente", paqueteActualizado });

}

const paqueteDelete = async(req, res) => {

    const { id } = req.params;

    const paquete = await Paquete.findByIdAndUpdate(id, { estadoPaquete: false });

    if (!paquete) {
        return res.status(400).json({
            msg: "Paquete no encontrado"
        });
    }

    res.json({ msg: "Estado del paquete actualizado correctamente", paquete });
}

module.exports = {
    paquetesPost,
    paquetesGet,
    paqueteGet,
    paquetePut,
    paqueteDelete
}