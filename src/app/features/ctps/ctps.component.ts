import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../core/services/base.service';
import { ConfigService } from '../../core/services/config.service';
import { Router } from '@angular/router';
import { ListagemGenericaComponent } from '../../shared/listagem-generica/listagem-generica.component';

@Component({
  selector: 'app-ctps',
  imports: [ListagemGenericaComponent],
  templateUrl: './ctps.component.html',
  styleUrls: ['./ctps.component.scss']
})
export class CtpsComponent implements OnInit {
  titulo: string = '';
  colunas: { label: string; campo: string; tipo?: string; labelField?: string; valueField?: string }[] = [];
  campos: { label: string; campo: string; tipo: string; optionsEndpoint?: string; labelField?: string; valueField?: string; }[] = [];
  itens: any[] = [];
  endpoint: string = '';
  idCampo: string = '';
  selectedItem: any;

  constructor(
    private baseService: BaseService<any>,
    private configService: ConfigService,
    private router: Router
  ) { }

  ngOnInit() {
    const configuracao = this.configService.getConfiguracao('ctps');
    if (configuracao) {
      this.titulo = configuracao.titulo;
      this.colunas = configuracao.colunas.map((col: { label: string; campo: string; tipo?: string; labelField?: string; valueField?: string }) => ({ 
        label: col.label, 
        campo: col.campo,
        tipo: col.tipo || '',
        labelField: col.labelField || '',
        valueField: col.valueField || ''
      }));
      this.campos = configuracao.campos;
      this.endpoint = configuracao.endpoint;
      this.idCampo = configuracao.idCampo;
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
    if (item && item[this.idCampo]) {
      this.router.navigate([`/${this.endpoint}/editar/${item[this.idCampo]}`]);
    }
  }

  onExcluirItem(item: any) {
    if (confirm(`Deseja realmente excluir o item "${item.nome}"?`)) {
      this.baseService.delete(this.endpoint, item[this.idCampo]).subscribe({
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
