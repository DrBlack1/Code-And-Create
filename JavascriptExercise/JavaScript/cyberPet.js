// Cyber Pet - User selects the kind of animal they’d like (dog, cat, rabbit) and you have to play with it, feed it, give it drinks etc. There should be consequences across the board – if you don’t play, it gets bored, if you do, it’s happy, but gets thirsty, that kind of thing. 


class CyberPet {
    constructor (name) {
        this._name = name; 
        this._play = 100; 
        this._hunger = 100; 
        this._thirst = 100; 
        this._mood = 100; 
        this._sleep = 100; 
    }
    get name() {
        return this._name; 
    }
    get play() {
        return this._play;
    }
    get hunger() {
        return this._hunger; 
    }
    get thirst() {
        return this._thirst; 
    }
    get mood() {
        return this._mood; 
    }
    get sleep() {
        return this._sleep; 
    }
    playTime() {
        this._play += 15;
        this._hunger -= 10; 
        this._thirst -= 10; 
        this._mood += 10;  
        this._sleep -= 10; 
    }
    eat() {
        this._hunger += 10;
        this._thirst -= 5; 
        this._mood -= 5; 
        this._play -=10; 
        this._sleep -= 5;  
    }
    drink() {
        this._thirst += 10;
        this._hunger -= 5; 
        this._mood -= 5; 
        this._play -= 5; 
        this._sleep -= 10; 
    } 
    sleepTime() {
        this._play -= 10; 
        this._hunger -= 5; 
        this._thirst -= 5; 
        this._mood += 15; 
        this._sleep += 15; 
    }
}

const dog = new CyberPet("Matilda"); 

const rabbit = new CyberPet("Rosie"); 

const feed = (name, hunger) => {
    const cat = new CyberPet(name); 

    for (let i = 0; i < hunger; i++) {
        cat.eat(); 
    }
    cat.playTime(); 
    cat.drink(); 
    cat.sleepTime()

    if (cat.hunger > 0) {
        cat.eat(); 
        console.log(`I'm full, my hunger level is ${cat.hunger}, but now I want a drink, my thirst is ${cat.thirst}. After I want to play, my level is ${cat.play} and my mood will be ${cat.mood}. Don't forget about my sleep! My sleep level is ${cat.sleep}`)
    }
    else {
        console.log(`Oh no... you forgot to feed your pet and now it's dead! Hunger level is ${cat.hunger}`)
    }
}
feed('Missy', 15); 


