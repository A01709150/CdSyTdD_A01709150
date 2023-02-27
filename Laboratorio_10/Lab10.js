
//http es el módulo que permite crear un servidor que pueda atender peticiones http
const http = require('http');

const server = http.createServer( (request, response) => {    

    console.log(request.url);

    if(request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Game Store</h1>");
        response.write('<a href="/comprar">Presiona para comprar un videojuego</a>');
        response.end();
    } else if (request.url === "/comprar" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Game store</h1>");
        response.write('<form action="/comprar" method="POST">');

        let radios = '<fieldset><legend>¿Que videojuego deseas comprar?</legend>';
        radios += '<div><input type="radio" id="pokemon" name="tipo_videojuegos" value="pokemon" checked>'
        radios += '<label for="pokemon">Pokemon Legends</label></div>';
        radios += '<div><input type="radio" id="Zelda" name="tipo_videojuegos" value="Zelda">';
        radios += '<label for="verdes">Zelda Breath of the Wild</label></div></fieldset><br>';

        response.write(radios);

        response.write('<label for="code">Codigo de descuento:</label>');
        response.write('<input type="text" id="code" name="code"><br><br>');

        response.write('<input type="submit" value="Comprar">');

        response.write("</form>");
        response.write('</body></html>');
        response.end();
    } else if (request.url === "/comprar" && request.method === "POST") {

        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const tipo_videojuegos = datos_completos.split('&')[0].split('=')[1];
            const filesystem = require('fs');
            filesystem.writeFileSync('Juegos.txt', datos_completos) 
            console.log(tipo_videojuegos);
            if(tipo_videojuegos === "pokemon") {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("<h1>Gracias por tu compra</h1><br>");
                response.write('<img alt="Pokemon arceus" src="https://m.media-amazon.com/images/I/71NSivnAE6L._AC_SX385_.jpg">');
                return response.end();
            } else {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("<h1>Gracias por tu compra</h1><br>");
                response.write('<img alt="Zelda Breath of the wild" src="https://m.media-amazon.com/images/I/81o8tnkKkkL._AC_SY550_.jpg">');
                return response.end();
            }
            
        });

        
    } else {
        response.statusCode = 404;
        response.write("Ese videojuego no lo manejamos");
        response.end();
    }

    
    
});

server.listen(6001);