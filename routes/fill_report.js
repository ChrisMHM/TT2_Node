const express = require('express');
const fillReportControllers = require('../controllers/fillReportControllers');
const router = express.Router();

router.get('/report-menu', fillReportControllers.menuReporte);

router.get('/report-form', fillReportControllers.formularioReporte);

router.get('/continue-report', fillReportControllers.continuarReporte);

router.get('/summary-form', fillReportControllers.resumenFormulario);

router.get('/report-completed', fillReportControllers.reporteCompletado);

router.get('/validate-report', fillReportControllers.validarReporte);

router.get('/seleccionar-edificacion', fillReportControllers.seleccionarEdificacion);

router.get('/seleccionar-edificacion-continuar', fillReportControllers.seleccionarEdificacionContinuar);

router.get('/summary-validation', fillReportControllers.validacionResumen);

router.get('/finish-validation', fillReportControllers.finalizarValidacion);


module.exports = router;