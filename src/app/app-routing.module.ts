
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/homes/index/index.component';
import { ServiciosComponent } from './pages/homes/servicios/servicios.component';
import { AcercaComponent } from './pages/homes/acerca/acerca.component';
import { EspecialidadesComponent } from './pages/homes/especialidades/especialidades.component';
import { LoginComponent } from './pages/homes/login/login.component';


import { EditarRolesComponent } from './cruds/roles/editar-roles/editar-roles.component';
import { ListarRolesComponent } from './cruds/roles/listar-roles/listar-roles.component';

import { EditarTurnoComponent } from './cruds/turno_medico/editar-turno/editar-turno.component';
import { ListarTurnoComponent } from './cruds/turno_medico/listar-turno/listar-turno.component';

import { RegistrarUsuarioComponent } from './pages/homes/registrar/registrar.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'especialidades', component: EspecialidadesComponent },
  { path: 'login', component: LoginComponent },


  { path:'roles', component: ListarRolesComponent },
  { path:'roles/editar/:id', component: EditarRolesComponent },
  { path:'roles/agregar', component: EditarRolesComponent },

  { path:'turno', component: ListarTurnoComponent },
  { path:'turno/editar/:id', component: EditarTurnoComponent },
  { path:'turno/agregar', component: EditarTurnoComponent },

  { path:'registrar/agregar', component: RegistrarUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
