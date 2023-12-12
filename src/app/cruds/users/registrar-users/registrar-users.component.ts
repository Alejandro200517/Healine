import { Component, OnInit } from '@angular/core';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from '../../../shared/services/users.service';
import { RolesService } from '../../../shared/services/roles.service';
import { SedesService } from '../../../shared/services/sedes.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-users',
  templateUrl: './registrar-users.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarUsersComponent implements OnInit {

  users = new UsersModel('', '', '', '', '', '', '', '', '', '', '', '');
  rolesList: any[] = [];
  sedesList: any[] = [];

  constructor(
    private usersService: UsersService,
    private router: Router,
    private rolesService: RolesService,
    private sedesService: SedesService 
  ) { }

  ngOnInit() {
    this.rolesService.obtenerRoles().subscribe(
      (data) => {
        this.rolesList = data;
      },
      (error) => {
        console.error(error);
      }
    );

    this.sedesService.obtenerSedes().subscribe(
      (data) => {
        this.sedesList = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    console.log('onSubmit');

    this.usersService.agregarUsers(this.users).subscribe(
      (data) => {
        alert('Usuario registrado correctamente');
        this.router.navigate(['/usuarios-home']); 
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifique los campos o el documento ya está registrado');
        } else {
          console.error(error);
        }
      }
    );
  }
}
