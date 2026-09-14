
const nameinput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const button = document.querySelector('#submit-button');

const error = document.querySelector('.msg')
const items = document.querySelector('.items')

button.addEventListener('click', (e) => {
    e.preventDefault()

    const nomeValue = nameinput.value;
    const emailValue = emailInput.value;

    if(nomeValue === '' || emailValue === ''){
        error.textContent = 'Preencha todos os campos'
        error.classList = "error";

        setTimeout(() =>{
        error.textContent = "";
        error.classList = "";
        },3000);
        return;
    }

    const li = document.createElement("li");

    li.classList = "item";
    li.innerHTML = `Nome: ${nomeValue}<br />Email: ${emailValue}`;

    items.appendChild(li);

    nameinput.value ='';
    emailInput.value = '';
})