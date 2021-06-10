import { Component, Input, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-alojamiento-tarjeta',
  templateUrl: './alojamiento-tarjeta.component.html',
  styleUrls: ['./alojamiento-tarjeta.component.css']
})
export class AlojamientoTarjetaComponent implements OnInit {
  
  @Input() Alojamiento: any = {};
  @Input() index: number;
  @Input() habitaciones = 1;
  ruta: string;
  puntuacion: string;


  constructor(private router: Router, config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;
    config.showNavigationArrows = false;
   }

  ngOnInit(): void {
        this.ruta = this.router.url;

        if(this.Alojamiento.valoracion >= 0 && this.Alojamiento.valoracion < 6){
          this.puntuacion = "Normal"
        } else if(this.Alojamiento.valoracion >= 6 && this.Alojamiento.valoracion < 8){
          this.puntuacion = "Bien"
        }else if(this.Alojamiento.valoracion >= 8 && this.Alojamiento.valoracion < 9){
          this.puntuacion = "Fantastico"
        }else if(this.Alojamiento.valoracion >= 9 && this.Alojamiento.valoracion <= 10){
          this.puntuacion = "Increible"
        }
        
  }
  
  verAlojamiento(){
    return this.router.navigate(['/alojamiento', this.index]);
  }

  verExperiencia(){
    return this.router.navigate(['/experiencia', this.index]);
  }
}
