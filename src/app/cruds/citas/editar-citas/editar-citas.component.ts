import { Component, OnInit } from '@angular/core';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { CitasService } from '../../../shared/services/citas.service';
import { UsuariosModel } from 'src/app/shared/models/usuarios.model';
import { UsuariosService } from '../../../shared/services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-citas',
  templateUrl: './editar-citas.component.html',
  styleUrls: ['./editar-citas.component.css']
})
export class EditarCitasComponent implements OnInit {
  id = '';
  citas = new CitasModel('', '', '', '', '', '', '');
  usuariosMedicos: UsuariosModel[] = [];

  constructor(
    private citasService: CitasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.citasService.obtenerCita(this.id).subscribe(data => {
        this.citas = data[0];
      }, error => {
        console.log(error);
      });
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log("Médico seleccionado:", this.citas.medico); // Añade esta línea para depuración

    if (!this.citas.medico) {
      // Si no se ha seleccionado ningún médico, muestra una alerta
      alert('Seleccione un médico');
      return;
    }

    if (this.id) {
      // Si hay un ID, significa que estás editando, entonces utiliza el método de actualizar
      this.citasService.actualizarCitas(this.citas).subscribe(
        (data) => {
          alert('cita actualizada correctamente');
          this.router.navigate(['/editar-consultar-citas']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o la cita ya está registrada');
          } else {
            console.error(error);
          }
        }
      );
    } else {
      // Si no hay un ID, significa que estás creando, utiliza el método de agregar
      this.citasService.agregarCitas(this.citas).subscribe(
        (data) => {
          alert('cita registrada correctamente');
          this.router.navigate(['/editar-consultar-citas']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o la citas ya está registrada');
          } else {
            console.error(error);
          }
        }
      );
    }
  }
}
