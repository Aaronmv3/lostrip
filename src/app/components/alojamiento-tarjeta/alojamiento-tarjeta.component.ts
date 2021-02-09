import { Component, Input, OnInit  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alojamiento-tarjeta',
  templateUrl: './alojamiento-tarjeta.component.html',
  styleUrls: ['./alojamiento-tarjeta.component.css']
})
export class AlojamientoTarjetaComponent implements OnInit {
  
  @Input() Alojamiento: any = {};
  @Input() index: number;
  @Input() habitaciones = 1;
  @Input() mostrar: boolean;



  constructor(private router: Router) {
   }

  ngOnInit(): void {
        
  }
  
  verAlojamiento(){
    return this.router.navigate(['/alojamiento', this.index]);
  }
}
