import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filtros-busqueda',
  templateUrl: './filtros-busqueda.component.html',
  styleUrls: ['./filtros-busqueda.component.css']
})
export class FiltrosBusquedaComponent implements OnInit {

  public filterForm: FormGroup;

  filtroPanelOpenState = false
  filtros: string[] = ['Playa', 'Montaña', 'Ciudad', 'Piscina'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

     this.filterForm = this.fb.group({
        filtros: new FormControl('')
    })
  }
  mostrar(){
    console.log(this.filterForm.value.filtros);
    
  }
}
