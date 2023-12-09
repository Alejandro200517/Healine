import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarHistoriaComponent } from './editar-consultar-historia.component';

describe('EditarConsultarHistoriaComponent', () => {
  let component: EditarConsultarHistoriaComponent;
  let fixture: ComponentFixture<EditarConsultarHistoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConsultarHistoriaComponent]
    });
    fixture = TestBed.createComponent(EditarConsultarHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
