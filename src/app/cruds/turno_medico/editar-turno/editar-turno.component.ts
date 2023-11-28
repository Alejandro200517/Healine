import { Component, OnInit } from '@angular/core';
import { TurnoModel } from '../../../shared/models/turno-model';
import { TurnoService } from '../../../shared/services/turno.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-editar-turno',
  templateUrl: './editar-turno.component.html',
  styleUrls: ['./editar-turno.component.css']
})
export class EditarTurnoComponent  implements OnInit {

  id = ''
  turno = new TurnoModel("","","");

  constructor(
    private turnoService: TurnoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      console.log("EDITAR");
      this.turnoService.obtenerRol(this.id).subscribe(data => {
        this.turno = data[0];
      }, error => {
        console.log(error);
      });
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if(this.turno.idturnoMedico ) {
      this.turnoService.actualizarTurno(this.turno).subscribe(data => {
        alert(data)
        this.router.navigate(['/turno'])
      })
    } else {
      console.log('crear');
      this.turnoService.agregarTurno(this.turno).subscribe(data => {
        alert(data)
        this.router.navigate(['/turno'])
      })
    }
  }
}
