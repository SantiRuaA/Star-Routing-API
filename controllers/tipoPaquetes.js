const TipoPaquete = require('../models/tipoPaquete');

const { validationResult } = require('express-validator');

const tipoPaquetesPost = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const body = req.body;

    const tipoPaquete = new TipoPaquete(body);

    tipoPaquete.save();

    res.json({ msg: "Tipo de paquete creado correctamente", tipoPaquete });

}

const tipoPaquetesGet = async(req, res) => {

    const tipoPaquetes = await TipoPaquete.find();

    res.json({ msg: "Lista de los tipos de paquetes", tipoPaquetes });
}

const tipoPaqueteGet = async(req, res) => {

    const id = req.params.id;

    const tipoPaquete = await TipoPaquete.findById(id);

    res.json({ msg: "Tipo de paquete encontrado", tipoPaquete });
}

const tipoPaquetePut = async(req, res) => {

    const { id } = req.params;

    const tipoPaquete = await TipoPaquete.findById(id);

    if (!tipoPaquete) {
        return res.status(400).json({
            msg: "Tipo de Paquete no encontrado"
        });
    }

    const { _id, ...resto } = req.body;

    const tipoPaqueteActualizado = await TipoPaquete.findByIdAndUpdate(id, resto);

    res.json({ msg: "Tipo de paquete actualizado correctamente", tipoPaqueteActualizado });

}

const tipoPaqueteDelete = async(req, res) => {

    const { id } = req.params;

    const tipoPaquete = await TipoPaquete.findByIdAndUpdate(id, { estadoTipoPaquete: false });

    if (!tipoPaquete) {
        return res.status(400).json({
            msg: "Tipo de paquete no encontrado"
        });
    }

    res.json({ msg: "Estado del tipo de paquete actualizado correctamente", tipoPaquete });
}

module.exports = {
    tipoPaquetesPost,
    tipoPaquetesGet,
    tipoPaqueteGet,
    tipoPaquetePut,
    tipoPaqueteDelete
}