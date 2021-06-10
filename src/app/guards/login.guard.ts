import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router){}

  canActivate(): boolean  {

    if (localStorage.getItem("Logged")){
      this.router.navigateByUrl('/home');
    } else{
      return true;
    }
  }
  
}
