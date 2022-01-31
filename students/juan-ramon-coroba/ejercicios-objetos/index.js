// 1- Crear un objeto que tenga dos propiedades ('demo'  de tipo string)  
// y ('hello' de tipo boolean). Los valores serán 'hola' para demo y true 
// para 'hello'

/*const obj = {
    demo: 'hola',
    hello: true
}
// 2. Cambiar el valor de 'hello' a false
obj.hello = false
*/

//3. Crear un objeto que represente el Pais España con las propiedades 
// ( nombre, capital, continente y SMI (en $)). 
// Crear otros 4 países (EEUU, China, Nueva Zelanda y Andorra).
          
           // Mostrar en una list de HTML los países que tengan un salario modal superior a 1500$
           // Mostrar en una lista de HTML los países que pertenecen a europa (editado) 

const pais1 = {
    nombre : 'España',
    capital : 'Madrid',
    continente : 'Europa',
    SMI : 1000
}
const pais2 = {
    nombre : 'EEUU',
    capital : 'WashingtonDC',
    continente : 'América del Norte',
    SMI : 1500
}

const pais3 = {
    nombre : 'China',
    capital : 'Pekín',
    continente : 'Asia',
    SMI : 500
}

const pais4 = {
    nombre : 'Andorra',
    capital : 'Andorra la Vieja',
    continente : 'Europa',
    SMI : 2000
}
 // Añadir los objetos a un array.
const paises = [];

paises[paises.length] = pais1
paises[paises.length] = pais2
paises[paises.length] = pais3
paises[paises.length] = pais4

// Mostrar en una list de HTML los países que tengan un salario modal superior a 1500$

// tengo un array de objetos
// debería recorrer las posiciones del array una a una
// dentro de cada posición del array (en cada objeto), debo buscar la propiedad indicada que cumpla la condición

// como recorro mi array, y busco dentro de los objetos la condicion pedida en el jercicio
// se que con los arrays puedo hacer cosas de arrays. Busco un metdo que recorra los arrays
// encuentro que forEach me ayuda a recorrer un array como si fuese un for
// dentro del metodo foreEach tengo la posibilidad de hacer otra función 

/*function searchSup (arr){
    const mayorQue = arr.filter(v => v.SMI >1500)

    document.write('<ul>')
        for (i=0; i<mayorQue.length; i++){
            document.write(`<li>${mayorQue[i].nombre}</li>`)
        }
    document.write('</ul>')
}

(searchSup(paises))*/


//con el metodo filter de arrays, ha dicho que cada elemnto que tenga => a 1500 lo sume a una variable nueva
// cadaelemento es un objeto


// Mostrar en una lista de HTML los países que pertenecen a europa

// para poder mostrar los paiesede un mismo continente tengo que:
// recorrer los objetos dentro del array y seleccionar los que tengan la propiedad 'continente' 
// con el mismo valor 'Europa' todo ello pintado en una lista de html

/*function listSameContinent(arr) {
    const sameCont = arr.filter(v => v.continente == 'Europa')
    document.write('<ul>')
        for (i=0; i<sameCont.length; i++){
            document.write(`<li>${sameCont[i].nombre}</li>`)
        }
    document.write('</ul>')
}

listSameContinent(paises)*/


// Crear un objeto que tenga dos propiedades , entre ellas una  de tipo number, 
// Imprimelo por pantalla el objeto y luego imprime por pantalla solo la propiedad de tipo number. 
// Repetir el proceso pero con propiedades que tengan los tipos de datos string, boolean, null,
// undefined , array, function, objects.(easy)

/*const obj = {
    prop1: 25,
    prop2: 'edad',
    prop3: false,
    prop4: null,
    prop5:undefined,
    
}

//document.write(obj)
document.write(typeof obj.prop5)*/

// Crea una función que dado un objeto y un string que represente el nombre de la propiedad 
// de ese objeto, elimine esa propiedad del objeto.(easy)

/*let nombres = {
    name: 'name'
}
*/

/*function deleteProp (obj, str) {
        delete obj[str]
}
*/


// Crea una función que reciba por parámetro un objeto y una propiedad, y devuelva 
// true o false si esa propiedad existe o no dentro del objeto pista (hasOwn...).(easy)
 

/*function existProp (obj, str) {
    return obj.hasOwnProperty(str)
}

document.write(existProp(obj, 'name'))
*/

// Crea una función que imprima por pantalla el 'nombre: valor' de cada propiedad del objeto  
// (buscar mertodos de objeto ejmp Object Keys).(easy)

/*function printObjProps (obj) {
    return Object.entries(obj)
}

document.write(printObjProps(nombres))
*/

// Crea una función que dado un string con una hora (ej: 14:36:57) devuelva un objeto 
// con la propiedad hora, minutos y segundos e imprimelo por pantalla.(medium)

let hora = '14:36:57' //esto es un string, tenemos que hacer cosas de strings

function clock(str) { //
   let relojArr = str.split(":")
   let reloj ={
       horas: relojArr[0],
       minutos: relojArr[1],
       segundos: relojArr[2]
   }

   document.write(reloj.horas)
}

clock(hora)



