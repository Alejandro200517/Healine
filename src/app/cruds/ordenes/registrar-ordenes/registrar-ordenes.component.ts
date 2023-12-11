import { Component, OnInit } from '@angular/core';
import { OrdenesModel } from 'src/app/shared/models/ordenes.model';
import { OrdenesService } from '../../../shared/services/ordenes.service';
import { Router } from '@angular/router';
import { UsuariosModel } from 'src/app/shared/models/usuarios.model';
import { UsuariosService } from '../../../shared/services/usuarios.service';
import { FormulasModel } from 'src/app/shared/models/formulas.model';
import { FormulasService } from '../../../shared/services/formulas.service';

@Component({
  selector: 'app-registrar-ordenes',
  templateUrl: './registrar-ordenes.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarOrdenesComponent implements OnInit {
  ordenes = new OrdenesModel('', '', '', '', '');
  usuariosPacientes: UsuariosModel[] = [];
  formulas: FormulasModel[] = [];

  constructor(
    private ordenesService: OrdenesService,
    private usuariosService: UsuariosService,
    private formulasService: FormulasService, // Agregamos el servicio de fórmulas
    private router: Router
  ) {}

  ngOnInit() {
    this.usuariosService.obtenerUsuarios().subscribe(
      (data) => {
        this.usuariosPacientes = data.filter(usuario => usuario.rol === 'Paciente');
      },
      (error) => {
        console.error(error);
      }
    );

    this.formulasService.obtenerFormulas().subscribe(
      (data) => {
        this.formulas = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    console.log('onSubmit');

    this.ordenesService.agregarOrdenes(this.ordenes).subscribe(
      (data) => {
        alert('orden registrado correctamente');
        this.router.navigate(['/ordenes-home']); 
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifique los campos o la orden ya está registrado');
        } else {
          console.error(error);
        }
      }
    );
  }
}