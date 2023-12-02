import { Component, OnInit } from '@angular/core';
import { UsuariosModel } from '../../../shared/models/usuarios.model';
import { Observable } from 'rxjs';
import { UsuariosService } from '../../../shared/services/usuarios.service';

@Component({
  selector: 'app-editar-consultar-usuarios',
  templateUrl: './editar-consultar-usuarios.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarConsultarUsuariosComponent implements OnInit {
  usuarios: Observable<UsuariosModel[]> | undefined;
  filtroCorreo: string = '';

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuarios = this.usuariosService.obtenerUsuarios();
  }

  borrarUsuarios(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar este usuario?');

    if (confirmacion) {
      this.usuariosService.borrarUsuarios(id).subscribe(data => {
        console.log(data);

        this.usuariosService.obtenerUsuarios().subscribe(updatedUsuarios => {
          this.usuarios = this.usuariosService.obtenerUsuarios();
        });
      });
    }
  }

  filtrarUsuarios(usuarios: UsuariosModel[] | null): UsuariosModel[] {
    if (!usuarios) {
      return [];
    }
  
    return this.filtroCorreo
      ? usuarios.filter(p => p.email.toLowerCase().includes(this.filtroCorreo.toLowerCase()))
      : usuarios;
  }
  
}