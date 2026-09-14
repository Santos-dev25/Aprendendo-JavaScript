const eventobotao = document.querySelector('#submit-button');
const form = document.querySelector('#my-form')

const items = document.querySelector('.items')
console.log(items)

const nameinput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const body = document.querySelector('body')

eventobotao.addEventListener('click', function(event){
    event.preventDefault();

    const nomeValue = nameinput.value;
    const emailValue = emailInput.value;

    if(nomeValue === '' || emailValue === '' ){
        return alert('Preencha todos os campos')
    }

    form.style.background = "Green";

    items.firstElementChild.textContent = nomeValue;
    items.children[1].textContent = emailValue;

    

    body.style.background = "orange"
});


