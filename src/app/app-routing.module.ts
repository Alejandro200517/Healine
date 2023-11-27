// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarRolesComponent } from './cruds/roles/editar-roles/editar-roles.component';
import { ListarRolesComponent } from './cruds/roles/listar-roles/listar-roles.component';
import { RegistrarComponent } from './pages/homes/registrar/registrar.component';
import { LoginComponent } from './pages/homes/login/login.component';
import { IndexComponent } from './pages/homes/index/index.component';
import { ServiciosComponent } from './pages/homes/servicios/servicios.component';
import { AcercaComponent } from './pages/homes/acerca/acerca.component';
import { EspecialidadesComponent } from './pages/homes/especialidades/especialidades.component';




const routes: Routes = [
  { path: 'registrar', component: RegistrarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'especialidades', component: EspecialidadesComponent },

  { path:'roles', component: ListarRolesComponent },
  { path:'roles/editar/:id', component: EditarRolesComponent },
  { path:'roles/agregar', component: EditarRolesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
