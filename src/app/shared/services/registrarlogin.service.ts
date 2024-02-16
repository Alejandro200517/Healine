import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrarLoginModel } from '../models/registrarlogin.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrarLoginService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  agregarUsuarios(users: RegistrarLoginModel): Observable<string> {
    return this.http.post<string>(`${this.BASE_URL}/usuarios/agregar`, users);
  }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password }; // Cambia 'contrasena' a 'password'
    return this.http.post<any>(`${this.BASE_URL}/login`, loginData);
}

}
