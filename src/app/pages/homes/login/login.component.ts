import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrarLoginService } from '../../../shared/services/registrarlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showAlert: boolean = false;

  goBack() {
    window.history.back();
  }
  constructor(private fb: FormBuilder, private registrarloginService: RegistrarLoginService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
  
      if (email && password) {
        this.registrarloginService.login(email, password).subscribe(
          (response) => {
            console.log(response);
  
            if (response && response.usuario && response.usuario.rol) {
              const rol = response.usuario.rol;
  
              switch (rol) {
                case 'Administrador':
                  this.router.navigate(['/admin-home']);
                  break;
                case 'User':
                  this.router.navigate(['/user-home']);
                  break;
                case 'Paciente':
                  this.router.navigate(['/paciente-home']);
                  break;
                case 'Medico':
                  this.router.navigate(['/medico-home']);
                  break;
                case 'Secretaria':
                  this.router.navigate(['/secretaria-home']);
                  break;
                default:
                  console.error('Rol de usuario no reconocido:', rol);
                  break;
              }
            } else {
              console.error('Respuesta de inicio de sesión inválida:', response);
              this.showAlert = true; 
            }
          },
          (error) => {
            console.error('Error en el proceso de inicio de sesión:', error);
            this.showAlert = true; 
            alert('Credenciales de inicio de sesión incorrectas. Por favor, inténtalo de nuevo.');
          }
        );
      } else {
        this.showAlert = true;
        alert('Verifique Los Campos');
      }
    } else {
      this.showAlert = true;
      alert('Verifique Los Campos');
      return; 
    }
  }
}