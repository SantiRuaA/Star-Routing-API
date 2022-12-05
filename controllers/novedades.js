const express = require('express');
const Novedad = require('../models/novedad');
const { validationResult } = require('express-validator');

const novedadesPost = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { descripcionNovedad, idPaquete, idTipoNovedad, idRuta } = req.body;


    const novedad = new Novedad({ descripcionNovedad, idPaquete, idTipoNovedad, idRuta });

    novedad.save();

    res.json({ msg: "Novedad creada correctamente", novedad });
}

const novedadesGet = async(req, res) => {

    const novedades = await Novedad.find();

    res.json({ msg: "Lista de novedades", novedades });
}

const novedadGet = async(req, res) => {

    const id = req.params.id;

    const novedad = await Novedad.findById(id);

    res.json({ msg: "Novedad encontrada", novedad });
}

const novedadPut = async(req, res) => {

    const { id } = req.params;

    const novedad = await Novedad.findById(id);

    if (!novedad) {
        return res.status(400).json({
            msg: "Entrega no encontrada"
        });
    }

    const { _id, ...resto } = req.body;

    const novedadActualizado = await Novedad.findByIdAndUpdate(id, resto);

    res.json({ msg: "Novedad actualizada correctamente", novedadActualizado });

}

const novedadDelete = async(req, res) => {

    const { id } = req.params;

    const novedad = await Novedad.findByIdAndUpdate(id, { estadoNovedad: false });

    if (!novedad) {
        return res.status(400).json({
            msg: "Novedad no encontrada"
        });
    }

    res.json({ msg: "Estado de la novedad actualizada correctamente", novedad });
}

module.exports = {
    novedadesPost,
    novedadesGet,
    novedadGet,
    novedadPut,
    novedadDelete
}