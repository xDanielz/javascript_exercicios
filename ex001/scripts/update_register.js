//Novos Dados
const new_price = document.getElementById('newprice');
const new_date = document.getElementById('newdate');
//Inputs do formulário de adição de registros
const element_input = document.getElementById('addreg');
//Elementos <td> delbutton e updbutton
const element_upd = document.getElementsByClassName('updbutton');
const element_del = document.getElementsByClassName('delbutton');


function recordChange(){
    document.getElementById('changeregister').style.display = 'block';

    //Desabilitando inputs
    for(i of element_input.children){
        if(i == '[object HTMLInputElement]'){
            i.setAttribute('disabled', 'disabled');
        }
    }
    for(e of [element_upd, element_del]){
        for(btn of e){
            btn.innerText = '';
        }
    }

    //Identificadores
    const regid = this.parentElement.children[0].innerText;
    const regname = this.parentElement.children[1].innerText;

    //Dados atuais
    const old_price = allrecords[regname][regid-1].price;
    const old_date = allrecords[regname][regid-1].date;

    document.querySelector('#changeregister h1').innerHTML = `<span id="regname">${regname}</span> 
                                                             <br /> Registro Número:<span id="regid">${regid}</span>`;
    document.querySelector('#changeregister p').innerHTML = `Preço atual: ${old_price} <br /> Data atual: ${old_date}`
}

function closeRecordChange(){
    document.getElementById('result').style.display = 'block';
    document.getElementById('changeregister').style.display = 'none';

    new_price.value = '';
    new_date.value = '';

    //Habilitando inputs
    for(obj of element_input.children){
        if(obj == '[object HTMLInputElement]'){
            obj.removeAttribute('disabled');
        }
    }
    let contenthtml = ['<ion-icon name="settings-outline"></ion-icon>', '<ion-icon name="close-outline"></ion-icon>']
    let c = 0;
    for(e of [element_upd, element_del]){
        for(btn of e){
            btn.innerHTML = contenthtml[c];
        }
        c = (c + 1) % 2;
    }

}

function updateRecords(){
    let name = document.getElementById('regname').innerText;
    let id = document.getElementById('regid').innerText;
    id = Number(id)-1;
    
    if(!(new_price.value || new_date.value)){
        alert('Preencha ao menos um campo.');
        return;
    }

    if(!confirm(`Alterar registro ${id+1} de ${name}?`)){return;}

    for(c of ['price', 'date']){
        if(eval(`new_${c}.value`))
            eval(`allrecords[name][id].${c} = new_${c}.value;`)
    }

    alert('Registros alterados com sucesso!');
    
    viewrecords();
    closeRecordChange();
}
