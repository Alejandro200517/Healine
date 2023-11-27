import { Component, OnInit } from '@angular/core';
import { RolesModel } from '../../../shared/models/roles.model';
import { RolesService } from '../../../shared/services/roles.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-editar-roles',
  templateUrl: './editar-roles.component.html',
  styleUrls: ['./editar-roles.component.css']
})
export class EditarRolesComponent  implements OnInit {

  id = ''
  roles = new RolesModel("","","");

  constructor(
    private rolesService: RolesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      console.log("EDITAR");
      this.rolesService.obtenerRol(this.id).subscribe(data => {
        this.roles = data[0];
      }, error => {
        console.log(error);
      });
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if(this.roles.id_roles) {
      this.rolesService.actualizarRoles(this.roles).subscribe(data => {
        alert(data)
        this.router.navigate(['/roles'])
      })
    } else {
      console.log('crear');
      this.rolesService.agregarRoles(this.roles).subscribe(data => {
        alert(data)
        this.router.navigate(['/roles'])
      })
    }
  }
}
