import { CustomAction } from '../store';
import { SUCCESS, FAILED } from '../Actions/todos.action';

export interface Todo{
    IdDemande : number ;
    Txt : string ;
    DateCreation : Date ;
    idUtilisateur : number;
    AttachmentFile  : string;
}

export function TodosReducer (state : Todo[],action : CustomAction){
    switch(action.type){
        case SUCCESS:  return action.payload
        case FAILED : console.log('error ',action.payload)
        return state
    }
}
