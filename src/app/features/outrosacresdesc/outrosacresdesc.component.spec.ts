import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrosacresdescComponent } from './outrosacresdesc.component';

describe('OutrosacresdescComponent', () => {
  let component: OutrosacresdescComponent;
  let fixture: ComponentFixture<OutrosacresdescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutrosacresdescComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutrosacresdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
