import { Injectable } from '@angular/core';
import { Alojamiento } from 'src/models/alojamientos.model';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AlojamientosService {
  
  private alojamientos: Alojamiento[] = [];
  private alojURL: string;
  private alojamiento: Alojamiento;

  constructor(private http: HttpClient) { 
    this.alojURL = 'http://localhost:8080/alojamiento';
  }

  getAlojamientos(){

    this.alojamientos = [];
    this.http.get(this.alojURL).subscribe(data =>{
      console.log(Object.keys(data).length);
      
      for(let i = 0; i< Object.keys(data).length; i++){
      
        this.alojamiento = {
          nombre : data[i].nombre,
          descripcion : data[i].descripcion,
          dueno : data[i].dueno,
          estrellas : data[i].estrellas,
          foto : data[i].fotos,
          idx : data[i].id,
          localizacion : data[i].localizacion,
          oferta : data[i].oferta,
          ubicacion : data[i].filtros,
          valoracion : data[i].valoracion
        }
        
        this.alojamientos.push(this.alojamiento);        
      }
    });
    return this.alojamientos;
    
  }

  
  getAlojamiento(id: string){
    return this.alojamientos[id];
  }

  buscarAlojamiento( busqueda: string){
    if(busqueda == "Total"){

      return this.getAlojamientos();
    }else{
        busqueda = busqueda.toLowerCase();
        let busquedaAlojamiento: Alojamiento[] = [];

        busquedaAlojamiento = this.alojamientos.filter(alojamiento => alojamiento.localizacion == busqueda);

        return busquedaAlojamiento;
      }
    }
}
