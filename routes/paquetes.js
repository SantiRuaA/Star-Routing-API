const { Router } = require('express');
const { check } = require('express-validator');

const { paquetesGet, paquetesPost, paqueteGet, paquetePut, paqueteDelete } = require('../controllers/paquetes');

const router = Router();

router.post('/', [
    check('codigoqrPaquete', 'El codigo qr del paquete es obligatorio').not().isEmpty(),
    check('pesoPaquete', 'El peso del paquete es obligatorio').not().isEmpty(),
    check('idDestinatario', 'El nombre del destinatario del paquete es obligatorio').not().isEmpty(),
    check('idTipoPaquete', 'El tipo de paquete es obligatorio').not().isEmpty(),
    check('idEmpleado', 'La cédula del empleado es obligatoria').not().isEmpty(),
], paquetesPost);

router.get('/', paquetesGet);
router.get('/:id', paqueteGet);
router.put('/:id', paquetePut);
router.delete('/:id', paqueteDelete);

module.exports = router;