
/*for(let i=0; i<100; i++ ){
    document.write(`<p> ${i}</p>`);
}


let i=0;
while(i<=100){
    document.write(`<p> ${i}</p>`);
    i++;
}


for(let i=0; i<100; i++ ){
    document.write(`<div class="box"> ${i}</div>`);
}


for(let i=0; i<100; i++ ){
    if (i%2===0) {document.write(`<div class="box"> ${i} ${i%2===0} </div>`);
    }else {
    document.write(`<div class="box2"> ${i} ${i%2===1} </div>`)
    }
}

//for (let i= 2 ; i< 100; i+=i){ //i=i+i, i=i*2, i*=2, i=i**2, i**=2

for(let i=1; i<100; i++){
    let result= 2**i;
    document.write(result +',')
}
    if (word.charAt(i)=='a'){
        totalVocales= totalVocales+1
    } else if {(word.charAt(i)=='e')
        totalVocales= totalVocales+1}
    } else if {(word.charAt(i)=='i')
        totalVocales= totalVocales+1
    } else if {(word.charAt(i)=='o')
        totalVocales= totalVocales+1
    } else if {(word.charAt(i)=='o'){
        totalVocales= totalVocales+1
    }
        
    }
}


let word = prompt('Escribe aquí una palabra')
let numberWords = word.length
let totalVocales = 0

for(let i=0; i<numberWords; i++){
    if(word.charAt(i)=='a'){
        totalVocales= totalVocales+1
    }else if(word.charAt(i)=='e'){
        totalVocales= totalVocales+1
    }else if(word.charAt(i)=='i'){
        totalVocales= totalVocales+1
    }else if(word.charAt(i)=='o'){
        totalVocales= totalVocales+1
    }else if(word.charAt(i)=='u'){totalVocales= totalVocales+1
    }
}
    
document.write(totalVocales)

*/

let multiplicando = parseInt(prompt("escribe algo"))
let i = 1;

while(i<=10){
    let resultado= 0
    resultado= multiplicando * i
    document.write(`${multiplicando}`)
    i++
}




