import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../../shared/models/users.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../shared/services/users.service';
import { RolesService } from '../../../shared/services/roles.service';
import { SedesService } from '../../../shared/services/sedes.service'; 

@Component({
  selector: 'app-editar-users',
  templateUrl: './editar-users.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarUsersComponent implements OnInit {

  id = ''
  users = new UsersModel('', '', '', '', '', '', '', '', '', '', '', '');
  rolesList: any[] = [];
  sedesList: any[] = [];

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private rolesService: RolesService,
    private sedesService: SedesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    if(this.id) {
      console.log("EDITAR");
      this.usersService.obtenerUser(this.id).subscribe(data=> {
        this.users = data[0]
      }, error => {
        console.log(error);
      })
    } else {
      console.log("CREAR");
    }

    this.rolesService.obtenerRoles().subscribe(
      (data) => {
        this.rolesList = data;
      },
      (error) => {
        console.error(error);
      }
    );

    // Obtén la lista de sedes al inicializar el componente
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
  
    if (this.users.documento) {
      this.usersService.actualizarUsers(this.users).subscribe(data => {
        alert(data);
        this.router.navigate(['/editar-consultar-users']);
      }, error => {
        console.log(error);
      });
    } else {
      console.log('crear');
    }
  }
  
  }