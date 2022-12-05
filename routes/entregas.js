const { Router } = require('express');
const { check } = require('express-validator');

const { entregasGet, entregasPost, entregaGet, entregaPut, entregaDelete } = require('../controllers/entregas');

const router = Router();

router.post('/', [
    check('firmaDestinatario', 'La firma del destinatario es obligatoria').not().isEmpty(),
    check('fechaEntrega', 'La fecha de la entrega es obligatoria').not().isEmpty()
], entregasPost);

router.get('/', entregasGet);
router.get('/:id', entregaGet);
router.put('/:id', entregaPut);
router.delete('/:id', entregaDelete);

module.exports = router;