import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrerasComponent } from './page/carreras/carreras.component';
import { ListarCarreraComponent } from './pages/listar-carrera/listar-carrera.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CarrerasComponent,
    ListarCarreraComponent,
    AcercaDeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
