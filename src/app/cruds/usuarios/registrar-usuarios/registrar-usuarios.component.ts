import { Component, OnInit } from '@angular/core';
import { UsuariosModel } from 'src/app/shared/models/usuarios.model';
import { UsuariosService } from '../../../shared/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarUsuariosComponent implements OnInit {

  usuarios = new UsuariosModel('', Number(''), '', '', '', '', '', '', Number(''));

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit');

    this.usuariosService.agregarUsuarios(this.usuarios).subscribe(
      (data) => {
        alert('Usuario registrado correctamente');
        this.router.navigate(['/usuarios-home']); 
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifique los campos o el documento ya esta registrado');
        } else {
          console.error(error);
        }
      }
    );
  }
}
