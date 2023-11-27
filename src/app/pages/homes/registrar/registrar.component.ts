// registrar.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registroForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registrar() {
    // Implementa la lógica de registro aquí
    // Puedes acceder a los valores del formulario con this.registroForm.value
  }
}
