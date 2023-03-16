document.write("<h2>Prueba 1</h2>");
var n = prompt("Escribe un número");

function cuadraNum(number) {
    var body = document.getElementsByTagName("body")[0];
    document.write("Cuadrados del número dado: ");
    let tabla   = document.createElement("table");
    let tblBody = document.createElement("tbody");
    var fila = document.createElement("tr");
    for (var j = 1; j <= number; j++) {
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(j ** 2);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
    }
    tblBody.appendChild(fila);
    tabla.appendChild(tblBody);
    body.appendChild(tabla);  
}

function cubeNum(number) {
    var body = document.getElementsByTagName("body")[0];
    document.write("Cubo del número dado: ");
    let tabla   = document.createElement("table");
    let tblBody = document.createElement("tbody");
    var fila = document.createElement("tr");
    for (var j = 1; j <= number; j++) {
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(j ** 3);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
    }
  
    tblBody.appendChild(fila);
    tabla.appendChild(tblBody);
    body.appendChild(tabla);  
}

cuadraNum(n);
cubeNum(n);

//----------------------------------------------------------------

document.write("<h2>Prueba 2</h2>");

var x = Math.floor(Math.random()*50);
var y = Math.floor(Math.random()*50);
var now = Date.now();
var resp = prompt(x.toString()+ " + "+ y.toString()+ "=");
let time = (Date.now() - now)/1000;

if(resp == x + y) document.write("Correcto, lo resolviste en: " + time.toString() + " segundos");
else document.write("Incorrecto, lo resolviste en: " + time.toString()+ " segundos");

//----------------------------------------------------------------

arr = [-7, 0, 42, , -1, 420, -10, 17, 0, -17];

function counter(arr){
    const cont = [0, 0, 0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) cont[0]++;
        if(arr[i] == 0) cont[1]++;
        if(arr[i] > 0) cont[2]++;
    }
    return cont;
}

const answer = counter(arr);
document.write("<h2>Prueba 3</h2>");
document.write("Cantidad de números negativos: " + answer[0]+"<br></br>");
document.write("Cantidad de ceros: " + answer[1]+"<br></br>");
document.write("Cantidad de números mayores de 0: " + answer[2]);

//----------------------------------------------------------------

document.write("<h2>Prueba 4</h2>");
document.write("Promedio por renglón de la matriz: ");
document.write("<br></br>");
document.write("[17,7,21,2] <br></br> [5,7,24,16] <br></br> [11,10,7,14] <br></br><br></br>");
matriz =
[
    [17, 7, 21, 2],
    [5, 7, 24, 16],
    [11,10,7,14]
];

function calcProm(matriz) {
    const promedio = [];
    for (let i = 0; i < matriz.length; i++){
        let suma = 0;
        for(let j = 0; j < matriz[i].length; j++){
            suma += matriz[i][j];
        }
        promedio.push(suma/matriz[i].length);
    }
    return promedio;
}

const prom = calcProm(matriz);
for (let i = 0; i < prom.length; i++) document.write("Promedio renglon "+(i+1)+": "+prom[i] + "<br></br>");

//----------------------------------------------------------------

document.write("<h2>Prueba 5</h2>");
let invVal = invertir(1234567);
document.write("1234567 invertido es: "+ invVal)
function invertir(val){
    let invVal = 0;
    while(val > 0){
        invVal *= 10;
        invVal = invVal + (val % 10);
        val = Math.floor(val/10);
    }
    return invVal;
}

//----------------------------------------------------------------

document.write("<h2>Prueba 6</h2>");
document.write("<strong>La prueba crea un objeto persona y un objeto juego, el objeto persona esta adentro del objeto juego como dueño,<br></br> Tiene funcion que da el nombre del dueño del juego <br></br></strong>");

function Persona(nom, edad, sex) {
    this.nom = nom;
    this.edad = edad;
    this.sex = sex;
}

function Juego(name, tipo, descripcion, dueño) {
    this.name = name;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.dueño = dueño;
}


var per1 = new Persona("Diego",20,"Hombre");
var jue1 = new Juego("Mario Bros","aventura/plataformas","salva a la princesa de Bowser jugando como Mario",per1);


function dueñoJuego(juego){
    document.write("El dueño del juego "+ juego.name+ " es "+ juego.dueño.nom+"<br></br>");
    
}


dueñoJuego(jue1);

