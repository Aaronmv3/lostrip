import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router){}

  canActivate(): boolean  {

    if (localStorage.getItem("Logged") ){
      return true;
    } else{
      this.router.navigateByUrl('/login');
    }
  }

}

