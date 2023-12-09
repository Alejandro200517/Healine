import { Component, OnInit } from '@angular/core';
import { UsuariosModel } from '../../../shared/models/usuarios.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../../shared/services/usuarios.service';
import { RolesService } from '../../../shared/services/roles.service';
import { SedesService } from '../../../shared/services/sedes.service'; 


@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarUsuariosComponent implements OnInit {

  id = ''
  usuarios = new UsuariosModel('', Number(''), '', '', '', '', '', '', Number(''), '', '');
  rolesList: any[] = [];
  sedesList: any[] = [];

  constructor(
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router,
    private rolesService: RolesService,
    private sedesService: SedesService
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

    this.rolesService.obtenerRoles().subscribe(
      (data) => {
        this.rolesList = data;
      },
      (error) => {
        console.error(error);
      }
    );

    // Obtén la lista de sedes al inicializar el componente
    this.sedesService.obtenerSedes().subscribe(
      (data) => {
        this.sedesList = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    console.log('onSubmit');
  
    if (this.usuarios.documento) {
      this.usuariosService.actualizarUsuarios(this.usuarios).subscribe(data => {
        alert(data);
        this.router.navigate(['/editar-consultar-usuarios']);
      }, error => {
        console.log(error);
      });
    } else {
      console.log('crear');
    }
  }
  
  }