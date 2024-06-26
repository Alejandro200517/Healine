import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/shared/services/citas.service';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { Observable } from 'rxjs';
import { EncuestasModel } from 'src/app/shared/models/encuestas.model';
import { EncuestasService } from 'src/app/shared/services/encuestas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medico-citas',
  templateUrl: './medico-citas.component.html',
  styleUrls: ['../../../app.component.css']
})
export class MedicoCitasComponent implements OnInit {
  hour: string = '00';
  minute: string = '00';
  second: string = '00';
  userInfo: any; 
  citas: Observable<CitasModel[]> | undefined;
  citasMed: CitasModel[] = [];
  mostrarEncuesta: boolean = false;

  // Encuesta
  encuestas = new EncuestasModel('', '', '', '', '', '', '', '', '');
  isFormSubmitted: boolean = false;

  constructor(private citasService: CitasService, private encuestasService: EncuestasService, private router: Router) {}

  ngOnInit() {
    this.updateClock(); 
    setInterval(() => this.updateClock(), 1000); 

    this.userInfo = JSON.parse(localStorage.getItem('medicUser') || '{}');
    
    this.obtenerCitasMedico();
  }

  imprimirTabla() {
    const printContent = document.getElementById('tabla-imprimir');

    if (printContent) {
      const originalContents = document.body.innerHTML; 

      document.body.innerHTML = `
        <html>
          <head>
            <title>Citas Medicas</title>
          </head>
          <body>
            ${printContent.innerHTML}
          </body>
        </html>
      `;

      window.print(); 

      document.body.innerHTML = originalContents;
    } else {
      console.error('No se encontró la tabla para imprimir');
    }
}

  updateClock() {
    const now = new Date();
    this.hour = now.getHours().toString().padStart(2, '0');
    this.minute = now.getMinutes().toString().padStart(2, '0');
    this.second = now.getSeconds().toString().padStart(2, '0');
  }
  
  obtenerCitasMedico() {
    this.citasService.obtenerCitas().subscribe(
      (citas: CitasModel[]) => {
        const citasMedico = citas.filter(cita => cita.medico.includes(this.userInfo.documento));
  
        citasMedico.sort((a, b) => new Date(a.fecha + 'T' + a.hora).getTime() - new Date(b.fecha + 'T' + b.hora).getTime());
        
        this.citasMed = citasMedico;
      },
      error => {
        console.error('Error al obtener citas del médico:', error);
      }
    );
  }

  onSubmit() {
    console.log('onSubmit');

    if (!this.isFormFilled()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    this.encuestas.documento = `${this.userInfo.documento}`;
    this.encuestas.email = `${this.userInfo.email}`;
    this.encuestas.rol = `${this.userInfo.rol}`;

    this.encuestasService.agregarEncuestas(this.encuestas).subscribe(
      (data) => {
        alert('Encuestas registrada correctamente');
        this.router.navigate(['/index']); 
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifica los campos o la encuesta ya está registrada');
        } else {
          console.error(error);
        }
      }
    );
  }

  isFormFilled(): boolean {
    return !!this.encuestas.calificacion && !!this.encuestas.facilidad && !!this.encuestas.seguridad && !!this.encuestas.velocidad && !!this.encuestas.opinion;
  }

  salir() {
    this.mostrarEncuesta = false;
    window.location.href = '/index';
  }

  confirmarCita(cita: CitasModel) {
    cita.estado = 'confirmada';
    this.citasService.actualizarCitas(cita).subscribe(
        (data) => {
            alert('Cita confirmada correctamente');
        },
        (error) => {
            console.error(error);
            alert('Error al confirmar la cita');
        }
    );
}

cancelarCita(cita: CitasModel) {
    cita.estado = 'cancelada';
    this.citasService.actualizarCitas(cita).subscribe(
        (data) => {
            alert('Cita cancelada correctamente');
        },
        (error) => {
            console.error(error);
            alert('Error al cancelar la cita');
        }
    );
}
}
