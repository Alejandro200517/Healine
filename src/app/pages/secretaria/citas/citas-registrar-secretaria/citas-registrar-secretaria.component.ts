import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitasModel } from '../../../../shared/models/citas.model';
import { EspecialidadesModel } from '../../../../shared/models/especialidades.model';
import { UsersModel } from '../../../../shared/models/users.model';
import { CitasService } from '../../../../shared/services/citas.service';
import { EspecialidadesService } from '../../../../shared/services/especialidades.service';
import { UsersService } from '../../../../shared/services/users.service';

@Component({
  selector: 'app-citas-registrar-secretaria',
  templateUrl: './citas-registrar-secretaria.component.html',
  styleUrls: ['./citas-registrar-secretaria.component.css']
})
export class CitasRegistrarSecretariaComponent implements OnInit {
  citas = new CitasModel('', '', '', '', '', '', '', '');
  usersMedicos: UsersModel[] = [];
  usersPacientes: UsersModel[] = [];
  especialidades: EspecialidadesModel[] = [];
  isFormSubmitted: boolean = false;

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
        this.usersPacientes = data.filter(users => users.rol === 'Paciente');

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
    if (!this.isFormFilled()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    if (!this.citas.medico) {
      alert('Seleccione un médico');
      return;
    }
    if (!this.citas.paciente) {
      alert('Seleccione un paciente');
      return;
    }

    // Validar la fecha de la cita
    const hoy = new Date();
    const fechaSeleccionada = new Date(this.citas.fecha);

    if (fechaSeleccionada < hoy) {
      alert('La fecha de la cita no puede ser menor que el día actual');
      return;
    }

    const unMesDespues = new Date();
    unMesDespues.setMonth(unMesDespues.getMonth() + 1);

    if (fechaSeleccionada > unMesDespues) {
      alert('La fecha de la cita no puede ser mayor a un mes a partir del día actual');
      return;
    }

    // Si pasa las validaciones, enviar la solicitud para agregar la cita
    this.citasService.agregarCitas(this.citas).subscribe(
      (data) => {
        alert('Cita registrada correctamente');
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

  isFormFilled(): boolean {
    return !!this.citas.fecha && !!this.citas.hora && !!this.citas.medico && !!this.citas.paciente && !!this.citas.especialidad;
  }
}

