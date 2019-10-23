const express = require('express');
const path = require('path');
// Importar rutas
const rutasIndex = require('./routes/index');
const rutasMain = require('./routes/main');
const rutasRegister = require('./routes/register');
const rutasMainMenu = require('./routes/main_menu');
const rutasSubirImagenes = require('./routes/upload_images');
const rutasLlenarReporte = require('./routes/fill_report');
const rutasCambiarReporte = require('./routes/change_report');

const app = express();

// Configura el template engine para generar archivos HTML dinámicos => ejs
app.set('view engine', 'ejs');
// De dónde toma los templates para ser procesados por ejs
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

// Manejo de rutas
app.use('/main', rutasMain);
app.use('/register', rutasRegister);
app.use('/main_menu', rutasMainMenu);
app.use('/upload_images', rutasSubirImagenes);
app.use('/fill_report', rutasLlenarReporte);
app.use('/change_report', rutasCambiarReporte);
app.use(rutasIndex);

// Error 404
app.use((request, response) => {
    response.status(404).render('404', {
        pageTitle: 'Página no encontrada',
        path: ''
    });
});

app.listen(4000);