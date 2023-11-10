
const invertiStringa = (stringa)=>{
    let stringaInvertita ='';
    for(let i=stringa.length -1; i>=0; i--){
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

const trasformaOggettoInLista = (oggetto)=>{
    const lista = document.createElement('ul');
    const chiavi = Object.keys(oggetto);
    for(i=0; i<chiavi.length; i++){
        const chiave = chiavi[i];
        const valore = oggetto[chiave];
        const voceLista = document.createElement('li');
        voceLista.innerHTML = `${chiave} ${valore}`;
    }
    return lista
}


// Load
window.addEventListener('load', ()=>{                               
    const input = document.getElementById('testoUtente');
    const bottoneInvio = document.getElementById('bottoneInvio');
    // Click
    bottoneInvio.addEventListener('click', ()=>{
        if(input.value !== ''){
        const inputOggetto = analizzaTesto(input.value);
        console.log(inputOggetto);
        const mostraRisultato = document.createElement('p');
        mostraRisultato.innerHTML= trasformaOggettoInLista(inputOggetto);
        document.body.appendChild(mostraRisultato);
        }else{
            alert('Inserisci del testo prima di inviare!')
        }
        
    })
})

