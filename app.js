const express = require( 'express' );
const app = express(); // crea una instancia de una aplicación de express
const nunjucks = require ('nunjucks');


app.use(function (req, res, next) {
    // haz tu logueo aquí
    // llama a `next`, o sino tu app va a ser un agujero negro - recibiendo pedidos pero nunca respondiendo adecuadamente.
    console.log(req)
    next()
})

app.use("/special",function (req, res, next) {
    console.log('haz llegado a un área especial')
    next()
})
nunjucks.configure('views', {noCache:true});
nunjucks.render('index.html', {
    title: 'Un ejemplo',
    people: [
        {
            name: 'Matias Sanchez'
        },
        {
            name: 'Carlos Franchella'
        },
        {
            name: 'Oriana Noseelappellido'
        }, 
    ]
    
}, function(err, output){
    console.log(output);
});