import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarUsuariosComponent } from './editar-consultar-usuarios.component';

describe('EditarConsultarUsuariosComponent', () => {
  let component: EditarConsultarUsuariosComponent;
  let fixture: ComponentFixture<EditarConsultarUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConsultarUsuariosComponent]
    });
    fixture = TestBed.createComponent(EditarConsultarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
