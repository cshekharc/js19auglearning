class Car{
    constructor(name, brand, engine){
        this.name = name
        this.brand = brand
        this.engine = engine
    }

    myCar(){
        console.log(`${this.name} is my car of ${this.brand} brand,
        having ${this.engine} cc engine`)
    }

    greetMyCar(){
        console.log('today is cars first day')
    }
}

let car1 = new Car('tiago', 'tata', 1200)
let car2 = new Car('dzire', 'maruti', 1200)

console.log(car1)
car1.myCar()
car1.greetMyCar()

console.log("________________________")
console.log(car2)
car2.myCar()
car2.greetMyCar()