import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarioVigenteComponent } from './salariovigente.component';

describe('SalarioVigenteComponent', () => {
  let component: SalarioVigenteComponent;
  let fixture: ComponentFixture<SalarioVigenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalarioVigenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalarioVigenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
