// npm install express

var express = require('express');
var app = express(); //Contenedor de Endpoints o WS Restful

// Las dos lineas permiten que pueda recibir json y resp json
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//Express permite crear servicios web

app.get("/", async function (request, response) {

    r ={
      'message':'Nothing to send'
    };

    response.json(r);
});

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
