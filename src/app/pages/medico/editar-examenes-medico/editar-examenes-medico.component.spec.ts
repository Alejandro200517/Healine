import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExamenesMedicoComponent } from './editar-examenes-medico.component';

describe('EditarExamenesMedicoComponent', () => {
  let component: EditarExamenesMedicoComponent;
  let fixture: ComponentFixture<EditarExamenesMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarExamenesMedicoComponent]
    });
    fixture = TestBed.createComponent(EditarExamenesMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
