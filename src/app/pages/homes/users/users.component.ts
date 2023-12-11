import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../shared/services/users.service';
import { UsersModel } from '../../../shared/models/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['../../../app.component.css']
})
export class UsersComponent implements OnInit {

  users = new UsersModel('','','','','','','','','','','');

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit');

    this.usersService.agregarUsers(this.users).subscribe(
      (data) => {
        alert('Usuario registrado correctamente');
        this.router.navigate(['/login']); 
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifica El Documento');
        } else {
          console.error(error);
        }
      }
    );
  }
}