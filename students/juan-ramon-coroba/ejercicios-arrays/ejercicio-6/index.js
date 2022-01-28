/*Crea una función que reciba un array y una palabra y devuelva 
true o false si palabra existe o no dentro del array.(easy)*/
const arr= ['casa', 'perro','gato']
function wordInside (a,b){
    for (let i = 0; i <= arr.length; i++) {
        if (a[i]===b){result= true}else{result=false}
      } 
   return document.write(result)  
}

wordInside(arr, 'oso')