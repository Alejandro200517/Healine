import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-medico-pacientes',
  templateUrl: './medico-pacientes.component.html',
  styleUrls: ['../../../app.component.css']
})
export class MedicoPacientesComponent{
  hour: string = '00';
  minute: string = '00';
  second: string = '00';

  usersPacientes: UsersModel[] = [];
  isFormSubmitted: boolean = false;
  userInfo: any;
  users: Observable<UsersModel[]> | undefined;
  filtroCorreo: string = '';
  filtroDocumento: number = Number('');
  filtroNombre: string = '';

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}



  ngOnInit() {
    this.updateClock(); 
    setInterval(() => this.updateClock(), 1000); 

    this.userInfo = JSON.parse(localStorage.getItem('medicUser') || '{}');

    // Obtener solo los usuarios que tengan el rol de "Paciente"
    this.users = this.usersService.obtenerUsers().pipe(
      map((users: any[]) => users.filter(user => user.rol === 'Paciente'))
    );
}


  updateClock() {
    const now = new Date();
    this.hour = now.getHours().toString().padStart(2, '0');
    this.minute = now.getMinutes().toString().padStart(2, '0');
    this.second = now.getSeconds().toString().padStart(2, '0');
  }

  filtrarUsers(usersPacientes: UsersModel[] | null): UsersModel[] {
    if (!usersPacientes) {
        return [];
    }

    return usersPacientes.filter(u => {
        const nombreCompleto = `${u.primerNombre} ${u.segundoNombre} ${u.primerApellido} ${u.segundoApellido}`;
        const nombreCoincide =
            this.filtroNombre.trim() === '' ||
            nombreCompleto.toLowerCase().includes(this.filtroNombre.toLowerCase());
        const correoCoincide =
            this.filtroCorreo.trim() === '' ||
            u.email.toLowerCase().includes(this.filtroCorreo.toLowerCase());
        const documentoCoincide =
            this.filtroDocumento === 0 ||
            u.documento.toString().includes(this.filtroDocumento.toString());

        return nombreCoincide && correoCoincide && documentoCoincide;
    });
  }
}