import { Component, OnInit } from '@angular/core';
import { TurnoModel } from '../../../shared/models/turno-model';
import { Observable } from 'rxjs';
import { TurnoService } from '../../../shared/services/turno.service';

@Component({
  selector: 'app-lista-turno',
  templateUrl: './listar-turno.component.html',
  styleUrls: ['./listar-turno.component.css']
})
export class ListarTurnoComponent implements OnInit {
 
  turno: Observable<TurnoModel[]> | undefined;

  constructor(private turnoService: TurnoService) { }

  ngOnInit() {
    this.turno = this.turnoService.obtenerTurno();
  }

  borrarTurno(id: string) {
    this.turnoService.borrarTurno(id).subscribe(() => {
      this.turno = this.turnoService.obtenerTurno();
    });
  }
}

