// import { Action } from "rxjs/internal/scheduler/Action";
import{Action, ActionReducerMap} from "@ngrx/store"
import { Counterr, counterReducer } from './reducers/counter-reducer';
import { TodosReducer, Todo } from './reducers/todos.reducer';

export interface StorInterface{
    counter : Counterr,
    todos : Todo[]
}

export interface CustomAction{
    type : string,
    payload : any
}
export const red : ActionReducerMap<StorInterface>={
    counter : counterReducer,
    todos : TodosReducer
}