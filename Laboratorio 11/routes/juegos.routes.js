const express = require('express');

const router = express.Router();

const razas = [
    { 
        raza: "Zelda Breath of the Wild", 
        imagen: "https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg", 
        descripcion: "Explora y descubre un mundo lleno de aventuras en The Legend of Zelda: Breath of the Wild, una nueva saga que rompe los esquemas de la aclamada serie."
    }, 
    {
        raza: "Pokemon Scarlet",
        imagen: "https://sm.ign.com/ign_latam/cover/p/pokemon-sc/pokemon-scarlet_cd8u.jpg", 
        descripcion: "Explora Paldea en la busqueda de encontrar que son los pokemones tan raros que estan por esta nueva región. "
    }, 
    { 
        raza: "Pokemon Violet",
        imagen: "https://www.latercera.com/resizer/JiTuUlBOY2lIe31moj1lzBZYQaA=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/JSI7T5BENZBTBOARJPYJFHCMIE.jpg", 
        descripcion: "Explora Paldea en la busqueda de encontrar que son los pokemones tan raros que estan por esta nueva región. "
    },
    { 
        raza: "Luigi's Mansion",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        raza: "Mario Odyssey",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_951095-MLA29062841364_122018-O.jpg", 
        descripcion: "Acompaña a Mario en una aventura enorme en 3D y rescata a la princesa Peach de su boda con Bowser."
    } 
];

router.get('/', (request, response, next) => {
    response.render('lista', {razas: razas});
});

module.exports = router;