function addbuttons(tr){

    let td_del = document.createElement('td');
    let td_upd = document.createElement('td');

    td_del.setAttribute('class', 'delbutton');
    td_upd.setAttribute('class', 'updbutton');

    td_del.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
    td_upd.innerHTML = '<ion-icon name="settings-outline"></ion-icon>';

    tr.appendChild(td_upd);
    tr.appendChild(td_del);

    td_upd.addEventListener('click',recordChange);
    td_del.addEventListener('click', delregister);
}
