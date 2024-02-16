import { Component, OnInit } from '@angular/core';
import { ExamenesModel } from 'src/app/shared/models/examenes.model';
import { ExamenesService } from '../../../shared/services/examenes.service';
import { Router } from '@angular/router';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from '../../../shared/services/users.service';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { CitasService } from '../../../shared/services/citas.service';

@Component({
  selector: 'app-registrar-examenes',
  templateUrl: './registrar-examenes.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarExamenesComponent implements OnInit {
  examenes = new ExamenesModel('', '', '', '', '', '');
  usersPacientes: UsersModel[] = [];
  citas: CitasModel[] = [];

  constructor(
    private examenesService: ExamenesService,
    private usersService: UsersService,
    private citasService: CitasService, // Agregamos el servicio de fórmulas
    private router: Router
  ) {}

  ngOnInit() {
    this.usersService.obtenerUsers().subscribe(
      (data) => {
        this.usersPacientes = data.filter(user => user.rol === 'Paciente');
      },
      (error) => {
        console.error(error);
      }
    );

    this.citasService.obtenerCitas().subscribe(
      (data) => {
        this.citas = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    console.log('onSubmit');

    this.examenesService.agregarExamenes(this.examenes).subscribe(
      (data) => {
        alert('examen registrado correctamente');
        this.router.navigate(['/examenes-home']); 
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifique los campos o la examen ya está registrado');
        } else {
          console.error(error);
        }
      }
    );
  }
}
