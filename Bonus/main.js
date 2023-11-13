

const trasformaOggettoInLista = (oggetto)=>{
    const lista = document.createElement('ul');
    const chiavi = Object.keys(oggetto);
    for(i=0; i<chiavi.length; i++){
        const chiave = chiavi[i];
        const valore = oggetto[chiave];
        const voceLista = document.createElement('li');
        voceLista.innerText = `${chiave}: ${valore}`;
        lista.appendChild(voceLista);
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
        const mostraRisultato = document.createElement('p');
        mostraRisultato.appendChild(trasformaOggettoInLista(inputOggetto));
        document.body.appendChild(mostraRisultato);
        }else{
            alert('Inserisci del testo prima di inviare!')
        }
        
    })
})

