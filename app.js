const express = require('express');
const app = express(); // crea una instancia de una aplicación de express
const nunjucks = require('nunjucks');
const routes = require('./routes');


app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views', { noCache: true }); // apunta a nunjucks al directorio correcto para los templates
app.use('/', routes);
app.use(express.static('public'))
app.listen(3000);



