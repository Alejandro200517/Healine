import { Component, OnInit } from '@angular/core';
import { AgendaModel } from 'src/app/shared/models/agenda.model';
import { AgendaService } from '../../../shared/services/agenda.service';
import { UsuariosModel } from 'src/app/shared/models/usuarios.model';
import { UsuariosService } from '../../../shared/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-agenda',
  templateUrl: './registrar-agenda.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarAgendaComponent implements OnInit {
  agenda = new AgendaModel(0, '', '', '', 0, '');
  usuariosMedicos: UsuariosModel[] = [];

  constructor(
    private agendaService: AgendaService,
    private usuariosService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.usuariosService.obtenerUsuarios().subscribe(
      (data) => {
        this.usuariosMedicos = data.filter(usuario => usuario.rol === 'medico');
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  onSubmit() {
    console.log("Médico seleccionado:", this.agenda.medico); // Añade esta línea para depuración
    
    if (!this.agenda.medico) {
      // Si no se ha seleccionado ningún médico, muestra una alerta
      alert('Seleccione un médico');
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
}
