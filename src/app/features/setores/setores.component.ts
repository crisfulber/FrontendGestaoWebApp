import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../core/services/base.service';
import { ConfigService } from '../../core/services/config.service';
import { Router } from '@angular/router';
import { ListagemGenericaComponent } from '../../shared/listagem-generica/listagem-generica.component';

@Component({
    selector: 'app-setores',
    imports: [ListagemGenericaComponent],
    templateUrl: './setores.component.html',
    styleUrls: ['./setores.component.scss']
})
export class SetoresComponent implements OnInit {
  titulo: string = '';
  colunas: { label: string; campo: string }[] = [];
  itens: any[] = [];
  endpoint: string = '';
  selectedItem: any;

  constructor(
    private baseService: BaseService<any>,
    private configService: ConfigService,
    private router: Router
  ) { }

  ngOnInit() {
    const configuracao = this.configService.getConfiguracao('setores');
    if (configuracao) {
      this.titulo = configuracao.titulo;
      this.colunas = configuracao.colunas;
      this.endpoint = configuracao.endpoint;
      this.carregarItens();
    }
  }

  carregarItens() {
    this.baseService.getAll(this.endpoint).subscribe({
      next: (data) => (this.itens = data),
    });
  }

  onIncluirItem() {
    this.router.navigate([`/${this.endpoint}/novo`]);
  }

  onEditarItem(item: any) {
    if (item && item.idsetores) {
      this.router.navigate([`/${this.endpoint}/editar/${item.idsetores}`]);
    }
  }

  onExcluirItem(item: any) {
    if (confirm(`Deseja realmente excluir o item "${item.nome}"?`)) {
      this.baseService.delete(this.endpoint, item.idsetores).subscribe({
        next: () => this.carregarItens(),
        error: () => console.error('Erro ao excluir o item'),
      });
    }
  }

  onItemSelecionado(item: any) {
    this.selectedItem = item;
    console.log('Item selecionado:', item);
  }
}