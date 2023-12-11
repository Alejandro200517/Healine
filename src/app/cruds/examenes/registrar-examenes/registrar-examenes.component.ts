import { Component, OnInit } from '@angular/core';
import { ExamenesModel } from 'src/app/shared/models/examenes.model';
import { ExamenesService } from '../../../shared/services/examenes.service';
import { Router } from '@angular/router';
import { UsuariosModel } from 'src/app/shared/models/usuarios.model';
import { UsuariosService } from '../../../shared/services/usuarios.service';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { CitasService } from '../../../shared/services/citas.service';

@Component({
  selector: 'app-registrar-examenes',
  templateUrl: './registrar-examenes.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarExamenesComponent implements OnInit {
  examenes = new ExamenesModel('', '', '', '', '', '');
  usuariosPacientes: UsuariosModel[] = [];
  citas: CitasModel[] = [];

  constructor(
    private examenesService: ExamenesService,
    private usuariosService: UsuariosService,
    private citasService: CitasService, // Agregamos el servicio de fórmulas
    private router: Router
  ) {}

  ngOnInit() {
    this.usuariosService.obtenerUsuarios().subscribe(
      (data) => {
        this.usuariosPacientes = data.filter(usuario => usuario.rol === 'Paciente');
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
