const express = require('express');
const Empleado = require('../models/empleado');
const { validationResult } = require('express-validator');

const empleadosPost = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { cedulaEmpleado, nombreEmpleado, apellidoEmpleado, telefonoUno, telefonoDos } = req.body;
    const empleado = new Empleado({ cedulaEmpleado, nombreEmpleado, apellidoEmpleado, telefonoUno, telefonoDos });

    const existeCedula = await Empleado.findOne({ cedulaEmpleado });

    if (existeCedula) {
        // Retornar un error 400
        return res.json({
            msg: 'Esta cedula ya está registrada'
        });
    }

    empleado.save();

    res.json({ msg: "Empleado creado correctamente", empleado });

}

const empleadosGet = async(req, res) => {

    const empleados = await Empleado.find();

    res.json({ msg: "Lista de empleados", empleados });

}

const empleadoGet = async(req, res) => {

    const id = req.params.id;

    const empleado = await Empleado.findById(id);

    res.json({ msg: "Empleado encontrado", empleado });

}

const empleadoPut = async(req, res) => {

    const { id } = req.params;

    const empleado = await Empleado.findById(id);

    if (!empleado) {
        return res.status(400).json({
            msg: "Empleado no encontrado"
        });
    }

    const { _id, cedulaCliente, ...resto } = req.body;

    const empleadoActualizado = await Empleado.findByIdAndUpdate(id, resto);

    res.json({ msg: "Empleado actualizado correctamente", empleadoActualizado });

}

const empleadoDelete = async(req, res) => {

    const { id } = req.params;

    const empleado = await Empleado.findByIdAndUpdate(id, { estado: false });

    if (!empleado) {
        return res.status(400).json({
            msg: "Empleado no encontrado"
        });
    }

    res.json({ msg: "Estado del empleado actualizado correctamente", empleado });

}

module.exports = {
    empleadosPost,
    empleadosGet,
    empleadoGet,
    empleadoPut,
    empleadoDelete
}