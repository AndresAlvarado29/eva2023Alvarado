import { Injectable } from '@angular/core';
import { Carrera } from '../domain/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
carreras: Carrera[]=[];
  constructor() { }

  save(carrera: Carrera){
    this.carreras.push(carrera)
  }
  getLis(){
    return this.carreras
  }
}
