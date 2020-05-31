import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import { StorInterface } from './store/store';
import { IncreamentAction, DecreamentAction } from './store/Actions/counter-action';
import { nselector } from './store/reducers/counter-reducer';
import { LoadTodosAction } from './store/Actions/todos.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxlernen';
  
  constructor (){

  }

}
