
// Crea un array de objetos que tenga dos propiedades : description (un string cualquiera que nos inventemos) 
// y votes: un number con el contador de votaciones.

const obj1 = {
    description: 'Jose',
    votes: 9
}

const obj2 = {
    description: 'Paco',
    votes: 5
}

const obj3 = {
    description: 'Chema',
    votes: 10
}
const arr = [];
arr.push(obj1,obj2,obj3);

// Pintar en el HTML una lista con el array de objetos. Cada elemento de la lista tienen que mostrar la descripción
// y un botón que tenga el icono de thumbs-up y dentro del botón también se muestre el número de votos.
let Ul = document.createElement('ul')
document.body.appendChild(Ul)

function createList (arr){ // funcion que cuando sea invocada cree tantas estructuras html como elementos tenga el array
    arr.forEach(element => { // recorro el parametro array, cada elemento del array, es decir cada objeto
        let liNew = document.createElement('li') // variable que crea un li html
        liNew.textContent= element.description // cada li creado se rellena con el valor, description de cada elemento(onjeto)
        let buttonVote = document.createElement('button') //variable que crea un boton html
        buttonVote.textContent = element.votes // el boton creado se rellena con el valor votes del objeto (elemento)
        Ul.appendChild(liNew) //inserto el li creado en js hacia Html
        Ul.appendChild(buttonVote) // inserto el boton en el html
    });
}

createList(arr)

// Cuando se pulse el botón, añadir uno a las votaciones actualizando el HTML

function actVote (){
    buttonVote.add
}

