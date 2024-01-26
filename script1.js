const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return "Гав-гав";
    }
}

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return "Чик-чирик";
    }
}

function makeDomestic(isDomestic){
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
    this.isDomestic = isDomestic;
    return this;
}

let res = makeDomestic.call(bird, false);
console.log(bird);

res = makeDomestic.apply(bird, [true]);
console.log(bird);

res = makeDomestic.bind(dog)
res(true);
console.log(dog);