import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StorInterface } from '../store/store';
import { LoadTodosAction } from '../store/Actions/todos.action';
import { Reponse } from '../reponses/reponse.model';
import { ReponseService } from '../reponse.service';

@Component({
  selector: 'app-poste-list',
  templateUrl: './poste-list.component.html',
  styleUrls: ['./poste-list.component.css']
})
export class PosteListComponent implements OnInit {
list
iddemande=localStorage.getItem('iddemande')
iscolledd : boolean = true;
RepByDm:Reponse[]
iscolled : boolean = true;

  constructor(private store : Store<StorInterface> , private reponseserv : ReponseService) { 
    this.store.dispatch(new LoadTodosAction)
    this.store.subscribe(data =>{
      this.list = data.todos
      console.log(data.todos)
      console.log("list ; ",this.list)
 
    }
      )
  }

  ngOnInit(): void {
    console.log('liste des demandes',this.list)
  }
  togglecolll(demande)
  {
    demande.iscolledd=!demande.iscolledd ;
    console.log('succ',demande)
    localStorage.setItem('iddemande',demande.idDemande)
  }
  closing:boolean
  togglecoll(dm,list)
  {
    list.forEach(element => {
      element.iscolled? element.iscolled=false:null;
    });
  
    dm.iscolled=!dm.iscolled ;
    
      
    //console.log('dm : ',dm)
    this.reponseserv.getrepoByDemande(dm.idDemande).subscribe(res=>{
      this.reponseserv.RepByDm = null;
      this.reponseserv.RepByDm = res as Reponse[];
      //console.log('reponses of demande ',dm.idDemande,' is : ',this.reponseserv.RepByDm)
    })
  }

}
