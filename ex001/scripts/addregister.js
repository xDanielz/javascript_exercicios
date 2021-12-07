const registerbtn = document.querySelector('input[type=button]');
registerbtn.addEventListener('click', addregister);

const element_name = document.getElementById('name');
const element_date = document.getElementById('date');
const element_price = document.getElementById('price');
var allrecords = {};

function addregister(){
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
}
