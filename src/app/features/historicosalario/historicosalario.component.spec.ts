import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricosalarioComponent } from './historicosalario.component';

describe('HistoricosalarioComponent', () => {
  let component: HistoricosalarioComponent;
  let fixture: ComponentFixture<HistoricosalarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricosalarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricosalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
