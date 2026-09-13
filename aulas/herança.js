class animal{
    constructor(nome){
        this.nome=nome;
    }

    speak() {
        console.log(`${this.nome} fez um som!`);
    }
}


class Dog extends animal{ 
    constructor(nome){
        super(nome);
    }

    speak(){
        console.log(`Dog ${this.nome} latiu`)
    }
}

const Animal = new animal("Simba");
const dog = new Dog("Bob");
Animal.speak();
dog.speak();