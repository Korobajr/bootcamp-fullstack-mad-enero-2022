let semaforo = prompt('Escribe un color del semaforo')

document.write('<div class="semaforo">');

switch (semaforo) {
    case 'rojo': {
        document.write('<div class="semaforo__circulo rojo"></div>')
        document.write('<div class="semaforo__circulo"></div>')
        document.write('<div class="semaforo__circulo"></div>')

        break;        
    }
    case 'amarillo': {
        document.write('<div class="semaforo__circulo"></div>')
        document.write('<div class="semaforo__circulo amarillo"></div>')
        document.write('<div class="semaforo__circulo"></div>')

        break;
    }
    case 'verde': {
        document.write('<div class="semaforo__circulo"></div>')
        document.write('<div class="semaforo__circulo"></div>')
        document.write('<div class="semaforo__circulo verde"></div>')

        break;
    }
        
}
document.write('</div>');

