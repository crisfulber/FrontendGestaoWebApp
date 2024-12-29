import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../core/services/base.service';
import { ConfigService } from '../../core/services/config.service';
import { Router } from '@angular/router';
import { ListagemGenericaComponent } from '../../shared/listagem-generica/listagem-generica.component';
import { DecimalPipe } from '@angular/common';

@Component({
    selector: 'app-salario-vigente',
    imports: [ListagemGenericaComponent],
    templateUrl: './salariovigente.component.html',
    styleUrls: ['./salariovigente.component.scss'],
    providers: [DecimalPipe]
})
export class SalarioVigenteComponent implements OnInit {
  [x: string]: any;
  titulo: string = '';
  colunas: { label: string; campo: string }[] = [];
  itens: any[] = [];
  endpoint: string = '';
  selectedItem: any;

  constructor(
    private baseService: BaseService<any>,
    private configService: ConfigService,
    private router: Router,
    private decimalPipe: DecimalPipe
  ) {}

  ngOnInit() {
    const configuracao = this.configService.getConfiguracao('salariovigente');
    if (configuracao) {
      this.titulo = configuracao.titulo;
      this.colunas = configuracao.colunas;
      this.endpoint = configuracao.endpoint;
      this.carregarItens();
    }
  }

  carregarItens() {
    this.baseService.getAll(this.endpoint).subscribe({
      next: (data) => {
        this.itens = data.map(item => ({
          ...item,
          dtinicio: this.formatarData(item.dtinicio),
          dtfim: this.formatarData(item.dtfim),
          valorFormatado: this.formatarNumero(item.valor)
        }));
      },
      error: () => console.error('Erro ao carregar itens'),
    });
  }

  formatarNumero(numero: number | string): string {
    return this.decimalPipe.transform(numero, '1.2-2', 'pt-BR') || '';
  }

  formatarData(data: string): string {
    const date = new Date(data);
    const dia = String(date.getUTCDate()).padStart(2, '0');
    const mes = String(date.getUTCMonth() + 1).padStart(2, '0');
    const ano = date.getUTCFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  onIncluirItem() {
    this.router.navigate([`/${this.endpoint}/novo`]);
  }

  onEditarItem(item: any) {
    if (item && item.idsalariovigente) {
      this.router.navigate([`/${this.endpoint}/editar/${item.idsalariovigente}`]);
    }
  }

  onExcluirItem(item: any) {
    if (confirm(`Deseja realmente excluir o item com Data Início "${item.dtinicio}"?`)) {
      this.baseService.delete(this.endpoint, item.idsalariovigente).subscribe({
        next: () => this.carregarItens(),
        error: () => console.error('Erro ao excluir o item'),
      });
    }
  }

  onItemSelecionado(item: any) {
    this.selectedItem = item;
  }
}
