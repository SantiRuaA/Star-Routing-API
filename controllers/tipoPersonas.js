const express = require('express');
const TipoPersona = require('../models/tipoPersona');

const { validationResult } = require('express-validator');

const tipoPersonasPost = async (req, res) => {
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
    
        const body = req.body;
    
        const tipoPersona = new TipoPersona(body);
    
        tipoPersona.save();
    
        res.json({ msg: "Tipo de persona creado correctamente", tipoPersona });

}

const tipoPersonasGet = async (req, res) => {

    const tipoPersonas = await TipoPersona.find();

    res.json({ msg: "Lista de los tipos de personas", tipoPersonas });
}

const tipoPersonaGet = async (req, res) => {

    const id = req.params.id;

    const tipoPersona = await TipoPersona.findById(id);

    res.json({ msg: "Tipo de persona encontrado", tipoPersona });
}

const tipoPersonaPut = async (req, res) => {

    const { id } = req.params;

    const tipoPersona = await TipoPersona.findById(id);

    if (!tipoPersona) {
        return res.status(400).json({
            msg: "Tipo de persona no encontrado"
        }
        );
    }

    const { _id, ...resto } = req.body;

    const tipoPersonaActualizado = await TipoPersona.findByIdAndUpdate(id, resto);

    res.json({ msg: "Tipo de persona actualizado correctamente", tipoPersonaActualizado });

}

const tipoPersonaDelete = async (req, res) => {

    const { id } = req.params;

    const tipoPersona = await TipoPersona.findByIdAndUpdate(id, { estadoTipoPersona: false });

    if (!tipoPersona) {
        return res.status(400).json({
            msg: "Tipo de persona no encontrado"
        }
        );
    }

    res.json({ msg: "Estado del tipo de persona actualizado correctamente", tipoPersona });
}

module.exports = {
    tipoPersonasPost,
    tipoPersonasGet,
    tipoPersonaGet,
    tipoPersonaPut,
    tipoPersonaDelete
}