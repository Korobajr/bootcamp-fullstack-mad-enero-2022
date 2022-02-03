// Crea una pagina html  con dos input text , escribe cualquier dato recupéra 
// los input en js  y mánda un value al localstorage y otro al session storage.
  //primero me traigo los inputs html a js, metiendolos en una variable nueva

//const inputLastname = document.getElementById('lastname').value;
//const inputName = document.getElementById('name').value;
//const inputSubmit = document.getElementById('formulario');

//inputSubmit.addEventListener('submit', (e) => {
    //e.preventDefault()
    //const inputName = document.getElementById('name');
    //const valorInputName = inputName.value;
    //const inputLastname = document.getElementById('lastname');
    //const valorInputLastname = inputLastname.value;
    //sessionStorage.setItem('nombre', valorInputName);
    //localStorage.setItem('apellido', valorInputLastname)
//})

// En tu pagina html pinta en un P por pantalla el valor que tienes en el session storage.

//const pValueSs = document.createElement('p');
//pValueSs.textContent= sessionStorage.getItem('nombre')
//document.body.appendChild(pValueSs)

// Obtener coordenadas mediante la api de  geolocalizacion, con los datos de la geolocalizacion mostrar 
// en tu html   un enlace a googlemap que te lleve directo a tu posición actual.

/*navigator.geolocation.getCurrentPosition(function(position) {

    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const enlace = document.createElement('a');
    enlace.textContent= 'enlace';
    enlace.href = `https://www.google.es/maps/@ ${latitude},${longitude}`
   
   document.body.appendChild(enlace)
  });
*/

  // Haremos una pagina web con una pagina home, la cual tendrá un form de 
  // login que tendrá tres  input uno de nombre, uno de password y un input submit, 
  // cuando el usuario inicie sesión deberá mandarnos a otra pagina html de tipo usuario
  // (para esto usaremos la api Location) donde nos aparecerá nuestro nombre y un boton de
  // cerrar sesion, cuando le demos al boton de cerrar sesion, esta nos debe vaciar 
  // nuestro localstorage y mandarnos de regreso al la pagina home( para esto usaremos 
  // la api History)
  

//Empezar por que cuando el usuario haga submit se guarde el user y la pass en el local o sesionStorage

// se me ocurre que cuando el usuario haga submit, se lance un escuchador que acceda
// a la siguiente página o url

const inputName = document.getElementById('name');
const inputPass = document.getElementById('pass');
const inputSubm = document.getElementById('form');

inputSubm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const valorInputName = inputName.value;

    const valorInputPass = inputPass.value;
    sessionStorage.setItem('nombre', valorInputName);
    sessionStorage.setItem('pass', valorInputPass)
    location.href= 'http://127.0.0.1:5500/index2.html'
})


