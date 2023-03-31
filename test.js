class Animal{
    ga= 'non'
    cho="meo"
    constructor(){
    //    console.log(this)
    } 
    say(){
        return "gau"
    }
}

class Cat extends Animal{
    qq = ' qwewq'
    meo(){
        return 'meo meo'
    }

    static ga(){
        return 'gaaaa'
    }
}

const ee = new Animal()

console.log(ee)

console.log(Animal.prototype)
// console.log(Cat.prototype)
// console.log(Cat.prototype)

// const example = new Cat()

// console.log(example.meo())
// console.log(example.__proto__)
// console.log(Cat)

function Non(){
    this.lp = "lp"
    this.say = function(){
        return 'hello'
    }
}

// Non.prototype.test = ()=>{
//     return 'gg' 
// }

const ko = new Non()
console.log(ko)
// console.log(ko.say())
// console.log(ko.say())

// console.log(ko)
