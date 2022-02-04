
// Crea un array de objetos que tenga dos propiedades : description (un string cualquiera que nos inventemos) 
// y votes: un number con el contador de votaciones.

const obj1 = {
    description: 'Jose',
    votes: 0
}

const obj2 = {
    description: 'Paco',
    votes: 0
}

const obj3 = {
    description: 'Chema',
    votes: 0
}
const arr = [];
arr.push(obj1,obj2,obj3);

// Pintar en el HTML una lista con el array de objetos. Cada elemento de la lista tienen que mostrar la descripción
// y un botón que tenga el icono de thumbs-up y dentro del botón también se muestre el número de votos.
let Ul = document.createElement('ul')
document.body.appendChild(Ul)

function createList (element){ // funcion que cuando sea invocada cree tantas estructuras html como elementos tenga el array
     // recorro el parametro array, cada elemento del array, es decir cada objeto
        let liNew = document.createElement('li') // variable que crea un li html
        liNew.textContent= element.description // cada li creado se rellena con el valor, description de cada elemento(onjeto)
        let buttonVote = document.createElement('button') //variable que crea un boton html
        buttonVote.textContent = element.votes // el boton creado se rellena con el valor votes del objeto (elemento)
        Ul.appendChild(liNew) //inserto el li creado en js hacia Html
        Ul.appendChild(buttonVote) // inserto el boton en el html
        let cont= 0; // inicio una variable contador a 0
        buttonVote.addEventListener('click', () =>{ // añado un escuchador al boton de contador de votos
            cont++; // cada activacion se añade 1 y se suma a la variable cont
            buttonVote.textContent= cont // igualo la variable cont al valor de texto del boton que cuenta los votos
        })
}

createList(arr)
//crear el input y el botn en html
//traerme los dos elementos

arr.forEach(element => {
    createList(element);
});

const btnone = document.querySelector('.buttonClass');
const input = document.querySelector('.inputClass');

btnone.addEventListener('click', ()=>{ 
    const mari = {
        description: input.ariaValueMax,
        vote: 0
    };
    createList(mari)
    arr.push(mari)
} )
/*
const buttonInput = document.createElement('button');
document.body.appendChild(buttonInput)
buttonInput.addEventListener('click', () =>{
    document.createElement('object')
})*/
// Cuando se pulse el botón, añadir uno a las votaciones actualizando el HTML
// Añadir un input y un botón para poder crear un nuevo objeto para votar. En este punto podemos vaciar el array 
// de objetos inicial, ya que los temas de votación los introduciremos desde la interfaz
