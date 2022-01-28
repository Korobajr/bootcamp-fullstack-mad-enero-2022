/*Crear una función que reciba un array de 10 números e imprima por pantalla 
true si todos son mayor de 10 o false en caso contrario.(easy)*/

const arr = [1,2,3,4,5,6,7,8,9,10]
function mayor10 (a){
let result = true;
    for (let i = 0; i <10; i++) {
        if (a[i]<10){
            result = false;
        }
      }
      return result
}
document.write(mayor10(arr));