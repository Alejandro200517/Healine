import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

 
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

import { AgendaHomeComponent } from './pages/admin/homes-herramientas/agenda-home/agenda-home.component';
import { ConsultarAgendaComponent } from './cruds/agenda/consultar-agenda/consultar-agenda.component';
import { RegistrarAgendaComponent } from './cruds/agenda/registrar-agenda/registrar-agenda.component';
import { EditarConsultarAgendaComponent } from './cruds/agenda/editar-consultar-agenda/editar-consultar-agenda.component';
import { EditarAgendaComponent } from './cruds/agenda/editar-agenda/editar-agenda.component';
import { UsuariosService } from './shared/services/usuarios.service';
import { AgendaService } from './shared/services/agenda.service';


import { SedesService } from './shared/services/sedes.service';
import { SedesHomeComponent } from './pages/admin/homes-herramientas/sedes-home/sedes-home.component';
import { ConsultarSedesComponent } from './cruds/sedes/consultar-sedes/consultar-sedes.component';
import { RegistrarSedesComponent } from './cruds/sedes/registrar-sedes/registrar-sedes.component';
import { EditarConsultarSedesComponent } from './cruds/sedes/editar-consultar-sedes/editar-consultar-sedes.component';
import { EditarSedesComponent } from './cruds/sedes/editar-sedes/editar-sedes.component';

import { RolesHomeComponent } from './pages/admin/homes-herramientas/roles-home/roles-home.component';
import { ConsultarRolesComponent } from './cruds/roles/consultar-roles/consultar-roles.component';
import { RegistrarRolesComponent } from './cruds/roles/registrar-roles/registrar-roles.component';
import { EditarConsultarRolesComponent } from './cruds/roles/editar-consultar-roles/editar-consultar-roles.component';
import { EditarRolesComponent } from './cruds/roles/editar-roles/editar-roles.component';
import { RolesService } from './shared/services/roles.service';
import { ConsultarEspecialidadesComponent } from './cruds/especialidades/consultar-especialidades/consultar-especialidades.component';
import { RegistrarEspecialidadesComponent } from './cruds/especialidades/registrar-especialidades/registrar-especialidades.component';
import { EditarConsultarEspecialidadesComponent } from './cruds/especialidades/editar-consultar-especialidades/editar-consultar-especialidades.component';
import { EditarEspecialidadesComponent } from './cruds/especialidades/editar-especialidades/editar-especialidades.component';
import { EspecialidadesHomeComponent } from './pages/admin/homes-herramientas/especialidades-home/especialidades-home.component';
import { CitasHomeComponent } from './pages/admin/homes-herramientas/citas-home/citas-home.component';
import { ConsultarCitasComponent } from './cruds/citas/consultar-citas/consultar-citas.component';
import { RegistrarCitasComponent } from './cruds/citas/registrar-citas/registrar-citas.component';
import { EditarConsultarCitasComponent } from './cruds/citas/editar-consultar-citas/editar-consultar-citas.component';
import { EditarCitasComponent } from './cruds/citas/editar-citas/editar-citas.component';

import { CitasService } from './shared/services/citas.service';

//import { HistoriaHomeComponent } from './pages/admin/homes-herramientas/historia-home/historia-home.component';
//import { ConsultarHistoriaComponent } from './cruds/historia/consultar-historia/consultar-historia.component';
//import { RegistrarHistoriaComponent } from './cruds/historia/registrar-historia/registrar-historia.component';
//import { EditarConsultarHistoriaComponent } from './cruds/historia/editar-consultar-historia/editar-consultar-historia.component';
//import { EditarHistoriaComponent } from './cruds/historia/editar-historia/editar-historia.component';



@NgModule({
  declarations: [
    AppComponent,
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
    EditarUsuariosComponent,
    AgendaHomeComponent,
    ConsultarAgendaComponent,
    RegistrarAgendaComponent,
    EditarConsultarAgendaComponent,
    EditarAgendaComponent,
    SedesHomeComponent,
    RolesHomeComponent,
    ConsultarSedesComponent,
    RegistrarSedesComponent,
    EditarConsultarSedesComponent,
    EditarSedesComponent,
    ConsultarRolesComponent,
    RegistrarRolesComponent,
    EditarConsultarRolesComponent,
    EditarRolesComponent,
    ConsultarEspecialidadesComponent,
    RegistrarEspecialidadesComponent,
    EditarConsultarEspecialidadesComponent,
    EditarEspecialidadesComponent,
    EspecialidadesHomeComponent,
    CitasHomeComponent,
    ConsultarCitasComponent,
    RegistrarCitasComponent,
    EditarConsultarCitasComponent,
    EditarCitasComponent,
    //HistoriaHomeComponent,
    //ConsultarHistoriaComponent,
    //RegistrarHistoriaComponent,
    //EditarConsultarHistoriaComponent,
    //EditarHistoriaComponent,
    
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
    TurnoService,
    RegistrarService,
    UsuariosService,
    AgendaService,
    SedesService,
    RolesService,
    CitasService
    //HistoriaService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
