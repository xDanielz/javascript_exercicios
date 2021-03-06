const element_km = document.getElementById('km');
const element_fuel = document.getElementById('fuel');
const element_price = document.getElementById('price');
const element_average = document.getElementById('average');

const element_result = document.getElementById('result');
const element_btn = document.querySelector('input[type=button]');
const element_clean = document.querySelector('input[value=Limpar]');
const input_elements = document.querySelectorAll('input[type=number');

element_btn.addEventListener('click', () => {

    const element_fuelcost = document.getElementById('fuelcost');
    const element_cost = document.getElementById('cost');
    const element_total = document.getElementById('total');

    let km = element_km.value;
    let fuelprice = element_fuel.value;
    let average = element_average.value;
    let price = element_price.value;

    if(!(km && fuelprice && average && price)){
        alert('Preencha todos os campos');
        return;
    }
    
    element_clean.style.display = 'block';
    document.getElementById('result').style.display = 'block';

    let fuel = km * 2 / average * fuelprice;;
    let cost = km * 2 * price;
    let total = (cost - fuel).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}); 
    fuel = fuel.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    cost = cost.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    element_fuelcost.innerHTML = `<strong>${fuel}</strong>`;
    element_cost.innerHTML = `<strong>${cost}</strong>`;
    element_total.innerHTML = `<strong>${total}</strong>`;
});

element_clean.addEventListener('click', () =>{

    for(let e of input_elements){
        e.value = '';
    }

    element_clean.style.display = 'none';
    element_result.style.display = 'none';

});