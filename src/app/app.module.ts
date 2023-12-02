import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

 
import { EditarRolesComponent } from './cruds/roles/editar-roles/editar-roles.component';
import { ListarRolesComponent } from './cruds/roles/listar-roles/listar-roles.component';
import { RolesService } from './shared/services/roles.service';

import { EditarTurnoComponent } from './cruds/turno_medico/editar-turno/editar-turno.component';
import { ListarTurnoComponent } from './cruds/turno_medico/listar-turno/listar-turno.component';
import { TurnoService } from './shared/services/turno.service';

import { RegistrarUsuarioComponent } from './pages/homes/registrar/registrar.component';
import { RegistrarService } from './shared/services/registrar.service';


import { IndexComponent } from './pages/homes/index/index.component';
import { ServiciosComponent } from './pages/homes/servicios/servicios.component';
import { AcercaComponent } from './pages/homes/acerca/acerca.component';
import { EspecialidadesComponent } from './pages/homes/especialidades/especialidades.component';

import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminHome2Component } from './pages/admin/admin-home-2/admin-home-2.component';
import { HerramientasComponent } from './pages/admin/herramientas/herramientas.component';
import { IndexAdminComponent } from './pages/admin/index-admin/index-admin.component';
import { ServiciosAdminComponent } from './pages/admin/servicios-admin/servicios-admin.component';
import { AboutAdminComponent } from './pages/admin/about-admin/about-admin.component';
import { EspecialidadesAdminComponent } from './pages/admin/especialidades-admin/especialidades-admin.component';

import { PqrsComponent } from './pages/homes/pqrs/pqrs.component';
import { ListarPqrsComponent } from './pages/admin/pqrs-admin/listar-pqrs/listar-pqrs.component';
import { EditarPqrsComponent } from './pages/admin/pqrs-admin/editar-pqrs/editar-pqrs.component';
import { UsuariosHomeComponent } from './pages/admin/homes-herramientas/usuarios-home/usuarios-home.component';
import { ConsultarUsuariosComponent } from './cruds/usuarios/consultar-usuarios/consultar-usuarios.component';
import { RegistrarUsuariosComponent } from './cruds/usuarios/registrar-usuarios/registrar-usuarios.component';
import { EditarConsultarUsuariosComponent } from './cruds/usuarios/editar-consultar-usuarios/editar-consultar-usuarios.component';
import { EditarUsuariosComponent } from './cruds/usuarios/editar-usuarios/editar-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    EditarRolesComponent,
    ListarRolesComponent,
    EditarTurnoComponent,
    ListarTurnoComponent,
    RegistrarUsuarioComponent,
    AdminHomeComponent,
    AdminHome2Component,
    HerramientasComponent,
    IndexAdminComponent,
    ServiciosAdminComponent,
    AboutAdminComponent,
    EspecialidadesAdminComponent,
    PqrsComponent,
    ListarPqrsComponent,
    EditarPqrsComponent,
    UsuariosHomeComponent,
    ConsultarUsuariosComponent,
    RegistrarUsuariosComponent,
    EditarConsultarUsuariosComponent,
    EditarUsuariosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    IndexComponent,
    ServiciosComponent,
    AcercaComponent,
    EspecialidadesComponent,
    RouterModule
  ],
  providers: [
    RolesService,
    TurnoService,
    RegistrarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
