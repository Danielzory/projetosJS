'use strict';


let DB = [
   // {'task' : 'Estudar JS', 'status': ''},
    // {'task' : 'Jogar Mass Efect 1', 'status': ''}
];

const getDb = () => JSON.parse(localStorage.getItem('list')) ?? [];
const setBank = (DB) => localStorage.setItem('list', JSON.stringify(DB))
const creatItem = (task, status='', indice) =>  {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
            <input type="checkbox" ${status} data-indice=${indice}>
            <div>${task}</div>
            <input type="button" value="X"data-indice=${indice}>
    `
    document.getElementById('todoList').appendChild(item);

}

const cleamTask = () =>{
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild)
    }
}

const render = () => {
    cleamTask()
    const DB = getDb();
    DB.forEach ((item, indice) => creatItem (item.task, item.status, indice));
}


const newTask = (evento) =>{
    const key = evento.key;
    const txt = evento.target.value;
    if (key === 'Enter'){
        const DB = getDb();
        DB.push({'task' : txt, 'status': ''})
        setBank(DB)
        render();
        evento.target.value = ''; //clear text box
    }
}
const removeItem = (indice) => {
    const DB = getDb();
    DB.splice (indice,1)
    setBank(DB)
    render();
}
const checkItem = (indice) =>{
    const DB = getDb();
    DB[indice].status = DB[indice].status === '' ? 'checked' : '';
    setBank(DB)
    render()
}
const clickItem = (evento) => {
    const element = evento.target;
    if (element.type === 'button'){
        const indice = element.dataset.indice
        removeItem(indice)
    }else if (element.type === 'checkbox'){
        const indice = element.dataset.indice
        checkItem(indice);

    }

}

document.getElementById('newItem').addEventListener('keypress', newTask);
document.getElementById('todoList').addEventListener('click', clickItem);

render();



