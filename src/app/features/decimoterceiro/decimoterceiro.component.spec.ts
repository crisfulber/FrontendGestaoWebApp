import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimoterceiroComponent } from './decimoterceiro.component';

describe('DecimoterceiroComponent', () => {
  let component: DecimoterceiroComponent;
  let fixture: ComponentFixture<DecimoterceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecimoterceiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecimoterceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
