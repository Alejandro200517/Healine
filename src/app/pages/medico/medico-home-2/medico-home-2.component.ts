import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/shared/services/citas.service';
import { CitasModel } from 'src/app/shared/models/citas.model';

@Component({
  selector: 'app-medico-home-2',
  templateUrl: './medico-home-2.component.html',
  styleUrls: ['../../../app.component.css']
})
export class MedicoHome2Component implements OnInit {
  hour: string = '00';
  minute: string = '00';
  second: string = '00';
  userInfo: any; 
  citasContador: number = 0;
  citasProximas: CitasModel[] = [];

  constructor(private citasService: CitasService) {}

  ngOnInit() {
    this.updateClock(); 
    setInterval(() => this.updateClock(), 1000); 

    // Obtener la información del usuario del Login :C
    this.userInfo = JSON.parse(localStorage.getItem('medicUser') || '{}');

    this.obtenerCitasMedico();
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
        // Contador De Citas
        const citasMedico = citas.filter(cita => cita.medico.includes(this.userInfo.documento));
        this.citasContador = citasMedico.length;
        // Citas Proximas
        citasMedico.sort((a, b) => new Date(a.fecha + 'T' + a.hora).getTime() - new Date(b.fecha + 'T' + b.hora).getTime());
        this.citasProximas = citasMedico.slice(0, 3);
      },
      error => {
        console.error('Error al obtener citas del médico:', error);
      }
    );
  }
}
