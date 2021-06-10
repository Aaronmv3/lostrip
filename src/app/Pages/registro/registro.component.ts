import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/servicios/auth.service';
import { UsuarioModel } from 'src/models/usuario.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {

    this.usuario = new UsuarioModel();

  }
  onSubmit(form: NgForm){
    if (form.invalid){ return; }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });

    Swal.showLoading();

    this.auth.registrar(this.usuario.email, this.usuario.password).then(resp => {
      Swal.close();
      this.auth.verificacion();
      this.auth.logout();
      this.router.navigate(["/home"]);
    }).catch(error=>{
      Swal.fire({
        title: 'Error al autenticar',
        icon: 'error',
        text: error.message
      });
    });
  }


}