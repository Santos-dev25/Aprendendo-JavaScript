const person = {
    firstName: "Caua",
    lastName: "Santos",
    idade: 19,
    hobbies: ["academia", "futebol", "jogos", "codigos"],
    filha: {
        nome: "Maria Luiza",
        idade: 4, //objetois dentro de um objeto
    }
}

// const firstName = person.firstName;
// const lastName = person.lastName;
// const idade = person.idade;
// const hobbies = person.hobbies;

const {firstName: primeiroNome, lastName, idade, hobbies,filha} = person;

const read = person.hobbies[3];

console.log(primeiroNome);
console.log(lastName);
console.log(idade);
console.log(hobbies);
console.log(filha);// objeto inteiro

// ou
// console.log(person.filha.nome);
// console.log(person.filha.idade);

//adicionar uma propriedade
//person.animais = 'jacaré';

console.log(person);




// const todos = [
//     {
//     id: 1,
//     descricao: 'estudar js',
//     status: false,
// },

// {
//     id: 2,
//     descricao:"comer",
//     status: false
// },
// {
//     id: 3,
//     descricao:"correr",
//     status: true
//  },
// ];

// const descricaoTarefa3 = todos[2].descricao;

// console.log(descricaoTarefa3);
