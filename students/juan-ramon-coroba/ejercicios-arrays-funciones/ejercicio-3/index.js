/*Crear una función que reciba un array de 10 números e imprima
 por pantalla true si todos son mayor de 10 o false en caso contrario
  (hay un metodo de array para esto empieza por E...).(easy)*/
const arr= [12,22,32,42,52,62,72,82,92,11];

function compMayor(a){
    return a.every(v=> v>10)
  }
  console.log(compMayor(arr))