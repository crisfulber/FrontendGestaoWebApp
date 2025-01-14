import { Component, OnInit } from '@angular/core';
import { NestedService } from '../../core/services/nested.service';
import { ConfigService } from '../../core/services/config.service';
import { Router } from '@angular/router';
import { ListagemGenericaComponent } from '../../shared/listagem-generica/listagem-generica.component';

@Component({
  selector: 'app-empresa',
  imports: [ListagemGenericaComponent],
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {
  titulo: string = '';
  colunas: { label: string; campo: string }[] = [];
  itens: any[] = [];
  endpoint: string = '';
  selectedItem: any;

  constructor(
    private nestedService: NestedService,
    private configService: ConfigService,
    private router: Router
  ) { }

  ngOnInit() {
    const configuracao = this.configService.getConfiguracao('empresa');
    if (configuracao) {
      this.titulo = configuracao.titulo;
      this.colunas = configuracao.colunas;
      this.endpoint = configuracao.endpoint;
      console.log('Configuração carregada:', configuracao);
      this.carregarItens();
    }
  }

  carregarItens() {
    this.nestedService.getAll(this.endpoint).subscribe({
      next: (data) => {
        this.itens = data;
        console.log('Itens carregados:', this.itens);
      },
    });
  }

  onIncluirItem() {
    this.router.navigate([`/${this.endpoint}/novo`]);
  }

  onEditarItem(item: any) {
    if (item && item.idempresa) {
      this.nestedService.getById(this.endpoint, item.idempresa).subscribe({
        next: (data) => {
          this.selectedItem = data;
          console.log('Dados carregados para edição:', this.selectedItem);
          this.router.navigate([`/${this.endpoint}/editar/${item.idempresa}`], {
            state: { item: this.selectedItem , values: this.selectedItem}
          });
        },
      });
    }
  }

  onExcluirItem(item: any) {
    if (confirm(`Deseja realmente excluir o item "${item.nome}"?`)) {
      this.nestedService.delete(this.endpoint, item.idempresa).subscribe({
        next: () => this.carregarItens(),
      });
    }
  }

  onItemSelecionado(item: any) {
    this.selectedItem = item;
  }
}
