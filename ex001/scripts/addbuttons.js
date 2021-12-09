function addbuttons(tr){

    let span_del = document.createElement('span');
    let span_upd = document.createElement('span');

    span_del.setAttribute('class', 'delbutton');
    span_upd.setAttribute('class', 'updbutton');

    span_del.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
    span_upd.innerHTML = '<ion-icon name="settings-outline"></ion-icon>';

    tr.appendChild(span_upd);
    tr.appendChild(span_del);

    span_upd.addEventListener('click',recordChange);
    span_del.addEventListener('click', delregister);
}