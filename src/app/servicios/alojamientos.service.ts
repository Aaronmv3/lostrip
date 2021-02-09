import { Injectable } from '@angular/core';
import { busqueda } from './busqueda.service';

@Injectable()

export class AlojamientosService {
  
  private alojamientos : Alojamiento[] = [
    {
      nombre: 'Casa en la montaña',
      precio: 76,
      dueño: 'Jose Ramon',
      localizacion: 'leon',
      foto: '/assets/Imagenes/alojamientos/montanaLeon.jpg',
      descripcion: 'Acogedora casa en la sierra de León',
      ubicacion:[
        "Montaña",
        "Piscina",
      ],
    },
    {
      nombre: 'Piso en la playa',
      precio: 90,
      dueño: 'Luis Fernando',
      localizacion: 'baiona',
      foto: '/assets/Imagenes/alojamientos/playaBaiona.jpg',
      descripcion: 'Piso en primera linea de playa en el pueblo de Baiona',
      oferta: true,
      ubicacion:[
        "Playa"
      ],
    },
    {
      nombre: 'Hotel Barcelo Ourense',
      precio: 56,
      dueño: 'Barcelo',
      localizacion: 'ourense',
      foto: '/assets/Imagenes/alojamientos/BarceloOurense.jpg',
      descripcion: 'Gran hotel de 4 estrellas en el centro de Ourense',
      ubicacion:[
        "Ciudad"
      ],
    },
    {
      nombre: 'Palace Madrid',
      precio: 120,
      dueño: 'Palace',
      localizacion: 'madrid',
      foto: '/assets/Imagenes/alojamientos/PalaceMadrid.jpg',
      descripcion: 'Gran hotel en el centro de Madrid a pocos metros de una estacion de metro',
      oferta: true,
      ubicacion:[
        "Ciudad",
      ],
    },
    {
      nombre: 'El avenida Palace',
      precio: 170,
      dueño: 'Avenida palace',
      localizacion: 'barcelona',
      foto: '/assets/Imagenes/alojamientos/PalaceBarcelona.jpg',
      descripcion: 'Hotel en barcelona',
      oferta: true,
      ubicacion:[
        "Ciudad",
        "Piscina",
      ],
    }
  ];


  constructor() { 
    console.log('Servicio funcionando');
  }

  getAlojamientos(){
    return this.alojamientos;
  }
  
  getAlojamiento(id: string){
    return this.alojamientos[id];
  }

  buscarAlojamiento( busqueda: string){
    if(busqueda == "Total"){
      return this.alojamientos;
    }else{
        busqueda = busqueda.toLowerCase();
        let busquedaAlojamiento: Alojamiento[] = [];

        busquedaAlojamiento = this.alojamientos.filter(alojamiento => alojamiento.localizacion == busqueda);

        return busquedaAlojamiento;
      }
    }

  filtrarAlojamiento(filtros: Array<string>, alojamientosFiltrar: Alojamiento[], alojamientosGuardar: Alojamiento[], filtrado2: boolean){
    if(filtros.length == 0 || filtrado2 == true){
      return alojamientosGuardar;
    }else{
      let filtro: Alojamiento[] = [];
      for(let i = 0; i <  filtros.length; i++){
        if(i == 0){
         for(let j = 0; j < alojamientosFiltrar.length; j++){
          for(let k = 0; k < alojamientosFiltrar[j].ubicacion.length; k++){
              if(alojamientosFiltrar[j].ubicacion[k] == filtros[i]){
                filtro.push(alojamientosFiltrar[j]);
              }
          }
           
         }
        }else{
          let temporal: Alojamiento[] = filtro;
          for(let j = 0; j < temporal.length; j++){
            for(let k = 0; k < temporal[j].ubicacion.length; k++){
              if(temporal[j].ubicacion[k] == filtros[i]){
                if(j == 0){
                  filtro = [];
                  filtro.push(temporal[j]);
                }else{
                  filtro.push(temporal[j]);  
                }  
              }else{
                filtro = [];
              }   
          }
          }
        }
      }
     return filtro;
    }
  }
}

export interface Alojamiento{
  nombre: string;
  precio: number;
  dueño: string;
  localizacion: string;
  foto: string;
  descripcion: string;
  idx?: number;
  oferta?: boolean;
  ubicacion: string[];
}