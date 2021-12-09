//Novos Dados
const new_price = document.getElementById('newprice');
const new_date = document.getElementById('newdate');


function recordChange(){
    document.getElementById('changeregister').style.display = 'block';
    document.getElementById('result').style.display = 'none';

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
}

function updateRecords(){
    let name = document.getElementById('regname').innerText;
    let id = document.getElementById('regid').innerText;
    id = Number(id)-1;
    
    allrecords[name][id].price = new_price.value;
    allrecords[name][id].date = new_date.value;

    alert('Registros alterados com sucesso!');

    viewrecords();
    closeRecordChange();
}
