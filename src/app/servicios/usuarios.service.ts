import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private userURL: string;
  private alojURL: string;

  constructor(private http: HttpClient) { 
    this.userURL = 'http://localhost:8080/usuario';
    this.alojURL = 'http://localhost:8080/alojamiento';
  }

  public prueba(): Observable<any>{
    return this.http.get(this.userURL, {responseType:"text"});
  }
  public prueba2(): Observable<any>{

    return this.http.get(this.alojURL);
  }
}
