/*Crear una función que reciba un parámetro de entrada y 
que imprima por pantalla true si el parámetro es un array y 
false si es otro tipo de dato, ver metodos de array!.(easy)*/

const arr=[1,2,3]

function pip(a){
   return Array.isArray(a)
    
} 

console.log(pip(arr))