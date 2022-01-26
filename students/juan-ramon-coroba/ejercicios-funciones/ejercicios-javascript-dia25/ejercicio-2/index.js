const LIMITE_AUTOPISTA = 120; // km/h

// la funcion se llama con el parametro: contaminacion = 0
// otra vez
function speedLimitByContamination (contaminacion) {
	// entramos, parametro contaminacion 0
  // Contaminacion es menor que 40% 0 a 39.999999999999~
  
  // comparamos contaminacion que sea menor que 40 
  // contaminacion: 0 < 40 = true
	if (contaminacion < 40) {
  	// ENTRAMOS AQUI POR QUE ES TRUE
    // la ejecucion se para aqui y devuelve el limite 120
  	return LIMITE_AUTOPISTA // LLEGAMOS AQUI Y DEVOLVEMOS 120 el limite de autopista definido y paramos la ejecución salimos de la funcion
  }
  
  // COntaminacion es menor que 75 0 a 74.99999999999~
  if (contaminacion < 75) {
    // la ejecucion se para aqui y devuelve el limite 90
  	return 90
  }
  
  
  // COntaminacion es mayor o igual que 75
  // no hace falta mas if por que es el caso restante
  // devuelve 70
  return 70
}

const contaminacion = parseInt(prompt ('Ingresa la cifra de contaminación'))
const v120_kmh = '<img src=./images/120.jpg';
const v90_kmh = '<img src=./images/90.png';
const v70_km = '<img src=./images/70.png';

function speedLimitByContamination (contaminacion){
    if (contaminacion < 40) {
        document.write(v120_kmh) 
    }
}

