const element_km = document.getElementById('km');
const element_fuel = document.getElementById('fuel');
const element_price = document.getElementById('price');
const element_average = document.getElementById('average');
const element_btn = document.querySelector('input[type=button]');

element_btn.addEventListener('click', () => {

    const element_fuelcost = document.getElementById('fuelcost');
    const element_cost = document.getElementById('cost');

    let km = element_km.value;
    let fuelprice = element_fuel.value;
    let average = element_average.value;
    let price = element_price.value;

    if(!(km && fuelprice && average && price)){
        alert('Preencha todos os campos');
        return;
    }

    document.getElementById('result').style.display = 'block';
    let fuel = (km * 2/average * fuelprice).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    let cost = (km*2*price).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});;
    element_fuelcost.innerHTML = `<strong>${fuel}</strong>`;
    element_cost.innerHTML = `<strong>${cost}</strong>`;
});