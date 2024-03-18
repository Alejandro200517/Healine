import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from '../../../shared/services/users.service';
import { ExamenesService } from '../../../shared/services/examenes.service';
import { CitasService } from '../../../shared/services/citas.service';
import { IncapacidadService } from '../../../shared/services/incapacidad.service';
import { OrdenesService } from '../../../shared/services/ordenes.service';

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
  //cAMBIAR EN CASO DE QUE NO FUNCIONE POR EL DE HISTORIAL
  filtroDocumento: number = Number('');
  filtroNombre: string = '';
  showInfoPanel: boolean = false;

  examenes: any[] = [];
  citas: any[] = [];
  incapacidades: any[] = [];
  ordenes: any[] = [];
  examenesFiltrados: any[] = [];
  incapacidadesFiltradas: any[] = [];
  citasFiltradas: any[] = [];
  ordenesFiltradas: any[] = [];
  user: UsersModel | null = null;


  constructor(
    private usersService: UsersService,
    private router: Router,

    private examenesService: ExamenesService,
    private citasService: CitasService,
    private incapacidadesService: IncapacidadService,
    private ordenesService: OrdenesService
  ) {}



  ngOnInit() {
    this.obtenerDatos();

    this.updateClock(); 
    setInterval(() => this.updateClock(), 1000); 

    this.userInfo = JSON.parse(localStorage.getItem('medicUser') || '{}');

    // Obtener solo los usuarios que tengan el rol de "Paciente"
    this.users = this.usersService.obtenerUsers().pipe(
      map((users: any[]) => users.filter(user => user.rol === 'Paciente'))
    );
  }
  
  obtenerDatos() {
    this.obtenerExamenes();
    this.obtenerCitas();
    this.obtenerIncapacidades();
    this.obtenerOrdenes();

    this.usersService.obtenerUsers().subscribe(
      (data) => {
        this.usersPacientes = data.filter(user => user.rol === 'Paciente');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerExamenes() {
    this.examenesService.obtenerExamenes().subscribe(
      (data) => {
        this.examenes = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerCitas() {
    this.citasService.obtenerCitas().subscribe(
      (data) => {
        this.citas = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerIncapacidades() {
    this.incapacidadesService.obtenerIncapacidad().subscribe(
      (data) => {
        this.incapacidades = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerOrdenes() {
    this.ordenesService.obtenerOrdenes().subscribe(
      (data) => {
        this.ordenes = data;
      },
      (error) => {
        console.error(error);
      }
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


  mostrarDetalles(user: UsersModel) {
    this.user = user;
    console.log('Usuario seleccionado:', this.user);

    // Filtrar exámenes por documento del paciente seleccionado
    this.examenesFiltrados = this.examenes.filter(examen => examen.paciente.includes(user.documento));
    console.log('Exámenes filtrados:', this.examenesFiltrados);

    // Filtrar incapacidades por documento del paciente seleccionado
    this.incapacidadesFiltradas = this.incapacidades.filter(incapacidad => incapacidad.paciente.includes(user.documento));
    console.log('Incapacidades filtradas:', this.incapacidadesFiltradas);

    // Filtrar órdenes por documento del paciente seleccionado
    this.ordenesFiltradas = this.ordenes.filter(orden => orden.paciente.includes(user.documento));
    console.log('Órdenes filtradas:', this.ordenesFiltradas);

    // Filtrar citas por documento del paciente seleccionado
    this.citasFiltradas = this.citas.filter(cita => cita.paciente.includes(user.documento));
    console.log('Citas filtradas:', this.citasFiltradas);

    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
}