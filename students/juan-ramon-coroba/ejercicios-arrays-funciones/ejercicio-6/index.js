/*Crear una función que reciba un array de números y 
devuelva un array con los que son mayores que 10.(easy)*/

const arr=[1,4,25,13,5,3]

function mayor (a){
    return a.filter(b => b>10);
}
console.log(mayor(arr))