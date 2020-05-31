import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reponse } from './reponses/reponse.model';

@Injectable({
    providedIn :"root"
})

export class ReponseService{
    private ReponseUrl = "http://144.91.76.98:5005/api/NewReponses"
  RepByDm: Reponse[];
    constructor( private  http : HttpClient ){}
    getReponse(): Observable<Reponse[]>{
        return this.http.get<Reponse[]>(this.ReponseUrl);
    }
    getReponseById(payload : number):Observable<Reponse>{
        return this.http.get<Reponse>(`${this.ReponseUrl}/${payload}`)
    }

    getrepoByDemande(id){
        return this.http.get<Reponse[]>(this.ReponseUrl+'/ReponseByDemande/'+id)
      }
}