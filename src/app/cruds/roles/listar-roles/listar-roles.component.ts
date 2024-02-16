import { Component, OnInit } from '@angular/core';
import { RolesModel } from '../../../shared/models/roles.model';
import { Observable } from 'rxjs';
import { RolesService } from '../../../shared/services/roles.service';

@Component({
  selector: 'app-lista-roles',
  templateUrl: './listar-roles.component.html',
  styleUrls: ['./listar-roles.component.css']
})
export class ListarRolesComponent implements OnInit {
 
  roles: Observable<RolesModel[]> | undefined;

  constructor(private rolesService: RolesService) { }

  ngOnInit() {
    this.roles = this.rolesService.obtenerRoles();
  }

  borrarRoles(id: string) {
    this.rolesService.borrarRoles(id).subscribe(() => {
      this.roles = this.rolesService.obtenerRoles();
    });
  }
}
