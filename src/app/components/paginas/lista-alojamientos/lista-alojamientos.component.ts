import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alojamiento, AlojamientosService } from 'src/app/servicios/alojamientos.service';

@Component({
  selector: 'app-lista-alojamientos',
  templateUrl: './lista-alojamientos.component.html',
  styleUrls: ['./lista-alojamientos.component.css']
})
export class ListaAlojamientosComponent implements OnInit {
  
  alojamientos: Alojamiento[] = [];

 constructor( private _alojamientosService: AlojamientosService,
    private router: Router ) {
    console.log('constructor');
  }
  
  
  ngOnInit(): void {
    this.alojamientos = this._alojamientosService.getAlojamientos();
  }

}
