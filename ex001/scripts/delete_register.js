function delregister(){
    //Obtendo a refêrencia ao respectivo elemento pai TR
    const tr_father = this.parentElement;
    
    //Obtendo nome, e id do respectivo registro
    let regid = tr_father.children[0].innerText;
    let regname = tr_father.children[1].innerText;

    if(!confirm(`Apagar registro ${regid+' '+regname}?`)){return;}

    //Removendo o registro
    allrecords[regname].pop(Number(regid)-1);

    if(allrecords[regname].toString() == ''){
        delete allrecords[regname];
        document.getElementById('who').removeChild(document.querySelector(`option[value="${regname}"]`));
    }

    //Atualizando
    viewrecords();
}