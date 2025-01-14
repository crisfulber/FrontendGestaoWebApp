import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrosacrescimosComponent } from './outrosacrescimos.component';

describe('OutrosacrescimosComponent', () => {
  let component: OutrosacrescimosComponent;
  let fixture: ComponentFixture<OutrosacrescimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutrosacrescimosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutrosacrescimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
