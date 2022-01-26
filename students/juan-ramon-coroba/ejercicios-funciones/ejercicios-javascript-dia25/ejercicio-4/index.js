/*Crear una función que dado un string me devuelva un string invertido. 
Solicitar el string al usuario. EJ: hola -> aloh */

function invertir (a){
    let x = a.length;
    let y = "";
        
while( x >= 0 ){

    y = y + a.charAt(x);
    x--;
    } 
    
    return y;
}

document.write(invertir('hola'))