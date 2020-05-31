
export const Incre ='[counter]increament' 
export const Decre ='[counter]decreament' 

export class IncreamentAction {
    type : string = Incre
    payload : number
    constructor( payload : number){
       this.payload= payload
    }
}

export class DecreamentAction {
    type : string = Decre
    payload : number
    constructor( payload : number){
       this.payload= payload
    }
}