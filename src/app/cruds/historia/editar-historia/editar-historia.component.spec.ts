import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHistoriaComponent } from './editar-historia.component';

describe('EditarHistoriaComponent', () => {
  let component: EditarHistoriaComponent;
  let fixture: ComponentFixture<EditarHistoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarHistoriaComponent]
    });
    fixture = TestBed.createComponent(EditarHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
