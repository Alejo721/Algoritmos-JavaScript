/*es una colección ordenada de elementos no homogéneos, cada elemento puede ser de un 
tipo de dato diferente. En javascript los arreglos empiezan con el subíndice 0.
Ejemplo: La siguiente sentencia genera un arreglo con 4 elementos de distinto tipo 
var b = new Array(2.5, false, 6, "Hola");*/

/*var tabla = new Array(25,35,12,34);
var tabla = [25,35,12,34]; 
console.log(tabla);

var a = [2,4,3] , b = [5,9,7] , c = []; c = a.concat(b); 
console.log(c);

var a = [1,2,3];
var texto = a.join("-");
console.log(texto);*/

/*devuelve al fragmento del array comprendido entre los elementos cuyas posiciones pasemos 
como parámetros (inicial, final);
si se utiliza un solo parámetro es desde esa posicion hasta el final.*/
var tabla = ["lunes","martes","miercoles","jueves"]; 
var aux = tabla.slice(0,2); 
console.log(aux);
 //devuelve "lunes, martes" 
var aux2 = tabla.slice(2); 
console.log(aux2.join("="));
//devuelve "miercoles=jueves"

/*El método pop elimina el último elemento de un array y 
devuelve su valor al método que lo llamó.*/
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
console.log(myFish); // ['angel', 'clown', 'mandarin', 'sturgeon']
var popped = myFish.pop();
console.log(myFish); // ['angel', 'clown', 'mandarin' ] 
console.log(popped); // 'sturgeon'

/*El método push() añade uno o más elementos al final de un array y 
devuelve la nueva longitud del array.*/
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total);  // 4

/*El método shift() elimina el primer elemento del array y devuelve dicho elemento. 
Este método modifica la longitud del array.*/
var miPescado = ['ángel', 'payaso', 'mandarín', 'cirujano'];
console.log('miPescado antes: ' + miPescado);
// "miPescado antes: ángel,payaso,mandarín,cirujano"
var eliminado = miPescado.shift(); 
console.log('miPescado después: ' + miPescado); 
// "miPescado after: payaso,mandarín,cirujano" 
console.log('Elemento eliminado: ' + eliminado); 
// "Elemento eliminado: ángel"

/*El método unshift() agrega uno o más elementos al inicio del array, 
y devuelve la nueva longitud del array.*/
var arr = [1, 2];
arr.unshift(0); // resultado de la llamada es 3, la nueva longitud del array
// arr es [0, 1, 2]
arr.unshift(-2, -1); // = 5
// arr es [-2, -1, 0, 1, 2]
arr.unshift([-3]);
// arr es [[-3], -2, -1, 0, 1, 2]
console.log(arr);


