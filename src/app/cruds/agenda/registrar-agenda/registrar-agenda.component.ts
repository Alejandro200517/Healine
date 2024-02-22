import { Component, OnInit } from '@angular/core';
import { AgendaModel } from 'src/app/shared/models/agenda.model';
import { AgendaService } from '../../../shared/services/agenda.service';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from '../../../shared/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-agenda',
  templateUrl: './registrar-agenda.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarAgendaComponent implements OnInit {
  agenda = new AgendaModel(0, '', '', '', '', '');
  usersMedicos: UsersModel[] = [];
  isFormSubmitted: boolean = false;


  constructor(
    private agendaService: AgendaService,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
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

    if (!this.isFormFilled()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    if (!this.agenda.medico) {
      alert('Seleccione un médico');
      return;
    }

    const hoy = new Date();
    const fechaSeleccionada = new Date(this.agenda.fecha);

    if (fechaSeleccionada < hoy) {
      alert('La fecha de la agenda no puede ser menor que el día actual');
      return;
    }

    const unMesDespues = new Date();
    unMesDespues.setMonth(unMesDespues.getMonth() + 1);

    if (fechaSeleccionada > unMesDespues) {
      alert('La fecha de la agenda no puede ser mayor a un mes a partir del día actual');
      return;
    }

    this.agendaService.agregarAgenda(this.agenda).subscribe(
      (data) => {
        alert('Agenda registrada correctamente');
        this.router.navigate(['/agenda-home']);
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifique los campos o la agenda ya está registrada');
        } else {
          console.error(error);
        }
      }
    );
  }

  isFormFilled(): boolean {
    return !!this.agenda.fecha && !!this.agenda.hora_inicio && !!this.agenda.hora_fin && !!this.agenda.descripcion;
}
}