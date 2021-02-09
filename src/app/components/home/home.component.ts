import { Component, OnInit } from '@angular/core';
import { AlojamientosService, Alojamiento } from '../../servicios/alojamientos.service';
import { Router } from '@angular/router';
import { BusquedaService } from '../../servicios/busqueda.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  alojamientos: Alojamiento[] = [];
  AlojamientosOferta: Alojamiento[] = [];

  constructor( private _alojamientosService: AlojamientosService,
    private router: Router, private _busquedaService: BusquedaService ) {
  }
  
  
  ngOnInit(): void {
    this._busquedaService.pasarBusqueda = undefined;
    this.alojamientos = this._alojamientosService.getAlojamientos();

    this.AlojamientosOferta = this.alojamientos.filter(alojamiento => alojamiento.oferta === true);
  }

}


