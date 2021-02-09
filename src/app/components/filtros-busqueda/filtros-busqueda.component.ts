import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filtros-busqueda',
  templateUrl: './filtros-busqueda.component.html',
  styleUrls: ['./filtros-busqueda.component.css']
})
export class FiltrosBusquedaComponent implements OnInit {


  @Output() filtrado = new EventEmitter<any>();
  public filterForm: FormGroup;

  filtroPanelOpenState = false
  filtros: string[] = ['Playa', 'Montaña', 'Ciudad', 'Piscina'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

     this.filterForm = this.fb.group({
        filtros: new FormControl('')
    })
  }
  enviar(){
   this.filtrado.emit(this.filterForm.value.filtros);
    
  }
}
