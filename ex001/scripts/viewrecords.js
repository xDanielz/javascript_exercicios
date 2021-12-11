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

        if(chosen != 'all' && chosen != n){continue;}

        //Conteúdos respectivo ao registro que irão preencher o elementos td
        for(let i = 0; i < allrecords[n].length; i++){
            //Formatando data
            let unformateddate = allrecords[n][i].date;
            let listdate = [unformateddate.slice(8,10), unformateddate.slice(5,7), unformateddate.slice(0,4)]
            let date = listdate.join('/<wbr/>')

            //Formatando Preço
            let price = Number(allrecords[n][i].price).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

            //Lista com os dados a serem adicionados nas td
            let contents = [
                allrecords[n][i].id, 
                n, 
                date,
                price
            ]

            tr = document.createElement('tr');

            //Adicionando o conteúdo aos tds
            for(c in contents){
                let td = document.createElement('td');
                td.innerHTML = contents[c];
                if(c == 3){td.className = 'tdprice';}
                tr.appendChild(td);
            }

            addbuttons(tr);//Adiciona os botões de deletar e alterar ao elemento tr;

            tbody_element.appendChild(tr);
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

    total_element.innerText = total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    amount_element.innerText = amount;
}
