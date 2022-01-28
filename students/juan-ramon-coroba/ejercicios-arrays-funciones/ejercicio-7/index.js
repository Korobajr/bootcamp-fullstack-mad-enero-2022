/*Crear una función que reciba un array de 
strings e imprime por pantalla el array con 
los strings capitalized, ejmp: 
let =[jose,maca,jorge], output: [Jose,Maca,Jorge].(medium)*/

let arr=['casa','perro','gato','niño']

function mayus (a){
    a.forEach((v,i,arr) => {
        arr[i] = arr[i].charAt(0).toUpperCase()+ arr[i].substring(1,v.length)
    });
return a
}

console.log(mayus(arr))