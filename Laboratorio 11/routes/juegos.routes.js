const express = require('express');

const router = express.Router();

const juegosController = require('../controllers/juegos.controller');

router.get('/nuevo', juegosController.get_nuevo);

router.post('/nuevo', juegosController.post_nuevo);

router.get('/', juegosController.listar);

module.exports = router;