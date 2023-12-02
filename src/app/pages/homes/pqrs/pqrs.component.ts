import { Component } from '@angular/core';
import { PqrsModel } from '../../../shared/models/pqrs.model';
import { PqrsService } from '../../../shared/services/pqrs.service';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['../../../app.component.css']
})
export class PqrsComponent {
  pqrs = new PqrsModel('', '', '', '', '', '', '');

  constructor(private pqrsService: PqrsService) {}

  onSubmit() {
    // Validar que todos los campos estén llenos
    if (this.areFieldsFilled()) {
      // Enviar la PQRS solo si todos los campos están llenos
      this.pqrsService.agregarPqrs(this.pqrs).subscribe(
        () => {
          // Mostrar alerta de PQRS registrada
          window.alert('PQRS registrada correctamente');

          // Recargar la página actual
          location.reload();
        },
        (error) => {
          console.error('Error al agregar PQRS', error);
        }
      );
    } else {
      // Mostrar alerta si hay campos vacíos
      window.alert('Por favor, complete todos los campos antes de enviar la PQRS.');
    }
  }

  private areFieldsFilled(): boolean {
    // Validar que todos los campos estén llenos
    return (
      this.pqrs.tipo.trim() !== '' &&
      this.pqrs.descripcion.trim() !== '' &&
      this.pqrs.email.trim() !== '' &&
      this.pqrs.telefono.trim() !== '' &&
      this.pqrs.documento.trim() !== ''
    );
  }
}
