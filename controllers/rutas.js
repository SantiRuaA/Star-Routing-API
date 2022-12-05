const express = require('express');
const Ruta = require('../models/ruta');
const { validationResult } = require('express-validator');
const ruta = require('../models/ruta');

const rutasPost = async(req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    };

    const body = req.body;

    const ruta = new Ruta(body);

    ruta.save();

    res.json({
        msg: "Ruta creada con exito",
        ruta
    })
};

const rutasGet = async(req, res) => {
    const rutas = await Ruta.find();

    res.json({
        msg: "Lista de rutas",
        rutas
    })
};

const rutaGet = async(req, res) => {
    const { id } = req.params;
    const rutas = await Ruta.findById(id);

    res.json({
        msg: "Lista de rutas",
        rutas
    })
};

const rutasPut = async(req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    };

    const { id } = req.params;
    const { _id, ...resto } = req.body;
    const rutas = await Ruta.findByIdAndUpdate(id, resto);


    res.json({
        msg: "Ruta actualizada exitosamente",
        rutas
    })
};

const rutasDelete = async(req, res) => {

    const { id } = req.params;
    const rutas = await Ruta.findByIdAndUpdate(id, { estadoRuta: false });

    res.json({
        msg: "Estado de la ruta actualizado correctamente",
        rutas
    })
};

module.exports = {
    rutasPost,
    rutasGet,
    rutaGet,
    rutasPut,
    rutasDelete
};