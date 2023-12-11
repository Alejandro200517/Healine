import { Component, OnInit } from '@angular/core';
import { FormulasModel } from 'src/app/shared/models/formulas.model';
import { FormulasService } from '../../../shared/services/formulas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar-formulas',
  templateUrl: './registrar-formulas.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarFormulasComponent implements OnInit {

  formulas = new FormulasModel('', '', '', '', '');

  constructor(
    private formulasService: FormulasService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit');

    this.formulasService.agregarFormulas(this.formulas).subscribe(
      (data) => {
        alert('formula registrada correctamente');
        this.router.navigate(['/formulas-home']); 
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifica los campos o la formula ya está registrada');
        } else {
          console.error(error);
        }
      }
    );
  }
}
