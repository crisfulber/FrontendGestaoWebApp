import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemSetoresComponent } from './setores.component';

describe('ListagemSetoresComponent', () => {
  let component: ListagemSetoresComponent;
  let fixture: ComponentFixture<ListagemSetoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemSetoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemSetoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
