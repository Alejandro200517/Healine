import { Component, OnInit } from '@angular/core';
import { IncapacidadModel } from 'src/app/shared/models/incapacidad.model';
import { IncapacidadService } from '../../../shared/services/incapacidad.service';
import { UsuariosModel } from 'src/app/shared/models/usuarios.model';
import { UsuariosService } from '../../../shared/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-incapacidad',
  templateUrl: './registrar-incapacidad.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarIncapacidadComponent implements OnInit {
  incapacidad = new IncapacidadModel('', '', '', '', '', '');
  usuariosMedicos: UsuariosModel[] = [];
  usuariosPacientes: UsuariosModel[] = [];


  constructor(
    private incapacidadService: IncapacidadService,
    private usuariosService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.usuariosService.obtenerUsuarios().subscribe(
      (data) => {
        this.usuariosMedicos = data.filter(usuario => usuario.rol === 'Medico');
      },
      (error) => {
        console.error(error);
      }
    );

    this.usuariosService.obtenerUsuarios().subscribe(
      (data) => {
        this.usuariosPacientes = data.filter(usuario => usuario.rol === 'Paciente');
      },
      (error) => {
        console.error(error);
      }
    );
  }
  

  onSubmit() {
    console.log("Médico seleccionado:", this.incapacidad.medico); // Añade esta línea para depuración
    
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
}