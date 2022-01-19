let a = 1;
let b = 2;

let vari1 = "hola";
let vari2 = "mundo";

document.write("<h3>suma</h3>")
document.write("<p>a+b</p>")

a + b
document.write("<p>=</p>")
document.write(a + b)

document.write("<h3>resta</h3>")
document.write("<p>a-b</p>")

a - b

document.write("<p>=</p>")
document.write(a - b)

document.write("<h3>multiplicación</h3>")
document.write("<p>a*b</p>")

a * b
document.write("<p>=</p>")
document.write(a * b)

document.write("<h3>división</h3>")
document.write("<p>a/b</p>")

a / b
document.write("<p>=</p>")
document.write(a / b)
document.write("<br></br>")

document.write(vari1 + vari2)
document.write("<br></br>")
document.write(`esto es una concatenación con plantilla literal ${vari1} ${vari2}`)
document.write("<br></br>")
document.write(`esto es una concatenación con plantilla literal ${vari1} ${vari2}`.length)
document.write("<br></br>")


var tempCelsius = prompt("grados celsius");

document.write("<p>La temperatura en grados Fº es de </p>")
document.write(tempCelsius * 1.8 + 32)
document.write("<br></br>")

document.write((tempCelsius * 1.8 + 32) >= 87)

let numero = 55;
let numeroStrin = "55";