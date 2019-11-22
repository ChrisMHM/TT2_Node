const express = require('express');
const uploadImagesControllers = require('../controllers/uploadImagesControllers');

const router = express.Router();

// GET
router.get('/info-edificio', uploadImagesControllers.infoEdificio);
router.get('/info-areas', uploadImagesControllers.infoAreas);
router.get('/info-resumen', uploadImagesControllers.infoResumen);
router.get('/info-registro', uploadImagesControllers.infoRegistro);

// POST
router.post('/info-edificio-post', uploadImagesControllers.infoEdificioPost);

module.exports = router;