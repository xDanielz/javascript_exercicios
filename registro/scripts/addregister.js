const registerbtn = document.querySelector('input[type=button]');
const element_name = document.getElementById('name');
const element_date = document.getElementById('date');
const element_price = document.getElementById('price');
registerbtn.addEventListener('click', addregister);

var allrecords = {};
var allids = {};

function addregister(){
    let proceed = true;
    
    //Verificando se os campos estão vazios
    for(id of ['price', 'name', 'date']){
        let element = eval(`element_${id}`)
        if(!element.value){
            alert('Preencha os campos')
            proceed = false;
            break;
        }
    }

    if(!proceed || element_price.value < 1){return;}

    let name = element_name.value.toUpperCase();

    let register = {
        id: 0,
        date: element_date.value,
        price: element_price.value
    }
    //Se não há um atributo com o nome adicione-o e inicie o contador de ID
    if (!(name in allrecords)){
        allrecords[name] = [];
        allids[name] = 0;
    }
    
    allids[name]++;
    register.id = allids[name];//Adicionado id ao objeto registro
    allrecords[name].push(register);

    viewrecords();//Atualizando exibição de registros

    //Limpando campos
    element_price.value = '';
    element_name.value = '';

    element_name.focus();
}
