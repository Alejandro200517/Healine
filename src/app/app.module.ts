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
import { RegistrarComponent } from './pages/homes/registrar/registrar.component';
import { LoginComponent } from './pages/homes/login/login.component';
import { IndexComponent } from './pages/homes/index/index.component';
import { ServiciosComponent } from './pages/homes/servicios/servicios.component';
import { AcercaComponent } from './pages/homes/acerca/acerca.component';
import { EspecialidadesComponent } from './pages/homes/especialidades/especialidades.component';


@NgModule({
  declarations: [
    AppComponent,
    EditarRolesComponent,
    ListarRolesComponent,
    RegistrarComponent,
    LoginComponent,
    
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
    RolesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
