const express = require('express');
const uploadImagesControllers = require('../controllers/uploadImagesControllers');

const router = express.Router();

router.get('/images-menu', uploadImagesControllers.menuImagenes);

router.get('/images-data', uploadImagesControllers.datosImagenes);

router.get('/images-summary', uploadImagesControllers.resumenImagenes);

router.get('/images-sent', uploadImagesControllers.enviarImagenes);

router.get('/info-edificio', uploadImagesControllers.infoEdificio);

router.get('/info-areas', uploadImagesControllers.infoAreas);

router.get('/info-resumen', uploadImagesControllers.infoResumen);

router.get('/info-registro', uploadImagesControllers.infoEdificio);

module.exports = router;