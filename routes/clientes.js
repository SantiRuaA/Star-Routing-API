const { Router } = require('express');
const { check } = require('express-validator');

const { clientesGet, clientesPost, clienteGet, clientePut, clienteDelete } = require('../controllers/clientes');

const router = Router();

router.post('/', [
    check('idTipoPersona', 'El tipo de persona es obligatorio').not().isEmpty(),
    check('nombreCliente', 'El nombre del cliente es obligatorio').not().isEmpty(),
    check('apellidoCliente', 'El apellido del cliente es obligatorio').not().isEmpty(),
    check('telefonoUno', 'El teléfono del cliente es obligatorio').not().isEmpty(),
    check('correoCliente', 'El correo del cliente es obligatorio').not().isEmpty(),
    check('idEmpleado', 'La cédula del empleado es obligatoria').not().isEmpty(),
    check('correoCliente', 'El correo no es válido').isEmail()
], clientesPost);

router.get('/', clientesGet);
router.get('/:id', clienteGet);
router.put('/:id', clientePut);
router.delete('/:id', clienteDelete);

module.exports = router;