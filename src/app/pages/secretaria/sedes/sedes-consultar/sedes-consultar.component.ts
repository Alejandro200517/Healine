import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SedesModel } from 'src/app/shared/models/sedes.model';
import { SedesService } from 'src/app/shared/services/sedes.service';









@Component({
  selector: 'app-sedes-consultar',
  templateUrl: './sedes-consultar.component.html',
  styleUrls: ['./sedes-consultar.component.css']
})
export class SedesConsultarComponent implements OnInit {

  sede: Observable<SedesModel[]> | undefined;
  sedes: SedesModel[] = [];
  filtroNombreSede: string = '';

  constructor(private sedesService: SedesService) {}

  ngOnInit() {
    this.sedesService.obtenerSedes().subscribe(
      (data) => {
        this.sedes = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  borrarSede(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar esta Sede?');

    if (confirmacion) {
      this.sedesService.borrarSedes(id).subscribe(data => {
        console.log(data);

        this.sedesService.obtenerSedes().subscribe(updatedSedes => {
          this.sedes = updatedSedes;
        });
      });
    }
  }

  filtrarSedes(sedes: SedesModel[] | undefined | null): SedesModel[] {
    if (!sedes) {
      return [];
    }
  
    return sedes.filter(s => {
      const nombreSedeCoincide = this.filtroNombreSede === '' || s.nombreSede.toLowerCase().includes(this.filtroNombreSede.toLowerCase());
  
      return nombreSedeCoincide;
    });
  }
}
