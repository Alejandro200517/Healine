import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { ExamenesModel } from 'src/app/shared/models/examenes.model';
import { UsersModel } from 'src/app/shared/models/users.model';
import { CitasService } from 'src/app/shared/services/citas.service';
import { ExamenesService } from 'src/app/shared/services/examenes.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-editar-examenes-medico',
  templateUrl: './editar-examenes-medico.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarExamenesMedicoComponent implements OnInit {
  id = '';
  examenes = new ExamenesModel('', '', '', '', '', '');
  usersPacientes: UsersModel[] = [];
  citas: CitasModel[] = [];
  isFormSubmitted: boolean = false;

  constructor(
    private examenesService: ExamenesService,
    private route: ActivatedRoute,
    private usersService: UsersService,
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

    this.usersService.obtenerUsers().subscribe(
      (data) => {
        this.usersPacientes = data.filter(user => user.rol === 'Paciente');
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

    if (!this.isFormFilled()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    if (this.id) {
      this.examenesService.actualizarExamenes(this.examenes).subscribe(
        (data) => {
          alert('examen actualizado correctamente');
          this.router.navigate(['/editar-consultar-examenes-medico']);
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
          alert('examen registrado correctamente');
          this.router.navigate(['/editar-consultar-examenes-medico']);
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
  isFormFilled(): boolean {
    return !!this.examenes.nombre && !!this.examenes.resultado && !!this.examenes.fecha;
  }
}