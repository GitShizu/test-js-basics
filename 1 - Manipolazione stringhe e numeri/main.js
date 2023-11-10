

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

const invertiStringa = (stringa)=>{
    let stringaInvertita ='';
    for(let i=stringa.length; i>0; i--){
        stringaInvertita += stringa[i];
    }
    return stringaInvertita
}

console.log(analizzaTesto('testo da analizzare'));
