import { Component, OnInit } from '@angular/core';
import { RegistrarService } from '../../../shared/services/registrar.service';
import { RegistrarModel } from '../../../shared/models/registrar-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  registrar = new RegistrarModel('','','','','','','','','');

  constructor(
    private registrarService: RegistrarService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit');

    this.registrarService.registrarUsuario(this.registrar).subscribe(
      (data) => {
        alert('Usuario registrado correctamente');
        this.router.navigate(['/login']); 
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifica El Documento');
        } else {
          console.error(error);
        }
      }
    );
  }
}
