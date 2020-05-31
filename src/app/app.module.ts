import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ StoreModule} from '@ngrx/store'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './store/reducers/counter-reducer';
import { red } from './store/store';
import{EffectsModule} from'@ngrx/effects'
import { from } from 'rxjs';
import { todosEffect } from './store/effects/todo.effect';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReponsesComponent } from './reponses/reponses.component';
import { PostdashboardComponent } from './postdashboard/postdashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PosteListComponent } from './poste-list/poste-list.component';
import { MaterialModule } from './Material/materil.module';
import { ReponseListComponent } from './reponse-list/reponse-list.component';
import { reponseReducer } from './store/reducers/reponse.reducer';
import { reponseEffect } from './store/effects/reponse.effect';
import { GarageComponent } from './garage/garage.component';
import { CarComponent } from './car/car.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ReponsesComponent,
    PostdashboardComponent,
    PosteListComponent,
    ReponseListComponent,
    GarageComponent,
    CarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(red),
    EffectsModule.forRoot([todosEffect]),
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forFeature("reponses",reponseReducer),
    EffectsModule.forFeature([reponseEffect]),
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
