/*Crear una función que dado un string me devuelva el caracter que hay en la mitad 
(o el anterior a la mitad en caso de que sea par). Solicitar el string al usuario. 
EJ: radar --> d; hola --> o


let saludo = 'hola'
let long = saludo.length -1/2
let i = saludo.charAt(3)*/

function mitad(a){
    if (a.length / 2 ===0){
        document.write(a.charAt(a.length/2)-1)
    } else { document.write(a.charAt(a.length/2))
    }
}

mitad('pereza')