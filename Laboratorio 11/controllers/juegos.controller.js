const Juego = require('../models/models.juego');

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const juego = new Juego({
        juego: request.body.juego,
        descripcion: request.body.descripcion,
        precio: request.body.precio,
    });

    juego.save();

    response.redirect('/juegos/');
};



exports.listar = (request, response, next) => {
       response.render('lista', {juegos: Juego.fetchAll()});
};