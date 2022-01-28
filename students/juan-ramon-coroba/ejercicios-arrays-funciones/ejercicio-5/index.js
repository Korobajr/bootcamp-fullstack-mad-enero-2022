/*Crear una función para ordenar un array de 
números desordenados de mayor a menor.(easy)*/
let arr= [1,4,7,2,25,11]
function orden(a){
    return a.sort((a,b)=>b-a);
}

console.log(orden(arr))