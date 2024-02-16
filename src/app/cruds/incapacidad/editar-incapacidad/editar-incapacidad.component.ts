import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IncapacidadModel } from 'src/app/shared/models/incapacidad.model';
import { IncapacidadService } from '../../../shared/services/incapacidad.service';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from '../../../shared/services/users.service';

@Component({
  selector: 'app-editar-incapacidad',
  templateUrl: './editar-incapacidad.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarIncapacidadComponent implements OnInit {
  id = '';
  incapacidad = new IncapacidadModel('', '', '', '', '', '');
  usersPacientes: UsersModel[] = [];
  usersMedicos: UsersModel[] = [];

  constructor(
    private incapacidadService: IncapacidadService,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.incapacidadService.obtenerIncapacida(this.id).subscribe(data => {
        this.incapacidad = data[0];
      }, error => {
        console.log(error);
      });
    } else {
      console.log("CREAR");
    }

    this.usersService.obtenerUsers().subscribe(
      (data) => {
        this.usersPacientes = data.filter(user => user.rol === 'Paciente');
      },
      (error) => {
        console.error(error);
      }
    );

    this.usersService.obtenerUsers().subscribe(
      (data) => {
        this.usersMedicos = data.filter(user => user.rol === 'Medico');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    if (this.id) {
      this.incapacidadService.actualizarIncapacidad(this.incapacidad).subscribe(
        (data) => {
          alert('incapacidad actualizada correctamente');
          this.router.navigate(['/editar-consultar-incapacidad']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o la incapacidad ya está registrada');
          } else {
            console.error(error);
          }
        }
      );
    } else {
      this.incapacidadService.agregarIncapacidad(this.incapacidad).subscribe(
        (data) => {
          alert('incapacidad registrada correctamente');
          this.router.navigate(['/editar-consultar-incapacidad']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o la incapacidad ya está registrada');
          } else {
            console.error(error);
          }
        }
      );
    }
  }
}
