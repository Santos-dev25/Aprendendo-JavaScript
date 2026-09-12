class Person {
    constructor(Nome,Sobrenome,idade){
        this.Nome = Nome,
        this.Sobrenome = Sobrenome,
        this.idade = idade
    }

    NomeCompleto(){
        return `${this.Nome} ${this.Sobrenome}`
    }

    static speak(){
        console.log("Hello world!")
    }

}

const person = new Person('Caua', 'Santos', 23);

console.log(person);

Person.speak();
