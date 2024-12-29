import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemGenericaComponent } from '../../shared/listagem-generica/listagem-generica.component';
import { BaseService } from '../../core/services/base.service';
import { Router } from '@angular/router';
import { Adiantamento } from '../../core/models/adiantamento.model';

@Component({
    selector: 'app-adiantamento',
    imports: [CommonModule, ListagemGenericaComponent],
    templateUrl: './adiantamento.component.html',
    styleUrl: './adiantamento.component.scss'
})
export class AdiantamentoComponent implements OnInit {
adiantamento: Adiantamento[] = [];
  itemSelecionado: any;

  constructor(
    private baseService: BaseService<Adiantamento>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.carregarAdiantamento();
  }

  carregarAdiantamento() {
    this.baseService.getAll('adiantamento').subscribe({
      next: (data: Adiantamento[]) => {
        this.adiantamento = data;
      },
      error: (err: any) => {
        console.error('Erro ao carregar adiantamentos:', err);
      },
    });
  }

  onItemSelecionado(item: any) {
    this.itemSelecionado = item;
    console.log('Item selecionado no pai:', this.itemSelecionado);
  }

  onIncluirItem() {
    this.router.navigate(['/adiantamento/novo']);
  }

  onEditarItem(item: any) {
    if (item && item.idadiantamento) {
      this.router.navigate([`/adiantamento/editar`, item.idadiantamento]);
    } else {
      console.error('Nenhum item selecionado para edição.');
    }
  }

  onExcluirItem(item: any) {
    if (item && item.idadiantamento) {
      if (confirm('Deseja realmente excluir este item?')) {
        this.baseService.delete('adiantamento', item.idadiantamento).subscribe({
          next: () => {
            this.adiantamento = this.adiantamento.filter(s => s.idadiantamento !== item.idadiantamento);
            console.log('Item excluído com sucesso.');
          },
          error: (err) => {
            console.error('Erro ao excluir o item:', err);
          },
        });
      }
    }
  }

}