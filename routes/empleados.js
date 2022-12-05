const { Router } = require('express');
const { check } = require('express-validator');

const { empleadosGet, empleadosPost, empleadoGet, empleadoPut, empleadoDelete } = require('../controllers/empleados');

const router = Router();

router.post('/', [
    check('cedulaEmpleado', 'La cédula del empleado es obligatoria').not().isEmpty(),
    check('nombreEmpleado', 'El nombre del empleado es obligatorio').not().isEmpty(),
    check('apellidoEmpleado', 'El apellido del empleado es obligatorio').not().isEmpty(),
    check('telefonoUno', 'El teléfono del empleado es obligatorio').not().isEmpty(),
], empleadosPost);

router.get('/', empleadosGet);
router.get('/:id', empleadoGet);
router.put('/:id', empleadoPut);
router.delete('/:id', empleadoDelete);

module.exports = router;