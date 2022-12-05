const { Router } = require('express');
const { check } = require('express-validator');

const { destinatariosGet, destinatariosPost, destinatarioGet, destinatarioPut, destinatarioDelete } = require('../controllers/destinatarios');

const router = Router();

router.post('/', [
    check('nombreDestinatario', 'El nombre del destinatario es obligatorio').not().isEmpty(),
    check('apellidoDestinatario', 'El apellido del destinatario es obligatorio').not().isEmpty(),
    check('direccionDestinatario', 'La direccion del destinatario es obligatoria').not().isEmpty(),
    check('telefonoDestinatario', 'El telefono del destinatario es obligatorio').not().isEmpty(),
    check('correoDestinatario', 'El correo no es válido').isEmail(),
], destinatariosPost);

router.get('/', destinatariosGet);
router.get('/:id', destinatarioGet);
router.put('/:id', destinatarioPut);
router.delete('/:id', destinatarioDelete);

module.exports = router;