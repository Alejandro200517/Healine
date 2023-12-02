import { Component, OnInit } from '@angular/core';
import { UsuariosModel } from '../../../shared/models/usuarios.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../../shared/services/usuarios.service';


@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarUsuariosComponent implements OnInit {

  id = ''
  usuarios = new UsuariosModel('', Number(''), '', '', '', '', '', '', Number(''));

  constructor(
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    if(this.id) {
      console.log("EDITAR");
      this.usuariosService.obtenerUsuario(this.id).subscribe(data=> {
        this.usuarios = data[0]
      }, error => {
        console.log(error);
      })
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');
  
    if (this.usuarios.documento) {
      this.usuariosService.actualizarUsuarios(this.usuarios).subscribe(data => {
        alert(data);
        this.router.navigate(['/editar-consultar-usuarios']);
      }, error => {
        console.log(error);
        // Puedes manejar el error aquí, mostrar un mensaje al usuario, etc.
      });
    } else {
      console.log('crear');
      // Aquí puedes agregar la lógica para crear un nuevo usuario si no hay documento.
    }
  }
  
  }