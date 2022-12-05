const { Router } = require('express');
const { check } = require('express-validator');

const { novedadesGet, novedadesPost, novedadGet, novedadPut, novedadDelete } = require('../controllers/novedades');

const router = Router();

router.post('/', [
    check('idPaquete', 'El id del paquete es obligatorio').not().isEmpty(),
    check('idTipoNovedad', 'El tipo de novedad es obligatoria').not().isEmpty(),
    check('idRuta', 'El id de la ruta es obligatoria').not().isEmpty()
], novedadesPost);

router.get('/', novedadesGet);
router.get('/:id', novedadGet);
router.put('/:id', novedadPut);
router.delete('/:id', novedadDelete);

module.exports = router;