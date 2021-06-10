import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebookF, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../../../../servicios/auth.service';

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
    render = false;

    autenticado: boolean;
  constructor(private _authservice: AuthService, private router: Router) {   
  }


  ngOnInit(): void {
    if(localStorage.getItem("Logged")){
      this.autenticado = true;
    } else{
      this.autenticado = false;
    }
  }

  logout(){
    this._authservice.logout();
    this.autenticado = false;
  }
  }

