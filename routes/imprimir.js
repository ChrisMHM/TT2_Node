const express = require('express');

const router = express.Router();

router.get('/tabla-reportes-finalizados', (request, response) => {
    response.render('imprimir/tabla-reportes-finalizados', {
        pageTitle: 'Imprimir formato',
        enlaceSiguiente: '#',
        regresar: '../main_menu/main-menu',
        path: 'imprimir/tabla-reportes-finalizados'
    });
});

router.get('/ver-resumen', (request, response) => {
    response.render('imprimir/ver-resumen', {
        pageTitle: 'Resumen del reporte',
        regresar: './tabla-reportes-finalizados',
        aceptar: './tabla-reportes-finalizados',
        path: 'imprimir/ver-resumen'
    });
});

module.exports = router;