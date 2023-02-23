//Promedio de un arreglo
function arregloProm(arreglo) {
    var i = 0, sum = 0, ArrayLen = arreglo.length;
    while (i < ArrayLen) {
        sum= sum + arreglo[i++];
}
    return sum / ArrayLen;
}
var arreglo= [1, 2, 3];
var a = arregloProm(arreglo);
console.log(a)

//Recibe string y lo imprime en archivo de texto
function stringText(string){
    const filesystem = require('fs');
    filesystem.writeFileSync('NICE.txt', string) 
    console.log("Se creo el archivo NICE.txt")
}
var string = "LO LOGRE";
stringText(string);

//Funcion que calcula el promedio de un arregle y lo imprime en un archivo de texto
function promText(arreglo){
    var i = 0, sum = 0, ArrayLen = arreglo.length;
    while (i < ArrayLen) {
        sum = sum + arreglo[i++];
}
    var avg = sum / ArrayLen;
    var avgText = avg.toString();
    const filesystem = require('fs');
    filesystem.writeFileSync('GOOD.txt', avgText) 
    console.log("Se creo el archivo GOOD.txt")
}
var arreglo = [1, 2, 3];
promText(arreglo);









