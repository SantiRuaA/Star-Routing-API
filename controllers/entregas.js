const express = require('express');
const Entrega = require('../models/entrega');
const { validationResult } = require('express-validator');

const entregasPost = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { firmaDestinatario, descripcionEntrega, fechaEntrega, estadoEntrega } = req.body;


    const entrega = new Entrega({ firmaDestinatario, descripcionEntrega, fechaEntrega, estadoEntrega });

    const existeFirma = await Entrega.findOne({ firmaDestinatario });

    if (existeFirma) {
        // Retornar un error 400
        return res.json({
            msg: 'La firma ya está registrada'
        });
    }

    entrega.save();

    res.json({ msg: "Entrega creada correctamente", entrega });
}

const entregasGet = async(req, res) => {

    const entregas = await Entrega.find();

    res.json({ msg: "Lista de entregas", entregas });
}

const entregaGet = async(req, res) => {

    const id = req.params.id;

    const entrega = await Entrega.findById(id);

    res.json({ msg: "Entrega encontrada", entrega });
}

const entregaPut = async(req, res) => {

    const { id } = req.params;

    const entrega = await Entrega.findById(id);

    if (!entrega) {
        return res.status(400).json({
            msg: "Entrega no encontrada"
        });
    }

    const { _id, ...resto } = req.body;

    const entregaActualizado = await Entrega.findByIdAndUpdate(id, resto);

    res.json({ msg: "Entrega actualizada correctamente", entregaActualizado });

}

const entregaDelete = async(req, res) => {

    const { id } = req.params;

    const entrega = await Entrega.findByIdAndUpdate(id, { estadoEntrega: false });

    if (!entrega) {
        return res.status(400).json({
            msg: "Entrega no encontrada"
        });
    }

    res.json({ msg: "Estado de la entrega actualizado correctamente", entrega });
}

module.exports = {
    entregasPost,
    entregasGet,
    entregaGet,
    entregaPut,
    entregaDelete
}