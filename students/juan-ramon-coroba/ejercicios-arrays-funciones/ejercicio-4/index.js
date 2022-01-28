/*Crea una función que reciba un array y una 
palabra e imprima true o false si palabra existe 
o no dentro del array (ver metodo empieza por i).
(easy)*/
const arr= ['hola', 'adios','chao']

function comp(a,b){
    return a.includes(b);
}

console.log(comp(arr, 'acosa'))