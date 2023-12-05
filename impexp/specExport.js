class velocity{
    constructor(courseName, tech, fees){
        this.courseName = courseName
        this.tech = tech
        this.fees = fees
    }

    // constructor(fisrtName){
    //     this.fisrtName = fisrtName
    // }
    
    getCourseDetails(){
        console.log(`i have choose ${this.courseName} having tech ${this.tech} 
        and fees: ${this.fees}`)
    }
}

export {velocity}

// let vel1= new velocity("ATT", "Javascript", "40000")
// vel1.getCourseDetails()