const { Router } = require('express');
const { check } = require('express-validator');

const { tipoPaquetesGet, tipoPaquetesPost, tipoPaqueteGet, tipoPaquetePut, tipoPaqueteDelete } = require('../controllers/tipoPaquetes');

const router = Router();

router.post('/', [
    check('tipoPaquete', 'El tipo de paquete es obligatorio').not().isEmpty()
], tipoPaquetesPost);

router.get('/', tipoPaquetesGet);
router.get('/:id', tipoPaqueteGet);
router.put('/:id', tipoPaquetePut);
router.delete('/:id', tipoPaqueteDelete);

module.exports = router;