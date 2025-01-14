import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasfaltasComponent } from './horasfaltas.component';

describe('HorasfaltasComponent', () => {
  let component: HorasfaltasComponent;
  let fixture: ComponentFixture<HorasfaltasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorasfaltasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorasfaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
