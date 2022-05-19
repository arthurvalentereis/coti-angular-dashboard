import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroEdicaoComponent } from './financeiro-edicao.component';

describe('FinanceiroEdicaoComponent', () => {
  let component: FinanceiroEdicaoComponent;
  let fixture: ComponentFixture<FinanceiroEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceiroEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceiroEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
