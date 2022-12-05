const { Router } = require('express');
const { check } = require('express-validator');

const { tipoPersonasGet, tipoPersonasPost, tipoPersonaGet, tipoPersonaPut, tipoPersonaDelete } = require('../controllers/tipoPersonas');

const router = Router();

router.post('/', [
    check('tipoPersona', 'El tipo de persona es obligatorio').not().isEmpty()
], tipoPersonasPost);

router.get('/', tipoPersonasGet);
router.get('/:id', tipoPersonaGet);
router.put('/:id', tipoPersonaPut);
router.delete('/:id', tipoPersonaDelete);

module.exports = router;