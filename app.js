const express = require( 'express' );
const app = express(); // crea una instancia de una aplicación de express
const nunjucks = require ('nunjucks');

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views', { noCache: true }); // apunta a nunjucks al directorio correcto para los templates

app.use(function (req, res, next) {
    // haz tu logueo aquí
    // llama a `next`, o sino tu app va a ser un agujero negro - recibiendo pedidos pero nunca respondiendo adecuadamente.
    console.log(req)
    next()
})

app.get("/special",function (req, res, next) {
    console.log('haz llegado a un área especial')
    return res.render('index', {
        title: 'Un ejemplo',
        people: [
            {
                name: 'Matias Sanchez'
            },
            {
                name: 'Carlos Franchella'
            },
            {
                name: 'Oriana Chacon'
            }, 
        ]
        
    }, function(err, output){
        console.log(output);
        res.send(output);
    });
})

app.listen(3000);



