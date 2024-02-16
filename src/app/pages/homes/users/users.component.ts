import { Component, OnInit } from '@angular/core';
import { RegistrarLoginService } from '../../../shared/services/registrarlogin.service';
import { RegistrarLoginModel } from '../../../shared/models/registrarlogin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['../../../app.component.css']
})
export class UsersComponent implements OnInit {

  users = new RegistrarLoginModel('','','','','','','','','','','','');

  constructor(
    private registrarloginService: RegistrarLoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit');
  
    this.registrarloginService.agregarUsuarios(this.users).subscribe(
      (data) => {
        alert('Usuario registrado correctamente');
        this.router.navigate(['/login']); 
      },
      (error) => {
        if (error.status === 400) {
          alert('El correo electrónico o el documento ya están registrados');
        } else if (error.status === 500) {
          alert('Verifica El Documento');
        } else {
          console.error(error);
        }
      }
    );
  }
  
}