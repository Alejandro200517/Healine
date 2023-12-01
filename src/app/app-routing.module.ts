
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/homes/index/index.component';
import { ServiciosComponent } from './pages/homes/servicios/servicios.component';
import { AcercaComponent } from './pages/homes/acerca/acerca.component';
import { EspecialidadesComponent } from './pages/homes/especialidades/especialidades.component';
import { LoginComponent } from './pages/homes/login/login.component';

import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminHome2Component } from './pages/admin/admin-home-2/admin-home-2.component';
import { HerramientasComponent } from './pages/admin/herramientas/herramientas.component';
import { IndexAdminComponent } from './pages/admin/index-admin/index-admin.component';
import { ServiciosAdminComponent } from './pages/admin/servicios-admin/servicios-admin.component';
import { AboutAdminComponent } from './pages/admin/about-admin/about-admin.component';
import { EspecialidadesAdminComponent } from './pages/admin/especialidades-admin/especialidades-admin.component';


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
  { path: 'registrar/agregar', component: RegistrarUsuarioComponent },

  { path:'admin-home', component: AdminHomeComponent },
  { path:'admin-home-2', component: AdminHome2Component },
  { path:'herramientas', component: HerramientasComponent },
  { path:'index-admin', component: IndexAdminComponent },
  { path:'servicios-admin', component: ServiciosAdminComponent },
  { path:'acerca-admin', component: AboutAdminComponent },
  { path:'especialidades-admin', component: EspecialidadesAdminComponent },

  { path:'roles', component: ListarRolesComponent },
  { path:'roles/editar/:id', component: EditarRolesComponent },
  { path:'roles/agregar', component: EditarRolesComponent },

  { path:'turno', component: ListarTurnoComponent },
  { path:'turno/editar/:id', component: EditarTurnoComponent },
  { path:'turno/agregar', component: EditarTurnoComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
