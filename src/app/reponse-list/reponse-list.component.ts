import { Component, OnInit } from '@angular/core';
 import { Store , select} from '@ngrx/store'
import { state } from '@angular/animations';
import { Reponse } from 'src/app/reponses/reponse.model'
import * as ActionsFile from 'src/app/store/Actions/reponse.action'
import * as fromreponse from 'src/app/store/reducers/reponse.reducer'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reponse-list',
  templateUrl: './reponse-list.component.html',
  styleUrls: ['./reponse-list.component.css']
})
export class ReponseListComponent implements OnInit {
 reponses$ 
 listrepons

  constructor(private store : Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch( new ActionsFile.LoadReponses());
    // this.reponses$ = this.store.pipe(select(fromreponse.getreponses))
    // this.store.subscribe(data =>console.log(data.reponses.Reponses))
    this.store.subscribe(data =>{
      this.listrepons = data.reponses.Reponses
      // console.log(data.todos)
      console.log("list ; ",this.listrepons)
    
    }
    )
    // console.log('list reponse',this.reponses$
  }
  
}
