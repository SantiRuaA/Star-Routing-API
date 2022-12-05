const { Router } = require('express');
const { check } = require('express-validator');

const { tipoNovedadesGet, tipoNovedadesPost, tipoNovedadGet, tipoNovedadPut, tipoNovedadDelete } = require('../controllers/tipoNovedades');

const router = Router();

router.post('/', [
    check('tipoNovedad', 'El tipo de Novedad es obligatorio').not().isEmpty()
], tipoNovedadesPost);

router.get('/', tipoNovedadesGet);
router.get('/:id', tipoNovedadGet);
router.put('/:id', tipoNovedadPut);
router.delete('/:id', tipoNovedadDelete);

module.exports = router;