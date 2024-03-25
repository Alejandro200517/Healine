import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IncapacidadModel } from 'src/app/shared/models/incapacidad.model';
import { IncapacidadService } from '../../../shared/services/incapacidad.service';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from '../../../shared/services/users.service';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { CitasService } from '../../../shared/services/citas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registrar-incapacidades-medico',
  templateUrl: './registrar-incapacidades-medico.component.html',
  styleUrls: ['../../../app.component.css']
})

export class RegistrarIncapacidadesMedicoComponent implements OnInit {
  incapacidad = new IncapacidadModel('', '', '', '', '', '');
  usersMedicos: UsersModel[] = [];
  usersPacientes: UsersModel[] = [];
  citas: CitasModel[] = [];
  citasFiltradas: CitasModel[] = []; // Nuevas citas filtradas
  isFormSubmitted: boolean = false;
  userInfo: any;

  incapacida: Observable<IncapacidadModel[]> | undefined;
  incapacidadd: IncapacidadModel[] = [];
  filtroPaciente: string = '';
  filtroMedico: string = '';

  constructor(
    private incapacidadService: IncapacidadService,
    private usersService: UsersService,
    private citasService: CitasService, // Inyecta el servicio de citas
    private router: Router
  ) {}

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('medicUser') || '{}');

    this.usersService.obtenerUsers().subscribe(
      (data) => {
        this.usersMedicos = data.filter(user => user.rol === 'Medico');
      },
      (error) => {
        console.error(error);
      }
    );

    this.usersService.obtenerUsers().subscribe(
      (data) => {
        this.usersPacientes = data.filter(user => user.rol === 'Paciente');
      },
      (error) => {
        console.error(error);
      }
    );

    // Obtener las citas disponibles al inicializar el componente
    this.citasService.obtenerCitas().subscribe(
      (data) => {
        this.citas = data;
      },
      (error) => {
        console.error(error);
      }
    );

    this.incapacidadService.obtenerIncapacidad().subscribe(
      (data) => {
        this.incapacidadd = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  filtrarCitasPorPaciente() {
    console.log("Paciente seleccionado:", this.incapacidad.paciente);
    if (this.incapacidad.paciente) {
        this.citasFiltradas = this.citas.filter(cita => cita.paciente === this.incapacidad.paciente);
        console.log("Citas filtradas:", this.citasFiltradas);
    } else {
        this.citasFiltradas = []; // Limpiar las citas filtradas si no hay paciente seleccionado
    }
}

  
  
  onSubmit() {
    console.log("Médico seleccionado:", this.incapacidad.medico);
    
    if (!this.isFormFilled()) {
      alert('Por favor complete todos los campos obligatorios.');
      return;
    }

    this.incapacidad.medico = `${this.userInfo.documento} - ${this.userInfo.primerNombre} ${this.userInfo.segundoNombre ? this.userInfo.segundoNombre + ' ' : ''}${this.userInfo.primerApellido} ${this.userInfo.segundoApellido ? this.userInfo.segundoApellido : ''}`;

    if (!this.incapacidad.medico) {
      // Si no se ha seleccionado ningún médico, muestra una alerta
      alert('Seleccione un médico');
      return;
    }

    this.incapacidadService.agregarIncapacidad(this.incapacidad).subscribe(
      (data) => {
        alert('Incapacidad registrada correctamente');
        this.router.navigate(['/incapacidad-home']);
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
  isFormFilled(): boolean {
    return !!this.incapacidad.paciente && !!this.incapacidad.medico && !!this.incapacidad.fecha && !!this.incapacidad.tipo && !!this.incapacidad.detalles;
  }



  borrarIncapacidad(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar esta incapacidad?');

    if (confirmacion) {
      this.incapacidadService.borrarIncapacidad(id).subscribe(data => {
        console.log(data);

        this.incapacidadService.obtenerIncapacidad().subscribe(updatedIncapacidad => {
          this.incapacidadd = updatedIncapacidad;
        });
      });
    }
  }

  filtrarIncapacidad(incapacidad: IncapacidadModel[] | undefined | null): IncapacidadModel[] {
    if (!incapacidad) {
      return [];
    }
  
    return incapacidad.filter(s => {
      const pacienteIncapacidadCoincide = this.filtroPaciente === '' || s.paciente.toLowerCase().includes(this.filtroPaciente.toLowerCase());
      const medicoIncapacidadCoincide = this.filtroMedico === '' || s.medico.toLowerCase().includes(this.filtroMedico.toLowerCase());

      return pacienteIncapacidadCoincide && medicoIncapacidadCoincide;
    });
  }
}
