console.log('eventos.js');
/*
// seletores: document.querySelector(seletor)
const seletor='table:nth-of-type(2) td';
const tds=document.querySelectorAll('td');
console.log(tds);
for (const td of tds) { // para cada td
    td.addEventListener('click', destacar);
}

function destacar() {
    // this -> contexto onde a função é invocada
    console.log(this);
}

*/
const seletor = 'table:nth-of-type(2)';
const table = document.querySelector(seletor);
table.addEventListener('click', destacar);
function destacar(e) { // 'e' de evento
    console.log(this);
    console.log(e.target); // quem especificamente foi 'clicado'
    // é um TD?
    console.log(e.target.tagName);
    if (e.target.tagName==='TD') {
        e.target.classList.toggle('destaque'); // toggle= tira e coloca
    }
}
