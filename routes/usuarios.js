const { Router } = require('express');
const { check } = require('express-validator');

const {
    usuariosPost,
    usuariosGet,
    usuarioGet,
    usuarioPut,
    usuarioDelete
} = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);
router.get('/:id', usuarioGet);

router.post('/', [
    check('nombreUsuario', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('contrasenaUsuario', 'La contraseña del usuario es obligatoria').not().isEmpty()
], usuariosPost);

router.put('/:id', usuarioPut);
router.delete('/:id', usuarioDelete);

module.exports = router;