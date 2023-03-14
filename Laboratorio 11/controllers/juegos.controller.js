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

    request.session.ultimo_juego= juego.juego;

    response.redirect('/juegos/');
};


exports.listar = (request, response, next) => {

    //Crear variable para que si no hay cookie se cuente con un string para hacer el split
    let cookies = request.get('Cookie') || '';
    
    let consultas = cookies.split(';')[0].split('=')[1] || 0;
    
    consultas++;
    
    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    Juego.fetchAll().then(([rows, fieldData])=> {
        console.log(rows);

        response.render('lista', {
            juegos:rows,
            ultimo_juego: request.session.ultimo_juego || '',
        });
    })
    .catch(err => {
        console.log(err);
    })
};