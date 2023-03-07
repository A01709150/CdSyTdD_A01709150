const express = require('express');

const router = express.Router();

const juegosController = require('../controllers/juegos.controller');

router.get('/', juegosController.listar);

module.exports = router;