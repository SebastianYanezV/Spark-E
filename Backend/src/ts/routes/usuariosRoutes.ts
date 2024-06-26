const express = require('express');
const router = express.Router();
const auth = require('../auth');
const usuariosController = require("../controllers/usuariosController");
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get('/', usuariosController.getUsuarios);

router.post('/registrar', jsonParser, usuariosController.registrar);

router.post('/cambio-clave', jsonParser, usuariosController.changePassword);

router.post('/inicio-sesion', jsonParser, usuariosController.login)

module.exports = router;