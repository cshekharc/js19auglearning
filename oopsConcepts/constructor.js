
function Circle(radius){
    
    this.radius = radius
    this.getCircle = function(){
        // console.log('this is a circle of radius:' +this.radius)
        console.log(`circle is of ${this.radius} cm radius`)
    }
}

// let circle1 = new Circle(5)
// console.log(circle1)
// circle1.getCircle()

function Employee(name, age, dept){
    this.name = name
    this.age = age
    this.dept = dept

    this.newEmp = function(){
        console.log('this is new employee')
    }
}

let emp1 = new Employee('Abc', 30, 'QA')
let emp2 = new Employee('XYZ', 27, 'Dev')

let emp3 = new Employee('PQR',35, 'Mngt')

console.log(emp1)
console.log(emp2)
emp2.newEmp()
console.log(emp3)

// emp2.newEmp()