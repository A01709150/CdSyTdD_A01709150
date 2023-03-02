const express = require('express');

const router = express.Router();

router.get('/nuevo', (request, response, next) => {
    
    let html = `
        <form action="/soccer/nuevo" method="POST">
        <label for="jugador">Nombre del jugador de soccer:</label>
        <input type="text" id="jugador" name="jugador">
        <br>
        <label for="numero">Numero del jugador de soccer:</label>
        <input type="text" id="numero" name="numero">
        <br>
        <input type="submit" value="Enviar"> 
        </form>
    `;
    response.send(html);
});

router.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.jugador);
    response.send("El jugador de soccer se llama: " + request.body.jugador);
});


router.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.numero);
});

module.exports = router;