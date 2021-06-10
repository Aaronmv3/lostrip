import { Component, OnInit } from '@angular/core';
import { AlojamientosService } from '../../servicios/alojamientos.service';
import { Router } from '@angular/router';
import { BusquedaService } from '../../servicios/busqueda.service';
import { Alojamiento } from 'src/models/alojamientos.model';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  alojamientos: Alojamiento[] = [];
  AlojamientosOferta: Alojamiento[] = [];
  mensaje: String;

  constructor( private _alojamientosService: AlojamientosService,
    private router: Router, private _busquedaService: BusquedaService, private _usuariosService: UsuariosService) {
  }
  
  
  ngOnInit(): void {
    this._busquedaService.pasarBusqueda = undefined;
    this.alojamientos = this._alojamientosService.getAlojamientos();
  console.log(this.alojamientos);
  
    setTimeout(()=>{
      this.AlojamientosOferta = this.alojamientos.filter(alojamientos => alojamientos.oferta == true);
    }, 10)
    

    this._usuariosService.prueba().subscribe(data => {
      this.mensaje = data;
      console.log(this.mensaje);
      
    });
  }

  ver(){
     this.AlojamientosOferta = this.alojamientos.filter(alojamientos => alojamientos.oferta == true);
      
    console.log(this.AlojamientosOferta);
    
    
    
    
    
  }
}


