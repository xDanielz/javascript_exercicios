function viewrecords(){   
    const select_element = document.getElementById('who');
    for(n in allrecords){
        if(select_element.innerText.indexOf(n) != -1){
            return;
        }
        let op = document.createElement('option');
        op.value = n;
        op.innerHTML = `<span style=text-transform:"capitalize">${n}<span>`;
        select_element.appendChild(op);
    }
}