// menu.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../../../app.component.css']
})
export class MenuComponent implements OnInit {
  mostrarMenu: boolean = true;
  mostrarMenuAdmin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mostrarMenu = !this.shouldHideMenu(event.url);
        this.mostrarMenuAdmin = this.shouldShowAdminMenu(event.url);
      }
    });
  }

  private shouldHideMenu(url: string): boolean {
    return url.includes('admin-home') || url.includes('admin-home-2') || url.includes('herramientas');
  }

  private shouldShowAdminMenu(url: string): boolean {
    return url.includes('index-admin') || url.includes('servicios-admin') || url.includes('acerca-admin');
  }
}
