import { CustomAction } from '../store'
import { Incre, Decre } from '../Actions/counter-action'
import { createFeatureSelector, createSelector, State } from '@ngrx/store'


export interface Counterr{
    n: number
}

let initialState  = {
    n  :0 
}

//****************************REDUCER *********************************************
export function counterReducer (state = initialState , action : CustomAction)
{
    switch(action.type)
    {
        case Incre:
            return  {
                n : state.n+action.payload
            }
        case Decre:
            return{
              n : state.n-action.payload
            }
       
        default :
            return state
        

    }
}

let counerFS = createFeatureSelector<Counterr>('counter')
export let nselector = createSelector(counerFS , State => State.n)


