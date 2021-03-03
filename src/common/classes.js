import { extend } from "jquery"

class car {
    constructor() {
        this.type = 'car'
    }
    drive(){
        console.log(this.type);
        return this.type;
    }
}

class Hatchback extends car{
    constructor(){
        super()
        this.type = 'Hatchback'
    }
}



class Suv extends car{
    constructor(){
        super()
        this.type = 'Suv'
    }
}

export {
    car, 
    Hatchback,
    Suv
}