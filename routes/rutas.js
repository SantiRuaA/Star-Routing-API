const { Router } = require('express');
const { check } = require('express-validator');

const {
    rutasPost,
    rutasGet,
    rutaGet,
    rutasPut,
    rutasDelete
} = require('../controllers/rutas');

const router = Router();

router.get('/', rutasGet);
router.get('/:id', rutaGet);
router.post('/', [
    check('nombreRuta', 'El nombre es obligatorio').not().isEmpty(),
    check('distanciaRuta', 'La distancia es obligatoria').not().isEmpty(),
    check('tiempoRuta', 'El tiempo es obligatorio').not().isEmpty()
], rutasPost);
router.put('/:id', rutasPut);
router.delete('/:id', rutasDelete);

module.exports = router;