import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { busqueda } from 'src/models/busqueda.model';
import { BusquedaService} from '../../servicios/busqueda.service';

@Component({
  selector: 'app-formulario-busqueda',
  templateUrl: './formulario-busqueda.component.html',
  styleUrls: ['./formulario-busqueda.component.css']
})
export class FormularioBusquedaComponent implements OnInit {


  @Output() resultForm = new EventEmitter<busqueda>();

  public searchForm: FormGroup;
  public buscar: busqueda;
  public fecha = new Date();

  constructor( private fb: FormBuilder, private route: Router, public busqueda: BusquedaService) {

    
  }
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      busqueda: new FormControl(''),
      entrada: new FormControl(''),
      salida: new FormControl(''),
      numHabitaciones: new FormControl(1),
      numAdultos: new FormControl(2),
      numNinos: new FormControl(0)
    })
    
  }
  enviarBusqueda(){
    this.buscar = this.busqueda.crearBusqueda(this.searchForm.value.busqueda, this.searchForm.value.entrada, this.searchForm.value.salida, parseInt(this.searchForm.value.numHabitaciones),
    parseInt(this.searchForm.value.numAdultos), parseInt(this.searchForm.value.numNinos));
    if(this.route.url == "/home"){
      this.busqueda.pasarBusqueda = this.buscar;
    }else{
      this.resultForm.emit(this.buscar);
    }

    if(this.route.url == "/home" || this.route.url == "/alojamientos"){
      return this.route.navigate(["/alojamientos"]);
    }else{
      return this.route.navigate(["/experiencias"])
    }
    
  }

}
