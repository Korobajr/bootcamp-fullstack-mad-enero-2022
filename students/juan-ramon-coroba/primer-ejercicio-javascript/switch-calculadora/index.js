const op1 =  parseFloat(prompt('Introduzca eloperando 1'));
const operation = propmt('Introduzca la operación. EJ: +,-,*,/');
const op2 = parseFloat(prompt('Introduzca eloperando 2'));
if(!isNaN(op1) && !isNan(op2)) {
    switch(operation){
        case '+': document.write(`<p>${op1} ${operation} ${op2} = ${op1+op2}</p>`); break;
        case '-': break;
        case '*': break;
        case '/': break;
        default: document.write('<h1>Operación no reconocida</h1>');
    }
else 