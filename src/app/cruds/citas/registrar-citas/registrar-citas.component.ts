import { Component, OnInit } from '@angular/core';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { CitasService } from '../../../shared/services/citas.service';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from '../../../shared/services/users.service';
import { EspecialidadesService } from 'src/app/shared/services/especialidades.service';
import { EspecialidadesModel } from 'src/app/shared/models/especialidades.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-citas',
  templateUrl: './registrar-citas.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarCitasComponent implements OnInit {
  citas = new CitasModel('', '', '', '', '', '', '', '');
  usersMedicos: UsersModel[] = [];
  especialidades: EspecialidadesModel[] = []

  constructor(
    private citasService: CitasService,
    private usersService: UsersService,
    private especialidadesService: EspecialidadesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.usersService.obtenerUsers().subscribe(
      (data) => {
        this.usersMedicos = data.filter(users => users.rol === 'Medico');
      },
      (error) => {
        console.error(error);
      }
    );

    this.especialidadesService.obtenerEspecialidades().subscribe(
      (data) => {
        this.especialidades = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  

  onSubmit() {
    console.log("Médico seleccionado:", this.citas.medico); // Añade esta línea para depuración
    
    if (!this.citas.medico) {
      // Si no se ha seleccionado ningún médico, muestra una alerta
      alert('Seleccione un médico');
      return;
    }

    this.citasService.agregarCitas(this.citas).subscribe(
      (data) => {
        alert('cita registrada correctamente');
        this.router.navigate(['/citas-home']);
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifique los campos o la cita ya está registrada');
        } else {
          console.error(error);
        }
      }
    );
  }
}