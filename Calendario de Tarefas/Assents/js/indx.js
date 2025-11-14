const inp = document.querySelector('.enviar');
const btn = document.querySelector('.enviar-btn');
const list = document.querySelector('.list');
let mylist = [];



function adinp() {
    mylist.push({
        tarefa: inp.value,
        concluida: false
    });
    inp.value = '';
    lookitem();
}

function lookitem() {
    let newli = '';
    mylist.forEach((item, index) => {
        newli = newli + `
            <li class="list-element ${item.concluida && "done"}">
                    <img src="img/checked.png" alt="Chek-na-tarefa" onclick="change(${index})">
                    <p>${item.tarefa}</p>
                    <img src="img/trash.png" alt="tarefa-para-lixo" onclick="deleteitem(${index})">
            </li> 
        `
    })
    list.innerHTML = newli;

    localStorage.setItem('lista', JSON.stringify(mylist));
}
function reload() {
    const work = localStorage.getItem('lista');
    if (work) {
        mylist = JSON.parse(work);
    }

    lookitem();
}
function change(index) {
    mylist[index].concluida = !mylist[index].concluida;
    lookitem();
}
function deleteitem(index) {
    mylist.splice(index, 1)
    lookitem();
}
reload();
btn.addEventListener('click', adinp);