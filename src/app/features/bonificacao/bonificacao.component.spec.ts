import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BONIFICACAOComponent } from './bonificacao.component';

describe('BONIFICACAOComponent', () => {
  let component: BONIFICACAOComponent;
  let fixture: ComponentFixture<BONIFICACAOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BONIFICACAOComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BONIFICACAOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
