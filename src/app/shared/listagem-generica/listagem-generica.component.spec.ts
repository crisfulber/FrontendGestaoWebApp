import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemGenericaComponent } from './listagem-generica.component';

describe('ListagemGenericaComponent', () => {
  let component: ListagemGenericaComponent;
  let fixture: ComponentFixture<ListagemGenericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemGenericaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemGenericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
