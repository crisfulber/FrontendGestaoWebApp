import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncaoempresaComponent } from './funcaoempresa.component';

describe('FuncaoempresaComponent', () => {
  let component: FuncaoempresaComponent;
  let fixture: ComponentFixture<FuncaoempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncaoempresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncaoempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
