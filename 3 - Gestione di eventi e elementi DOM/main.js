
window.addEventListener('load', ()=>{
    const input = document.getElementById('testoUtente');
    const bottoneInvio = document.getElementById('bottoneInvio');
    bottoneInvio.addEventListener('click', ()=>{
        if(input.value !== ''){
        const mostraRisultato = document.createElement('p')
        mostraRisultato.innerText = input.value;
        document.body.appendChild(mostraRisultato);
        }else{
            alert('Inserisci del testo prima di inviare!')
        }
    })
})

