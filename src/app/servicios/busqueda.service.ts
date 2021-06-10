import { Injectable } from '@angular/core';
import { busqueda } from 'src/models/busqueda.model';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  private busqueda: busqueda;
  
  pasarBusqueda: busqueda;

  constructor( ) {
   }

  crearBusqueda(dato = "Total", entrada: string, salida: string, numHabitaciones = 1, numAdultos: number, numNinos: number){
    if(dato.length == 0){
      dato = "Total"
    }
    
    this.busqueda = {
      busqueda: dato,
      entrada: entrada,
      salida: salida,
      numHabitaciones: numHabitaciones,
      numAdultos: numAdultos,
      numNinos: numNinos
    }
    return this.busqueda;
  }
}

