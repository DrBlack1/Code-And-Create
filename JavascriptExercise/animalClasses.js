class Animal {
    constructor(name, hunger, thirst){
        this._name = name;
        this._hunger = hunger;
        this._thirst = thirst;
    }
    get name(){
        return this._name;
    }
    get hungerlvl(){
        return this._hunger;
    }
    get thirstlvl(){
        return this._thirst;
    }    
    eat(){
        this._hunger--
        console.log(this._hunger)
    }
    drink(){
        this._thirst--
        console.log(this._thirst)
    }
};

const rosie = new Animal("Rosie", 70, 20)
rosie.eat()

class Bunny extends Animal {
    constructor(name, hunger, thirst, hop){
        super(name, hunger, thirst)
        this._hop = hop;
    }
    get hop(){
        return this._hop;
    }
    hops(){
        this._hop++
        console.log(this._hop)
    }
};

const hoppy = new Bunny("hoppy", 20, 60, 2)
hoppy.hops()

class Dog extends Animal {
    constructor(name, hunger, thirst, woof){
        super(name, hunger, thirst)
        this._woof = woof;
    }
    get woof(){
        return this._woof;
    }
}

const spike = new Dog("Spike", 80, 50, "Woof!")
console.log(spike)

class Cat extends Animal {
    constructor(name, hunger, thirst, purr){
        super(name, hunger, thirst)
        this._purr = purr;
    }
}

const john = new Cat("John", 30, 50, "Meow!")
console.log(john)