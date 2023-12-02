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
    this.shouldShowAdminMenu(url);
  }

  
  private shouldShowAdminMenu(url: string): boolean {
    return url.includes('index-admin') || url.includes('servicios-admin') || url.includes('acerca-admin') || url.includes('especialidades-admin') || url.includes('pqrs-listar');
  }
}



