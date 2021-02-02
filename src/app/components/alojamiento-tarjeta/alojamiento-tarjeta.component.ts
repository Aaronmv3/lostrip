import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alojamiento-tarjeta',
  templateUrl: './alojamiento-tarjeta.component.html',
  styleUrls: ['./alojamiento-tarjeta.component.css']
})
export class AlojamientoTarjetaComponent implements OnInit {
  
  @Input() Alojamiento: any = {};
  @Input() index: number;

  @Input() mostrar: boolean;

  @Output() alojamientoSeleccionado: EventEmitter<number>;
  constructor(private router: Router) {
    this.alojamientoSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }
  
  verAlojamiento(){
    return this.router.navigate(['/alojamiento', this.index]);
  }
}
