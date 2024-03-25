import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarIncapacidadesMedicoComponent } from './registrar-incapacidades-medico.component';

describe('RegistrarIncapacidadesMedicoComponent', () => {
  let component: RegistrarIncapacidadesMedicoComponent;
  let fixture: ComponentFixture<RegistrarIncapacidadesMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarIncapacidadesMedicoComponent]
    });
    fixture = TestBed.createComponent(RegistrarIncapacidadesMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
