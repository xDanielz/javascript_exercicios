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
            op.innerHTML = n;
            select_element.appendChild(op);
        }
    }

    //Adiciona os elementos <tr> e <td> a tabela
    for(n in allrecords){

        let n_id = 1;//Contador do id respectivo ao usuário único
        
        if(chosen != 'all' && chosen != n){continue;}

        for(let i = 0; i < allrecords[n].length; i++){
            let contents = [
                n_id, 
                n, 
                allrecords[n][i].date, 
                allrecords[n][i].price
            ]

            tr = document.createElement('tr');

            for(c of contents){
                let td = document.createElement('td');
                td.innerText = c;
                tr.appendChild(td);
            }

            addbuttons(tr);//Adiciona os botões de deletar e alterar ao elemento tr;

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
