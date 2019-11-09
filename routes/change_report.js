const express = require('express');
const changeReportControllers = require('../controllers/changeReportControllers');

const router = express.Router();

router.get('/change-menu', changeReportControllers.menuCambiar);

router.get('/select-report', changeReportControllers.seleccionarReporte);

router.get('/change-data', changeReportControllers.cambiarDatos);

router.get('/summary-form', changeReportControllers.resumenFormulario);

router.get('/change-success', changeReportControllers.cambioExitoso);

router.get('/select-final-report', changeReportControllers.seleccionarReporteFinal);

router.get('/finish-validation', changeReportControllers.validacionFinal);

module.exports = router;