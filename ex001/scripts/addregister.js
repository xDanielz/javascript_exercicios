const registerbtn = document.querySelector('input[type=button]');
const element_name = document.getElementById('name');
const element_date = document.getElementById('date');
const element_price = document.getElementById('price');
registerbtn.addEventListener('click', addregister);

var allrecords = {};

function addregister(){
    let proceed = true;
    
    //Verificando se os campos estão vazios
    for(id of ['price', 'name', 'date']){
        let element = eval(`element_${id}`)
        if(!element.value){
            proceed = false;
            break;
        }
    }

    if(!proceed || element_price.value < 1){return;}

    let name = element_name.value.toUpperCase();
    let register = {
        date: element_date.value,
        price: element_price.value
    }

    if (!(name in allrecords)){
        allrecords[name] = [];
    }

    allrecords[name].push(register);

    viewrecords();

    element_price.value = '';
    element_name.value = '';

    element_name.focus();
}
