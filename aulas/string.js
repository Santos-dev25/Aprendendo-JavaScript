const names = ["Felipe","joao","Julia",10,false];
const joao = names[1];


names.pop();
names.pop();

names.push("Pedro");

names.unshift("Colombia");
//shift remove

names[3] = "Gustavo";

console.log(names);

const tamanho = names.length;
console.log(tamanho);
