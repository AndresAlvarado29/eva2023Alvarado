import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carrera } from 'src/app/domain/carrera';
import { CarreraService } from 'src/app/service/carrera.service';
@Component({
  selector: 'app-listar-carrera',
  templateUrl: './listar-carrera.component.html',
  styleUrls: ['./listar-carrera.component.scss']
})
export class ListarCarreraComponent {
listadoCarreras: Carrera[]=[]
constructor(private CarreraService: CarreraService,
  private router:Router){
   this.listadoCarreras = CarreraService.getLis()
   console.log('listadoCarreras', this.listadoCarreras)
  }
}
