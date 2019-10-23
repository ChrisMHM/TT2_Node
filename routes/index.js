const express = require('express');

const router = express.Router();


router.get('/', (request, response) => {
    // Se indica la ruta que se va a renderizar y los datos que se están regresando para manejarlos dinámicamente
    response.render('index', {
        pageTitle: 'Inicio',
        path: '/'
    });
});

module.exports = router;