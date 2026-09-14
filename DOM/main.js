//seleciona apenas um elemento:

// const textoH1 = document.getElementById('add-user'); //retorna uma referencia ao elemento
// textoH1.innerText = 'Modificando H1'

const textoh1 = document.querySelector('#add-user');//retorna o elemento em si
textoh1.textContent = 'Modificando h1'

//=============================================================

//seleciona mais de um elemento:

// const todosItens = document.querySelectorAll(".item")
// console.log(todosItens[1]);

const todosItens = document.getElementsByClassName("item");
console.log(todosItens); //retorna um HTMLCollection, ruim de manipular

