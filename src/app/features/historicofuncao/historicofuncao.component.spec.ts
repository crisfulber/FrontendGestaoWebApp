import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricofuncaoComponent } from './historicofuncao.component';

describe('HistoricofuncaoComponent', () => {
  let component: HistoricofuncaoComponent;
  let fixture: ComponentFixture<HistoricofuncaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricofuncaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricofuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
