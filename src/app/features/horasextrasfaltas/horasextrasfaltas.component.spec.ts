import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasextrasfaltasComponent } from './horasextrasfaltas.component';

describe('HorasextrasfaltasComponent', () => {
  let component: HorasextrasfaltasComponent;
  let fixture: ComponentFixture<HorasextrasfaltasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorasextrasfaltasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorasextrasfaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
