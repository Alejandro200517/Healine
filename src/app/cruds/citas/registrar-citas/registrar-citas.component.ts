import { Component, OnInit } from '@angular/core';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { CitasService } from '../../../shared/services/citas.service';
import { UsuariosModel } from 'src/app/shared/models/usuarios.model';
import { UsuariosService } from '../../../shared/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-citas',
  templateUrl: './registrar-citas.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarCitasComponent implements OnInit {
  citas = new CitasModel('', '', '', '', '', '', '');
  usuariosMedicos: UsuariosModel[] = [];

  constructor(
    private citasService: CitasService,
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