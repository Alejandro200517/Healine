import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-home-2',
  templateUrl: './medico-home-2.component.html',
  styleUrls: ['../../../app.component.css']
})
export class MedicoHome2Component implements OnInit {
  hour: string = '00';
  minute: string = '00';
  second: string = '00';

  ngOnInit() {
    this.updateClock(); // Llama a la función para inicializar el reloj
    setInterval(() => this.updateClock(), 1000); // Actualiza el reloj cada segundo
  }

  updateClock() {
    const now = new Date();
    this.hour = now.getHours().toString().padStart(2, '0');
    this.minute = now.getMinutes().toString().padStart(2, '0');
    this.second = now.getSeconds().toString().padStart(2, '0');
  }
}
