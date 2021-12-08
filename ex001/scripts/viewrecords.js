function viewrecords(){   

    const select_element = document.getElementById('who');
    select_element.addEventListener('change', viewrecords);
    const tbody_element = document.getElementsByTagName('tbody')[0];
    const chosen = select_element.value;
    tbody_element.innerHTML = '';

    //Adiciona as opções ao elemento select
    for(n in allrecords){

        if(select_element.innerText.indexOf(n) == -1){
            let op = document.createElement('option');
            op.value = n;
            op.innerHTML = `<span style=text-transform:"capitalize">${n}<span>`;
            select_element.appendChild(op);
        }
    }

    //Adiciona os elementos <tr> e <td> a tabela
    for(n in allrecords){

        let n_id = 1;//Contador do id respectivo ao usuário único
        
        if(chosen != 'all' && chosen != n){continue;}

        for(let i = 0; i < allrecords[n].length; i++){

            let tr = document.createElement('tr');
            let td_id = document.createElement('td');
            let td_name = document.createElement('td')
            let td_date = document.createElement('td');
            let td_price = document.createElement('td');
            
            td_id.innerText = n_id;
            td_name.innerText = n;
            td_date.innerText = allrecords[n][i].date
            td_price.innerText = allrecords[n][i].price
            
            tr.appendChild(td_id);
            tr.appendChild(td_name);
            tr.appendChild(td_date);
            tr.appendChild(td_price);
            tbody_element.appendChild(tr);

            n_id++;
        }
    }

    //Calculo do total e quantia de registro
    const amount_element = document.getElementById('amount');
    const total_element = document.getElementById('total');

    let total = 0; amount = 0;
    for(n in allrecords){
   
        if(chosen != 'all' && chosen != n){continue;}

        for(let i = 0; i < allrecords[n].length; i++){
            total += Number(allrecords[n][i].price);
            amount ++;
        }
    }

    total_element.innerText = total;
    amount_element.innerText = amount;
}
