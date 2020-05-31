
import { Reponse } from 'src/app/reponses/reponse.model'
import * as ActionsFile from '../Actions/reponse.action'
import { ReponseActionType } from '../Actions/reponse.action'
import * as fromRoot from 'src/app/store/state/app-state'

import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface ReponseState{
    Reponses : Reponse[],
    loading: boolean,
    loaded : boolean,
    error : string
}

export interface AppState extends fromRoot.AppState{
 Reponses : ReponseState
}

export const initialState : ReponseState ={
    Reponses :[],
    loading: false,
    loaded : false,
    error : ' ',
}
  
export function reponseReducer(state = initialState, action : ActionsFile.CustomeAction) : ReponseState{
     switch(action.type){
         case ActionsFile.ReponseActionType.LOAD_Reponses_SUCCESS :{
             return {
                ... state,
                 loading: false,
                 loaded : true,
                 Reponses : action.payload
             }
         }
         case ActionsFile.ReponseActionType.LOAD_Reponses_FAIL :{
             return {
                 ... state,
                 Reponses :[],
                 loading :false,
                 loaded :false,
                 error : action.payload
             }
         } 
         default : {
             return state;
         }
     }
    }
  const getreponsesFeatursState = createFeatureSelector<ReponseState>(
      "Reponses"
  )
   export const getreponses = createSelector(
       getreponsesFeatursState,
       (state : ReponseState)=>state.Reponses
   )
   export const getreponsesLoading = createSelector(
    getreponsesFeatursState,
    (state : ReponseState)=>state.loading
)
export const getreponsesLoaded = createSelector(
    getreponsesFeatursState,
    (state : ReponseState)=>state.loaded
)
export const getreponsesError = createSelector(
    getreponsesFeatursState,
    (state : ReponseState)=>state.error
)
