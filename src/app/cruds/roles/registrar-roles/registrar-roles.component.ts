import { Component, OnInit } from '@angular/core';
import { RolesModel } from 'src/app/shared/models/roles.model';
import { RolesService } from '../../../shared/services/roles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-roles',
  templateUrl: './registrar-roles.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarRolesComponent implements OnInit {

  roles = new RolesModel('', '');

  constructor(
    private rolesService: RolesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit');

    this.rolesService.agregarRoles(this.roles).subscribe(
      (data) => {
        alert('Rol registrado correctamente');
        this.router.navigate(['/roles-home']); 
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifica los campos o el rol ya está registrada');
        } else {
          console.error(error);
        }
      }
    );
  }
}
