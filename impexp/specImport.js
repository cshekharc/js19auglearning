import { velocity } from "./specExport.js";

class vimanNagarVelo extends velocity{
    constructor(courseName, tech, fees, location, fisrtName){
        super(courseName, tech, fees)
        this.fisrtName = fisrtName
        // super(fisrtName)
        this.location = location
    }

    getVelVimanNagar(){
        console.log(`at viman nagar branch of velocity we also have 
        ${this.courseName} having ${this.tech} tech and fees ${this.fees} 
        having location ${this.location}, please contact with ${this.fisrtName}`)
    }
}

// let vel2 = new velocity("ATT", "js", "40000")
// vel2.getCourseDetails()

let vel = new vimanNagarVelo('ATT', 'js', '40000', 'viman nagar', 'shekhar')
vel.getVelVimanNagar()