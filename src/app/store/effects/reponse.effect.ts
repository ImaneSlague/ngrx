import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map ,mergeMap,catchError} from 'rxjs/operators';
import {of , Observable} from'rxjs'
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Action} from '@ngrx/store'
import * as ActionsFile from '../Actions/reponse.action'
import { ReponseService } from 'src/app/reponse.service';
import { Reponse } from 'src/app/reponses/reponse.model';

@Injectable()
export class reponseEffect {
    constructor(private actions$ : Actions,
        private reponseserv : ReponseService)
   {
   }

  @Effect()
  LoadReponses$: Observable<Action> = this.actions$.pipe(
      ofType<ActionsFile.LoadReponses>(
          ActionsFile.ReponseActionType.LOAD_Reponses
      ),
      mergeMap((Actions : ActionsFile.LoadReponses)=>
      this.reponseserv.getReponse().pipe(
          map(
              (reponses : Reponse[])=>
              new ActionsFile.LoadReponsesSuccess(reponses)
          ),
          catchError(err =>of(new ActionsFile.LoadReponsesFail(err)))
      )
      )
  )

}
