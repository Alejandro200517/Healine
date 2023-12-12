import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../app.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router) {
    this.loginForm = this.fb.group({
      correo: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const correo = this.loginForm.get('correo')?.value;
      const contrasena = this.loginForm.get('contrasena')?.value;
  
      if (correo && contrasena) { // Verifica que los valores no son nulos
        this.userService.login(correo, contrasena).subscribe(
          (response) => {
            // Maneja la respuesta del servidor, por ejemplo, redirige a /admin-home si el rol es Administrador
            if (response.rol === 'Administrador') {
              this.router.navigate(['/admin-home']);
            } else {
              this.router.navigate(['/user-home']);
            }
          },
          (error) => {
            console.error('Error en el inicio de sesión:', error);
          }
        );
      }
    }
  }
  
}
