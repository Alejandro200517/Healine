import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarHistoriaComponent } from './registrar-historia.component';

describe('RegistrarHistoriaComponent', () => {
  let component: RegistrarHistoriaComponent;
  let fixture: ComponentFixture<RegistrarHistoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarHistoriaComponent]
    });
    fixture = TestBed.createComponent(RegistrarHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
