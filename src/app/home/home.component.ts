import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StorInterface } from '../store/store';
import { IncreamentAction, DecreamentAction } from '../store/Actions/counter-action';
import { LoadTodosAction } from '../store/Actions/todos.action';
import { nselector } from '../store/reducers/counter-reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'ngrxlernen';
  list
  count : number
  constructor (private store : Store<StorInterface>){
    //data
    this.store.select(nselector).subscribe(data => {
      // this.count = data.counter.n ;
      console.log("data",data)
      this.count=data
      
    })

  }
  increament(){
    this.store.dispatch(new IncreamentAction(2))
  }
  decreament(){
    this.store.dispatch(new DecreamentAction(2))

  }
 
 
  ngOnInit(): void {
  }

}
