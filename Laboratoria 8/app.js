//Promedio de un arreglo
function arregloProm(arreglo) {
    let i = 0, sum = 0, ArrayLen = arreglo.length;
    while (i < ArrayLen) {
        sum= sum + arreglo[i++];
}
    return sum / ArrayLen;
}
const arreglo = [1, 2, 3];
let a = arregloProm(arreglo);
console.log(a)

//Recibe string y lo imprime en archivo de texto
function stringText(string){
    const filesystem = require('fs');
    filesystem.writeFileSync('NICE.txt', string) 
    console.log("Se creo el archivo NICE.txt")
}
let string = "LO LOGRE";
stringText(string);

//Funcion que calcula el promedio de un arregle y lo imprime en un archivo de texto
function promText(arreglo1){
    let i = 0, sum = 0, ArrayLen = arreglo1.length;
    while (i < ArrayLen) {
        sum = sum + arreglo[i++];
}
    let avg = sum / ArrayLen;
    let avgText = avg.toString();
    const filesystem = require('fs');
    filesystem.writeFileSync('GOOD.txt', avgText) 
    console.log("Se creo el archivo GOOD.txt")
}
let arreglo1 = [1, 2, 3];
promText(arreglo);

//aplicación web que al enviar una petición al servidor, devuelva una de las páginas que creaste anteriormente en tus laboratorios.

const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    const fs = require("fs");
    const buffer = fs.readFileSync("/Users/diegoperdomosalcedo/CdSyTdD_A01709150/Laboratorio 1/index.html");
    const fileContent = buffer.toString();
    response.write(fileContent);
    response.end();
});

server.listen(3024);




