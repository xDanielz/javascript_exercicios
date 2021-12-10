//Novos Dados
const new_price = document.getElementById('newprice');
const new_date = document.getElementById('newdate');

//Inputs do formulário de adição de registros
const element_input = document.getElementById('addreg');

function recordChange(){
    document.getElementById('changeregister').style.display = 'block';

    //Desabilitando inputs
    for(i of element_input.children){
        if(i == '[object HTMLInputElement]'){
            i.setAttribute('disabled', 'disabled');
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
    for(i of element_input.children){
        if(i == '[object HTMLInputElement]'){
            i.removeAttribute('disabled');
        }
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
