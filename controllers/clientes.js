const express = require('express');
const Cliente = require('../models/cliente');
const { validationResult } = require('express-validator');

const clientesPost = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { idTipoPersona, nombreCliente, apellidoCliente, telefonoUno, telefonoDos, correoCliente, idEmpleado } = req.body;
    const cliente = new Cliente({ idTipoPersona, nombreCliente, apellidoCliente, telefonoUno, telefonoDos, correoCliente, idEmpleado });

    const existeEmail = await Cliente.findOne({ correoCliente });

    if (existeEmail) {
        // Retornar un error 400
        return res.json({
            msg: "El correo ya está registrado",
        });
    }

    cliente.save();

    res.json({ msg: "Cliente creado correctamente", cliente });
}

const clientesGet = async(req, res) => {

    const clientes = await Cliente.find();

    res.json({ msg: "Lista de clientes", clientes });
}

const clienteGet = async(req, res) => {

    const id = req.params.id;

    const cliente = await Cliente.findById(id);

    res.json({ msg: "Cliente encontrado", cliente });
}

const clientePut = async(req, res) => {

    const { id } = req.params;

    const cliente = await Cliente.findById(id);

    if (!cliente) {
        return res.status(400).json({
            msg: "Cliente no encontrado"
        });
    }

    const { _id, idTipoPersona, idEmpleado, ...resto } = req.body;

    const clienteActualizado = await Cliente.findByIdAndUpdate(id, resto);

    res.json({ msg: "Cliente actualizado correctamente", clienteActualizado });

}

const clienteDelete = async(req, res) => {

    const { id } = req.params;

    const cliente = await Cliente.findByIdAndUpdate(id, { estadoCliente: false });

    if (!cliente) {
        return res.status(400).json({
            msg: "Cliente no encontrado"
        });
    }

    res.json({ msg: "Estado del cliente actualizado correctamente", cliente });
}

module.exports = {
    clientesPost,
    clientesGet,
    clienteGet,
    clientePut,
    clienteDelete
}