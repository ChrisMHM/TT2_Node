const express = require('express');
const imprimirControllers = require('../controllers/imprimirControllers');

const router = express.Router();

router.get('/tabla-reportes-finalizados', imprimirControllers.tablaReporteFinalizado);

router.get('/ver-resumen', imprimirControllers.verResumen);

module.exports = router;