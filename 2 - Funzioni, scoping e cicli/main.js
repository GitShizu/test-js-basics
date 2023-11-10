

const numeroRandom = (min, max) => Number(Math.floor(Math.random()*(max-min+1)+min));


const riempiArray = (numeroElementi, valoreMinimo, valoreMassimo)=>{
    arrayRiempito= [];
    for(i=0; i<numeroElementi; i++){
        const elemento = numeroRandom(valoreMinimo, valoreMassimo);
        arrayRiempito.push(elemento);
    }
    return arrayRiempito   
}


const contaPariDispari = (array)=>{
    pari=0;
    dispari=0;
    
    for(i=0; i<array.length; i++){
        const elemento = array[i];
        (elemento % 2 === 0) ? pari++ : dispari++;        
    }
    conteggioPariDispari = {
        pari: pari,
        dispari: dispari
    };
    return conteggioPariDispari
}


// Test
const arrayTest = riempiArray(15,4,126);
console.log(arrayTest, contaPariDispari(arrayTest));
