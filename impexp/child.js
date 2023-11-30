import Parent from "./parent.js";
class Child extends Parent{
    constructor(lastName, name){
        super(lastName)
        this.name = name
    }
    myName(){
        console.log(`My name is ${this.name} ${this.lastName}`);
    }
}

export default Child