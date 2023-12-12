import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersModel } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerUsers() {
    return this.http.get<UsersModel[]>(`${this.BASE_URL}/users`);
  }

  obtenerUser(id: string) {
    return this.http.get<UsersModel[]>(`${this.BASE_URL}/users/${id}`);
  }

  agregarUsers(users: UsersModel) {
    return this.http.post<string>(`${this.BASE_URL}/signup`, users);
  }

  actualizarUsers(users: UsersModel) {
    return this.http.put<string>(`${this.BASE_URL}/users/actualizar/${users.documento}`, users);
  }

  borrarUsers(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/users/borrar/${id}`);
  }

  login(correo: string, contrasena: string): Observable<any> {
    const loginData = { correo, contrasena };
    return this.http.post<any>(`${this.BASE_URL}/login`, loginData);
  }

}
