
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


// Pages Admin Homes
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminHome2Component } from './pages/admin/admin-home-2/admin-home-2.component';
import { HerramientasComponent } from './pages/admin/herramientas/herramientas.component';
import { UsuariosHomeComponent } from './pages/admin/homes-herramientas/usuarios-home/usuarios-home.component';
import { AgendaHomeComponent } from './pages/admin/homes-herramientas/agenda-home/agenda-home.component';
import { SedesHomeComponent } from './pages/admin/homes-herramientas/sedes-home/sedes-home.component';
import { RolesHomeComponent } from './pages/admin/homes-herramientas/roles-home/roles-home.component';
//import { HistoriaHomeComponent } from './pages/admin/homes-herramientas/historia-home/historia-home.component';
import { EspecialidadesHomeComponent } from './pages/admin/homes-herramientas/especialidades-home/especialidades-home.component';
import { CitasHomeComponent } from './pages/admin/homes-herramientas/citas-home/citas-home.component';
import { FormulasHomeComponent } from './pages/admin/homes-herramientas/formulas-home/formulas-home.component';
import { OrdenesHomeComponent } from './pages/admin/homes-herramientas/ordenes-home/ordenes-home.component';
import { ExamenesHomeComponent } from './pages/admin/homes-herramientas/examenes-home/examenes-home.component';
import { IncapacidadHomeComponent } from './pages/admin/homes-herramientas/incapacidad-home/incapacidad-home.component';


// CRUDS Admin

import { ConsultarUsuariosComponent } from './cruds/usuarios/consultar-usuarios/consultar-usuarios.component';
import { RegistrarUsuariosComponent } from './cruds/usuarios/registrar-usuarios/registrar-usuarios.component';
import { EditarConsultarUsuariosComponent } from './cruds/usuarios/editar-consultar-usuarios/editar-consultar-usuarios.component';
import { EditarUsuariosComponent } from './cruds/usuarios/editar-usuarios/editar-usuarios.component';

import { ConsultarAgendaComponent } from './cruds/agenda/consultar-agenda/consultar-agenda.component';
import { RegistrarAgendaComponent } from './cruds/agenda/registrar-agenda/registrar-agenda.component';
import { EditarConsultarAgendaComponent } from './cruds/agenda/editar-consultar-agenda/editar-consultar-agenda.component';
import { EditarAgendaComponent } from './cruds/agenda/editar-agenda/editar-agenda.component';

import { ConsultarSedesComponent } from './cruds/sedes/consultar-sedes/consultar-sedes.component';
import { RegistrarSedesComponent } from './cruds/sedes/registrar-sedes/registrar-sedes.component';
import { EditarConsultarSedesComponent } from './cruds/sedes/editar-consultar-sedes/editar-consultar-sedes.component';
import { EditarSedesComponent } from './cruds/sedes/editar-sedes/editar-sedes.component';

import { ConsultarRolesComponent } from './cruds/roles/consultar-roles/consultar-roles.component';
import { RegistrarRolesComponent } from './cruds/roles/registrar-roles/registrar-roles.component';
import { EditarConsultarRolesComponent } from './cruds/roles/editar-consultar-roles/editar-consultar-roles.component';
import { EditarRolesComponent } from './cruds/roles/editar-roles/editar-roles.component';

//import { ConsultarHistoriaComponent } from './cruds/historia/consultar-historia/consultar-historia.component';
//import { RegistrarHistoriaComponent } from './cruds/historia/registrar-historia/registrar-historia.component';
//import { EditarConsultarHistoriaComponent } from './cruds/historia/editar-consultar-historia/editar-consultar-historia.component';
//import { EditarHistoriaComponent } from './cruds/historia/editar-historia/editar-historia.component';

import { ConsultarEspecialidadesComponent } from './cruds/especialidades/consultar-especialidades/consultar-especialidades.component';
import { RegistrarEspecialidadesComponent } from './cruds/especialidades/registrar-especialidades/registrar-especialidades.component';
import { EditarConsultarEspecialidadesComponent } from './cruds/especialidades/editar-consultar-especialidades/editar-consultar-especialidades.component';
import { EditarEspecialidadesComponent } from './cruds/especialidades/editar-especialidades/editar-especialidades.component';

import { ConsultarCitasComponent } from './cruds/citas/consultar-citas/consultar-citas.component';
import { RegistrarCitasComponent } from './cruds/citas/registrar-citas/registrar-citas.component';
import { EditarConsultarCitasComponent } from './cruds/citas/editar-consultar-citas/editar-consultar-citas.component';
import { EditarCitasComponent } from './cruds/citas/editar-citas/editar-citas.component';

import { ConsultarFormulasComponent } from './cruds/formulas/consultar-formulas/consultar-formulas.component';
import { RegistrarFormulasComponent } from './cruds/formulas/registrar-formulas/registrar-formulas.component';
import { EditarConsultarFormulasComponent } from './cruds/formulas/editar-consultar-formulas/editar-consultar-formulas.component';
import { EditarFormulasComponent } from './cruds/formulas/editar-formulas/editar-formulas.component';

import { ConsultarOrdenesComponent } from './cruds/ordenes/consultar-ordenes/consultar-ordenes.component';
import { RegistrarOrdenesComponent } from './cruds/ordenes/registrar-ordenes/registrar-ordenes.component';
import { EditarConsultarOrdenesComponent } from './cruds/ordenes/editar-consultar-ordenes/editar-consultar-ordenes.component';
import { EditarOrdenesComponent } from './cruds/ordenes/editar-ordenes/editar-ordenes.component';

import { RegistrarExamenesComponent } from './cruds/examenes/registrar-examenes/registrar-examenes.component';
import { ConsultarExamenesComponent } from './cruds/examenes/consultar-examenes/consultar-examenes.component';
import { EditarConsultarExamenesComponent } from './cruds/examenes/editar-consultar-examenes/editar-consultar-examenes.component';
import { EditarExamenesComponent } from './cruds/examenes/editar-examenes/editar-examenes.component';

import { RegistrarIncapacidadComponent } from './cruds/incapacidad/registrar-incapacidad/registrar-incapacidad.component';
import { ConsultarIncapacidadComponent } from './cruds/incapacidad/consultar-incapacidad/consultar-incapacidad.component';
import { EditarConsultarIncapacidadComponent } from './cruds/incapacidad/editar-consultar-incapacidad/editar-consultar-incapacidad.component';
import { EditarIncapacidadComponent } from './cruds/incapacidad/editar-incapacidad/editar-incapacidad.component';



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
  { path:'agenda-home', component: AgendaHomeComponent },
  { path:'sedes-home', component: SedesHomeComponent },
  { path:'roles-home', component: RolesHomeComponent },
  { path:'especialidades-home', component: EspecialidadesHomeComponent },
  { path:'citas-home', component: CitasHomeComponent },
  { path:'formulas-home', component: FormulasHomeComponent },
  { path:'ordenes-home', component: OrdenesHomeComponent },
  { path:'examenes-home', component: ExamenesHomeComponent },
  { path:'incapacidad-home', component: IncapacidadHomeComponent },


  { path:'consultar-usuarios', component: ConsultarUsuariosComponent },
  { path:'registrar-usuarios', component: RegistrarUsuariosComponent },
  { path:'editar-consultar-usuarios', component: EditarConsultarUsuariosComponent },
  { path:'editar-usuarios/editar/:id', component: EditarUsuariosComponent },

  { path:'consultar-agenda', component: ConsultarAgendaComponent },
  { path:'registrar-agenda', component: RegistrarAgendaComponent },
  { path:'editar-consultar-agenda', component: EditarConsultarAgendaComponent },
  { path:'editar-agenda/editar/:id', component: EditarAgendaComponent },

  { path:'consultar-sedes', component: ConsultarSedesComponent },
  { path:'registrar-sedes', component: RegistrarSedesComponent },
  { path:'editar-consultar-sedes', component: EditarConsultarSedesComponent },
  { path:'editar-sedes/editar/:id', component: EditarSedesComponent },

  { path:'consultar-roles', component: ConsultarRolesComponent },
  { path:'registrar-roles', component: RegistrarRolesComponent },
  { path:'editar-consultar-roles', component: EditarConsultarRolesComponent },
  { path:'editar-roles/editar/:id', component: EditarRolesComponent },

  //{ path:'consultar-historia', component: ConsultarHistoriaComponent },
  //{ path:'registrar-historia', component: RegistrarHistoriaComponent },
  //{ path:'editar-consultar-historia', component: EditarConsultarHistoriaComponent },
  //{ path:'editar-historia/editar/:id', component: EditarHistoriaComponent },

  { path:'consultar-especialidades', component: ConsultarEspecialidadesComponent },
  { path:'registrar-especialidades', component: RegistrarEspecialidadesComponent },
  { path:'editar-consultar-especialidades', component: EditarConsultarEspecialidadesComponent },
  { path:'editar-especialidades/editar/:id', component: EditarEspecialidadesComponent },

  { path:'consultar-citas', component: ConsultarCitasComponent },
  { path:'registrar-citas', component: RegistrarCitasComponent },
  { path:'editar-consultar-citas', component: EditarConsultarCitasComponent },
  { path:'editar-citas/editar/:id', component: EditarCitasComponent },

  { path:'consultar-formulas', component: ConsultarFormulasComponent },
  { path:'registrar-formulas', component: RegistrarFormulasComponent },
  { path:'editar-consultar-formulas', component: EditarConsultarFormulasComponent },
  { path:'editar-formulas/editar/:id', component: EditarFormulasComponent },
  
  { path:'consultar-ordenes', component: ConsultarOrdenesComponent },
  { path:'registrar-ordenes', component: RegistrarOrdenesComponent },
  { path:'editar-consultar-ordenes', component: EditarConsultarOrdenesComponent },
  { path:'editar-ordenes/editar/:id', component: EditarOrdenesComponent },

  { path:'consultar-examenes', component: ConsultarExamenesComponent },
  { path:'registrar-examenes', component: RegistrarExamenesComponent },
  { path:'editar-consultar-examenes', component: EditarConsultarExamenesComponent },
  { path:'editar-examenes/editar/:id', component: EditarExamenesComponent },

  { path:'consultar-incapacidad', component: ConsultarIncapacidadComponent },
  { path:'registrar-incapacidad', component: RegistrarIncapacidadComponent },
  { path:'editar-consultar-incapacidad', component: EditarConsultarIncapacidadComponent },
  { path:'editar-incapacidad/editar/:id', component: EditarIncapacidadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
