const express = require( 'express' );
const app = express(); // crea una instancia de una aplicación de express


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