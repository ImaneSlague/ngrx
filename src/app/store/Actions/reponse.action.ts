import { Reponse } from 'src/app/reponses/reponse.model';

import { Store, Action } from '@ngrx/store'
 
export enum ReponseActionType {
    LOAD_Reponses = "[Reponse] load Reponses",
    LOAD_Reponses_SUCCESS = "[Reponse] LOAD Reponses Success",
    LOAD_Reponses_FAIL = "[Reponse] Load Reponses Fail ",
    AddAll = "AddAll"
}

export class LoadReponses implements Action{
    readonly type = ReponseActionType.LOAD_Reponses
}
export class LoadReponsesSuccess implements Action{
    readonly type = ReponseActionType.LOAD_Reponses_SUCCESS;

 constructor(public payload: Reponse[]){

 }

}
export class LoadReponsesFail implements Action{
    readonly type = ReponseActionType.LOAD_Reponses_FAIL
    constructor(public payload: string){}
}

export type CustomeAction= LoadReponses | LoadReponsesSuccess | LoadReponsesFail;