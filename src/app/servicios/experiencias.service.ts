import { Injectable } from '@angular/core';
import { Experiencias } from 'src/models/experiencias.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {
  
  private  experiencias: Experiencias[] = [];
  private expURL: string;
  private experiencia: Experiencias;

  constructor(private http: HttpClient) {
    this.expURL = 'http://localhost:8080/experiencia'
   }

  getExperiencias(){
    this.experiencias = [];
    this.http.get(this.expURL).subscribe(data =>{
      console.log(Object.keys(data).length);
      
      for(let i = 0; i < Object.keys(data).length; i++){
        this.experiencia = {
          nombre : data[i].nombre,
          descripcion : data[i].descripcion,
          precio : data[i].precio,
          estrellas : data[i].estrellas,
          foto : data[i].fotos,
          idx : data[i].id,
          localizacion : data[i].localizacion,
          oferta : data[i].oferta,
          ubicacion : data[i].filtros,
          valoracion : data[i].valoracion
        }

        this.experiencias.push(this.experiencia);
      }



    });

    return this.experiencias;

  }
  
  getExperiencia(id: string){
    return this.experiencias[id];
  }

  buscarExperiencia( busqueda: string){
    if(busqueda == "Total"){
      return this.getExperiencias();
    }else{
        busqueda = busqueda.toLowerCase();
        let busquedaExperiencia: Experiencias[] = [];

        busquedaExperiencia = this.experiencias.filter(experiencia => experiencia.localizacion == busqueda);

        return busquedaExperiencia;
      }
    }
}