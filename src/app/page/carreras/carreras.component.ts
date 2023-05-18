import { Component } from '@angular/core';
import { Carrera } from 'src/app/domain/carrera';
import { ActivatedRoute,Router } from '@angular/router';
import { CarreraService } from 'src/app/service/carrera.service';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.scss']
})
export class CarrerasComponent {
carrera: Carrera =new Carrera();

constructor(private CarreraService: CarreraService,
  private router: Router){

    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params)
      this.carrera= new Carrera()
      this.carrera= params['carrera']
    }
  }
guardar(){
  this.CarreraService.save(this.carrera)
  this.carrera=new Carrera()
  this.router.navigate(['pagina/listar_carrera'])
}
}
