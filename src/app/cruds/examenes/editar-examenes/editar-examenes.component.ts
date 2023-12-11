import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ExamenesModel } from 'src/app/shared/models/examenes.model';
import { ExamenesService } from '../../../shared/services/examenes.service';
import { UsuariosModel } from 'src/app/shared/models/usuarios.model';
import { UsuariosService } from '../../../shared/services/usuarios.service';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { CitasService } from '../../../shared/services/citas.service';

@Component({
  selector: 'app-editar-examenes',
  templateUrl: './editar-examenes.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarExamenesComponent implements OnInit {
  id = '';
  examenes = new ExamenesModel('', '', '', '', '', '');
  usuariosPacientes: UsuariosModel[] = [];
  citas: CitasModel[] = [];

  constructor(
    private examenesService: ExamenesService,
    private route: ActivatedRoute,
    private usuariosService: UsuariosService,
    private citasService: CitasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.examenesService.obtenerExamen(this.id).subscribe(data => {
        this.examenes = data[0];
      }, error => {
        console.log(error);
      });
    } else {
      console.log("CREAR");
    }

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
    if (this.id) {
      this.examenesService.actualizarExamenes(this.examenes).subscribe(
        (data) => {
          alert('examen actualizado correctamente');
          this.router.navigate(['/editar-consultar-examenes']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o el examen ya está registrado');
          } else {
            console.error(error);
          }
        }
      );
    } else {
      this.examenesService.agregarExamenes(this.examenes).subscribe(
        (data) => {
          alert('examen registradO correctamente');
          this.router.navigate(['/editar-consultar-examenes']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o el examen ya está registrado');
          } else {
            console.error(error);
          }
        }
      );
    }
  }
}
