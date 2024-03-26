import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormulasModel } from 'src/app/shared/models/formulas.model';
import { FormulasService } from 'src/app/shared/services/formulas.service';

@Component({
  selector: 'app-formulas-consultar-secretaria',
  templateUrl: './formulas-consultar-secretaria.component.html',
  styleUrls: ['./formulas-consultar-secretaria.component.css']
})
export class FormulasConsultarSecretariaComponent  implements OnInit {

  formula: Observable<FormulasModel[]> | undefined;
  formulas: FormulasModel[] = [];
  filtroMedicamento: string = '';

  constructor(private formulasService: FormulasService) {}

  ngOnInit() {
    this.formulasService.obtenerFormulas().subscribe(
      (data) => {
        this.formulas = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  borrarFormula(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar esta formula?');

    if (confirmacion) {
      this.formulasService.borrarFormulas(id).subscribe(data => {
        console.log(data);

        this.formulasService.obtenerFormulas().subscribe(updatedFormulas => {
          this.formulas = updatedFormulas;
        });
      });
    }
  }

  filtrarFormulas(formulas: FormulasModel[] | undefined | null): FormulasModel[] {
    if (!formulas) {
      return [];
    }
  
    return formulas.filter(s => {
      const nombreFormulaCoincide = this.filtroMedicamento === '' || s.nombreMedicamento.toLowerCase().includes(this.filtroMedicamento.toLowerCase());
  
      return nombreFormulaCoincide;
    });
  }
}