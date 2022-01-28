/*Crea un array  de música rock que contenga subgeneros [punk, metal, hardcore], 
luego un array de los géneros musicales [rock, pop, country] en el array de los géneros 
musicales 'rock' será el array de subgéneros de música rock, luego crea un array de banda 
que contenga un string "metallica" y el array de géneros y con ese array de banda muestra por 
pantalla el nombre de la banda "metallica" y el subgénero "metal".(easy)*/


const rock = ['punk','metal','hardcore']

const genero_musical = [rock, 'pop', 'country']

const banda =['metallica', genero_musical] 

console.log(banda[0] ,banda[1][0][1])