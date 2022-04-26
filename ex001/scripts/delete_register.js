function delregister(){
    //Obtendo a refêrencia ao respectivo elemento pai TR
    const tr_father = this.parentElement;
    
    //Obtendo nome, e id do respectivo registro
    let regid = tr_father.children[0].innerText;
    let regname = tr_father.children[1].innerText;

    if(!confirm(`Apagar registro ${regid} de ${regname}?`)){return;}

    //Removendo o registro
    for(reg in allrecords[regname]){
        if(allrecords[regname][reg].id == regid){
            allrecords[regname].splice(reg, 1);
            break;
        }
    }
    //Caso acabe todos os registros de um determinado nome ele é apagado dos registros
    // e seu nome é removido do elemento <select>
    if(allrecords[regname].toString() == ''){
        delete allrecords[regname];
        document.getElementById('who').removeChild(document.querySelector(`option[value="${regname}"]`));
    }

    //Atualizando
    viewrecords();
}