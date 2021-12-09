const registerbtn = document.querySelector('input[type=button]');
const element_name = document.getElementById('name');
const element_date = document.getElementById('date');
const element_price = document.getElementById('price');
registerbtn.addEventListener('click', addregister);

var allrecords = {};

function addregister(){
    let proceed = true;
    let deflt = element_name.style.border;

    for(id of ['price', 'name', 'date']){
        let element = eval(`element_${id}`)
        if(!element.value){
            proceed = false;
            element.style.border = '1px solid red';
            continue;
        }
        element.style.border = deflt;
    }

    if(!proceed){return;}

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

    for(id of ['price', 'name', 'date']){
        let element = eval(`element_${id}`)
        element.value = '';
    }

    element_name.focus();
}
