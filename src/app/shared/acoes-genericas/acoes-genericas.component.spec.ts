import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesGenericasComponent } from './acoes-genericas.component';

describe('AcoesGenericasComponent', () => {
  let component: AcoesGenericasComponent;
  let fixture: ComponentFixture<AcoesGenericasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcoesGenericasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcoesGenericasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
