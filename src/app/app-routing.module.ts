
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages Principales
import { IndexComponent } from './pages/homes/index/index.component';
import { ServiciosComponent } from './pages/homes/servicios/servicios.component';
import { AcercaComponent } from './pages/homes/acerca/acerca.component';
import { EspecialidadesComponent } from './pages/homes/especialidades/especialidades.component';
import { LoginComponent } from './pages/homes/login/login.component';
import { RegistrarUsuarioComponent } from './pages/homes/registrar/registrar.component';
import { PqrsComponent } from './pages/homes/pqrs/pqrs.component';


// Pages Principales Admin
import { IndexAdminComponent } from './pages/admin/index-admin/index-admin.component';
import { ServiciosAdminComponent } from './pages/admin/servicios-admin/servicios-admin.component';
import { AboutAdminComponent } from './pages/admin/about-admin/about-admin.component';
import { EspecialidadesAdminComponent } from './pages/admin/especialidades-admin/especialidades-admin.component';
import { ListarPqrsComponent } from './pages/admin/pqrs-admin/listar-pqrs/listar-pqrs.component';
import { EditarPqrsComponent } from './pages/admin/pqrs-admin/editar-pqrs/editar-pqrs.component';


// Pages Admin CRUDS
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminHome2Component } from './pages/admin/admin-home-2/admin-home-2.component';
import { HerramientasComponent } from './pages/admin/herramientas/herramientas.component';
import { UsuariosHomeComponent } from './pages/admin/homes-herramientas/usuarios-home/usuarios-home.component';
import { ConsultarUsuariosComponent } from './cruds/usuarios/consultar-usuarios/consultar-usuarios.component';
import { RegistrarUsuariosComponent } from './cruds/usuarios/registrar-usuarios/registrar-usuarios.component';
import { EditarConsultarUsuariosComponent } from './cruds/usuarios/editar-consultar-usuarios/editar-consultar-usuarios.component';
import { EditarUsuariosComponent } from './cruds/usuarios/editar-usuarios/editar-usuarios.component';

// CRUDS Admin
import { EditarRolesComponent } from './cruds/roles/editar-roles/editar-roles.component';

import { ListarRolesComponent } from './cruds/roles/listar-roles/listar-roles.component';

import { EditarTurnoComponent } from './cruds/turno_medico/editar-turno/editar-turno.component';
import { ListarTurnoComponent } from './cruds/turno_medico/listar-turno/listar-turno.component';




const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'especialidades', component: EspecialidadesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar/agregar', component: RegistrarUsuarioComponent },
  { path: 'pqrs', component: PqrsComponent },


  
  { path:'index-admin', component: IndexAdminComponent },
  { path:'servicios-admin', component: ServiciosAdminComponent },
  { path:'acerca-admin', component: AboutAdminComponent },
  { path:'especialidades-admin', component: EspecialidadesAdminComponent },
  { path:'pqrs-listar', component: ListarPqrsComponent },
  { path:'pqrs-editar/editar/:id', component: EditarPqrsComponent },

  
  { path:'admin-home', component: AdminHomeComponent },
  { path:'admin-home-2', component: AdminHome2Component },
  { path:'herramientas', component: HerramientasComponent },
  { path:'usuarios-home', component: UsuariosHomeComponent },
  

  { path:'roles', component: ListarRolesComponent },
  { path:'roles/editar/:id', component: EditarRolesComponent },
  { path:'roles/agregar', component: EditarRolesComponent },
  { path:'turno', component: ListarTurnoComponent },
  { path:'turno/editar/:id', component: EditarTurnoComponent },
  { path:'turno/agregar', component: EditarTurnoComponent },
  { path:'consultar-usuarios', component: ConsultarUsuariosComponent },
  { path:'registrar-usuarios', component: RegistrarUsuariosComponent },
  { path:'editar-consultar-usuarios', component: EditarConsultarUsuariosComponent },
  { path:'editar-usuarios/editar/:id', component: EditarUsuariosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
