

const invertiStringa = (stringa)=>{
    let stringaInvertita ='';
    for(let i=stringa.length -1; i>0; i--){
        stringaInvertita += stringa[i];
    }
    return stringaInvertita
}

const analizzaTesto = (stringa)=>{
    const stringaTrimmata = stringa.trim();
    let contieneJS = stringa.includes('JS') || stringa.includes('JavaScript') ? true : false;

    const oggetto = {
        originale: stringa,
        minuscolo: stringa.toLowerCase(),
        senzaSpazi: stringaTrimmata,
        numeroCaratteri: Number(stringaTrimmata.length),
        contieneJS: contieneJS,
        invertita: invertiStringa(stringa)
    }
    return oggetto
}


// // Test
// console.log(analizzaTesto(' Testo Da Analizzare JavaScript'));
