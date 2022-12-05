const TipoNovedad = require('../models/tipoNovedad');

const { validationResult } = require('express-validator');

const tipoNovedadesPost = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const body = req.body;

    const tipoNovedad = new TipoNovedad(body);

    tipoNovedad.save();

    res.json({ msg: "Tipo de novedad creado correctamente", tipoNovedad });

}

const tipoNovedadesGet = async(req, res) => {

    const tipoNovedades = await TipoNovedad.find();

    res.json({ msg: "Lista de los tipos de novedades", tipoNovedades });
}

const tipoNovedadGet = async(req, res) => {

    const id = req.params.id;

    const tipoNovedad = await TipoNovedad.findById(id);

    res.json({ msg: "Tipo de novedad encontrado", tipoNovedad });
}

const tipoNovedadPut = async(req, res) => {

    const { id } = req.params;

    const tipoNovedad = await TipoNovedad.findById(id);

    if (!tipoNovedad) {
        return res.status(400).json({
            msg: "Tipo de novedad no encontrado"
        });
    }

    const { _id, ...resto } = req.body;

    const tipoNovedadActualizado = await TipoNovedad.findByIdAndUpdate(id, resto);

    res.json({ msg: "Tipo de paquete actualizado correctamente", tipoNovedadActualizado });

}

const tipoNovedadDelete = async(req, res) => {

    const { id } = req.params;

    const tipoNovedad = await TipoNovedad.findByIdAndUpdate(id, { estadoTipoNovedad: false });

    if (!tipoNovedad) {
        return res.status(400).json({
            msg: "Tipo de paquete no encontrado"
        });
    }

    res.json({ msg: "Estado del tipo de novedad actualizado correctamente", tipoNovedad });
}

module.exports = {
    tipoNovedadesPost,
    tipoNovedadesGet,
    tipoNovedadGet,
    tipoNovedadPut,
    tipoNovedadDelete
}