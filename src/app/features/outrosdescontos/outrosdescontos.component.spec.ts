import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrosdescontosComponent } from './outrosdescontos.component';

describe('OutrosdescontosComponent', () => {
  let component: OutrosdescontosComponent;
  let fixture: ComponentFixture<OutrosdescontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutrosdescontosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutrosdescontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
