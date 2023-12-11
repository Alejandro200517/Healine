import { Component, OnInit } from '@angular/core';
import { CitasModel } from '../../../shared/models/citas.model';
import { Observable } from 'rxjs';
import { CitasService } from '../../../shared/services/citas.service';

@Component({
  selector: 'app-consultar-citas',
  templateUrl: './consultar-citas.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ConsultarCitasComponent implements OnInit {
  citas: Observable<CitasModel[]> | undefined;
  filtroMedico: string = '';

  constructor(private citasService: CitasService) {}

  ngOnInit() {
    this.citas = this.citasService.obtenerCitas();
  }

  borrarCitas(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar esta cita?');

    if (confirmacion) {
      this.citasService.borrarCitas(id).subscribe(data => {
        console.log(data);

        this.citasService.obtenerCitas().subscribe(updatedCitas => {
          this.citas = this.citasService.obtenerCitas();
        });
      });
    }
  }

  filtrarCitas(citas: CitasModel[] | null): CitasModel[] {
    if (!citas) {
      return [];
    }
  
    return citas.filter(u => {
      const medicoCoincide = this.filtroMedico.trim() === '' || u.medico.toLowerCase().includes(this.filtroMedico.toLowerCase());
  
      return medicoCoincide;
    });
  }
  
}