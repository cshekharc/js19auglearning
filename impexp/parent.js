class Parent{
    constructor(lastName){
        this.lastName = lastName;
    }

    myLastName(){
        console.log(`Hello my last name is ${this.lastName}`);
    }
}

export default Parent