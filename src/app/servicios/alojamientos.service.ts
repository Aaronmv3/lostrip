import { Injectable } from '@angular/core';

@Injectable()

export class AlojamientosService {
  
  private alojamientos : Alojamiento[] = [
    {
      nombre: 'Casa en la montaña',
      precio: 76,
      dueño: 'Jose Ramon',
      localizacion: 'Leon',
      foto: '/assets/Imagenes/alojamientos/montanaLeon.jpg',
      descripcion: 'Acogedora casa en la sierra de León'
    },
    {
      nombre: 'Piso en la playa',
      precio: 90,
      dueño: 'Luis Fernando',
      localizacion: 'Baiona',
      foto: '/assets/Imagenes/alojamientos/playaBaiona.jpg',
      descripcion: 'Piso en primera linea de playa en el pueblo de Baiona',
      oferta: true
    },
    {
      nombre: 'Hotel Barcelo Ourense',
      precio: 56,
      dueño: 'Barcelo',
      localizacion: 'Ourense',
      foto: '/assets/Imagenes/alojamientos/BarceloOurense.jpg',
      descripcion: 'Gran hotel de 4 estrellas en el centro de Ourense'
    },
    {
      nombre: 'Palace Madrid',
      precio: 120,
      dueño: 'Palace',
      localizacion: 'Madrid',
      foto: '/assets/Imagenes/alojamientos/PalaceMadrid.jpg',
      descripcion: 'Gran hotel en el centro de Madrid a pocos metros de una estacion de metro',
      oferta: true
    },
    {
      nombre: 'El avenida Palace',
      precio: 170,
      dueño: 'Avenida palace',
      localizacion: 'Barcelona',
      foto: '/assets/Imagenes/alojamientos/PalaceBarcelona.jpg',
      descripcion: 'Hotel en barcelona',
      oferta: true
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

    let alojamientosArr: Alojamiento[] = [];
    busqueda = busqueda.toLowerCase();

    for(let i = 0; i < this.alojamientos.length; i++){
      let alojamiento = this.alojamientos[i];
      let nombre = alojamiento.nombre.toLowerCase();
      if(nombre.indexOf(busqueda) >= 0){
        alojamiento.idx = i;
        alojamientosArr.push(alojamiento);
      }
    }
  return alojamientosArr;

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
}