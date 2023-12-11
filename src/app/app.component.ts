// app.component.ts
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './pages/homes/menu/menu.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Healine';
  mostrarMenu = true;
  mostrarMenuAdmin = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mostrarMenu = !this.shouldHideMenu(event.url);
        this.mostrarMenuAdmin = this.shouldShowAdminMenu(event.url);
      }
    });
  }


  //Dejar esto: || this.shouldShowAdminMenu(url)
  private shouldHideMenu(url: string): boolean {
    return url.includes('admin-home') || 
    url.includes('admin-home-2') || 
    url.includes('herramientas')|| 
    
    url.includes('usuarios-home')|| 
    url.includes('registrar-usuarios')|| 
    url.includes('consultar-usuarios') || 
    url.includes('editar-consultar-usuarios') || 
    url.includes('editar-usuarios') || 

    url.includes('agenda-home') ||
    url.includes('registrar-agenda') ||
    url.includes('consultar-agenda') ||
    url.includes('editar-consultar-agenda') ||
    url.includes('editar-agenda') || 

    url.includes('sedes-home') ||
    url.includes('registrar-sedes') ||
    url.includes('consultar-sedes') ||
    url.includes('editar-consultar-sedes') ||
    url.includes('editar-sedes') ||

    url.includes('roles-home') ||
    url.includes('registrar-roles') ||
    url.includes('consultar-roles') ||
    url.includes('editar-consultar-roles') ||
    url.includes('editar-roles') ||

    url.includes('especialidades-home') ||
    url.includes('registrar-especialidades') ||
    url.includes('consultar-especialidades') ||
    url.includes('editar-consultar-especialidades') ||
    url.includes('editar-especialidades') ||

    url.includes('citas-home') ||
    url.includes('registrar-citas') ||
    url.includes('consultar-citas') ||
    url.includes('editar-consultar-citas') ||
    url.includes('editar-citas') ||

    url.includes('formulas-home') ||
    url.includes('registrar-formulas') ||
    url.includes('consultar-formulas') ||
    url.includes('editar-consultar-formulas') ||
    url.includes('editar-formulas') ||

    url.includes('ordenes-home') ||
    url.includes('registrar-ordenes') ||
    url.includes('consultar-ordenes') ||
    url.includes('editar-consultar-ordenes') ||
    url.includes('editar-ordenes') ||
    
    url.includes('examenes-home') ||
    url.includes('registrar-examenes') ||
    url.includes('consultar-examenes') ||
    url.includes('editar-consultar-examenes') ||
    url.includes('editar-examenes') ||

    url.includes('incapacidad-home') ||
    url.includes('registrar-incapacidad') ||
    url.includes('consultar-incapacidad') ||
    url.includes('editar-consultar-incapacidad') ||
    url.includes('editar-incapacidad') ||

    this.shouldShowAdminMenu(url);
  }

  
  private shouldShowAdminMenu(url: string): boolean {
    return url.includes('index-admin') || url.includes('servicios-admin') || url.includes('acerca-admin') || url.includes('especialidades-admin') || url.includes('pqrs-listar');
  }
}



