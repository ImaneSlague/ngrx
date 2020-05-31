export const SUCCESS ='[Todos] sucess'
export const FAILED ='[Todos] failed'
export const LOAD ='[Todos] load'

export class LoadTodosAction{
    type : string = LOAD
}

export class SuccessAction{
    type :string =SUCCESS
    payload :any 
    constructor(payload :any){
        this.payload= payload
    }
}

export class FailedAction{
    type :string =FAILED
    payload :any 
    constructor(payload :any){
        this.payload= payload
    }
}
