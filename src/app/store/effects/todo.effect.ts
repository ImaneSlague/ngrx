
import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { createEffect, Actions , ofType} from '@ngrx/effects';
import { LOAD, SuccessAction, FailedAction } from '../Actions/todos.action';
import { map ,mergeMap,catchError} from 'rxjs/operators';
import {of} from'rxjs'
import { from } from 'rxjs';
@Injectable()
export class todosEffect{
    todo$ = createEffect(()=>this.actions.pipe(
         ofType(LOAD),
        mergeMap(()=>this.http.get('http://144.91.76.98:5005/api/NewDemandes').pipe(
            map((data)=>new SuccessAction(data)),
            catchError((err)=>of(new FailedAction(err)))
        ))
    ))

    constructor(private http : HttpClient ,
         private actions : Actions)
    {
    }
}