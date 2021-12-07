function viewrecords(){   
    const select_element = document.getElementById('who');
    select_element.addEventListener('change', viewrecords);
    const tbody_element = document.getElementsByTagName('tbody')[0];
    const chosen = select_element.value;
    tbody_element.innerHTML = '';

    //Parte responsável por adicionar as opções ao elemento select
    for(n in allrecords){
        if(select_element.innerText.indexOf(n) == -1){
            let op = document.createElement('option');
            op.value = n;
            op.innerHTML = `<span style=text-transform:"capitalize">${n}<span>`;
            select_element.appendChild(op);
        }
    }

    //Parte responsável por adicionar o conteúdo a tabela
    for(n in allrecords){
        let n_id = 1;
        
        if(chosen != 'all' && chosen != n){continue;}

        for(let i = 0; i < allrecords[n].length; i++){
            let tr = document.createElement('tr');
            tbody_element.appendChild(tr);

            let td_id = document.createElement('td');
            td_id.innerText = n_id;

            let td_name = document.createElement('td')
            td_name.innerText = n;

            let td_date = document.createElement('td');
            td_date.innerText = allrecords[n][i].date

            let td_price = document.createElement('td');
            td_price.innerText = allrecords[n][i].price
    
            tr.appendChild(td_id);
            tr.appendChild(td_name);
            tr.appendChild(td_date);
            tr.appendChild(td_price);

            n_id++;
        }
    }
}