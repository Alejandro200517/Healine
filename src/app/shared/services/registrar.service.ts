import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrarModel } from '../models/registrar-model';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  registrarUsuario(registrar: RegistrarModel) {
    return this.http.post<string>(`${this.BASE_URL}/registrar/agregar`, registrar);
  }
}
