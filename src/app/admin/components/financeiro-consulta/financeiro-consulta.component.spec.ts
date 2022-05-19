import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroConsultaComponent } from './financeiro-consulta.component';

describe('FinanceiroConsultaComponent', () => {
  let component: FinanceiroConsultaComponent;
  let fixture: ComponentFixture<FinanceiroConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceiroConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceiroConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
