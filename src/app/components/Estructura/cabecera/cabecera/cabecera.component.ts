import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
    // Importacion de iconos
    faFacebookF = faFacebookF;
    faTwitter = faTwitter;
    faGooglePlus = faGooglePlus;
  constructor() { }

  ngOnInit(): void {
  }

}
