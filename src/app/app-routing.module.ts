import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostdashboardComponent } from './postdashboard/postdashboard.component';
import { PosteListComponent } from './poste-list/poste-list.component';
import { ReponseListComponent } from './reponse-list/reponse-list.component';
import { GarageComponent } from './garage/garage.component';



const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
   },
   {
    path:'Home',
    redirectTo:'',
    pathMatch:'full'
   },
   {
     path:'postdashboard',
     component:PostdashboardComponent,
     pathMatch:'full'
   },
   {
    path:'postlist',
    component:PosteListComponent,
    pathMatch:'full'
  },
  {
    path:'ReponseList',
    component:ReponseListComponent,
    pathMatch:'full'
  },
  {
    path:'garage',
    component:GarageComponent,
    pathMatch:'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
