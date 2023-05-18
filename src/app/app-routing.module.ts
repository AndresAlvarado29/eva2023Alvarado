import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrerasComponent } from './page/carreras/carreras.component';
import { ListarCarreraComponent } from './pages/listar-carrera/listar-carrera.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';

const routes: Routes = [
  {path:"pagina/crear_carrera", component:CarrerasComponent},
  {path:"pagina/listar_carrera", component:ListarCarreraComponent},
  {path:"pagina/acerca_de",component:AcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
