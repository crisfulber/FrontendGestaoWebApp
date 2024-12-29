import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-listagem-generica',
    imports: [CommonModule, RouterModule],
    templateUrl: './listagem-generica.component.html',
    styleUrls: ['./listagem-generica.component.scss']
})
export class ListagemGenericaComponent implements OnChanges {
  @Input() endpoint: string = '';
  @Input() titulo: string = '';
  @Input() colunas: { label: string; campo: string }[] = [];
  @Input() itens: Array<{ [key: string]: any }> = [];
  @Input() mostrarAcoes: boolean = true;
  @Output() itemSelecionadoChange = new EventEmitter<any>();
  @Output() incluir = new EventEmitter<void>();
  @Output() editar = new EventEmitter<any>();
  @Output() excluir = new EventEmitter<any>();

  displayedColumns: string[] = [];
  dataSource: any[] = [];
  selectedRow: any;
  mostrarIncluir: any;

  constructor() { }

  ngOnChanges() {
    this.dataSource = this.itens || [];
  }

  onRowSelect(row: any) {
    this.selectedRow = row;
    this.itemSelecionadoChange.emit(row);
  }

  onIncluirItem() {
    this.incluir.emit();
  }

  onEditarItem(item: any, event: Event) {
    event.stopPropagation();
    this.editar.emit(item);
  }

  onExcluirItem(item: any, event: Event) {
    event.stopPropagation();
    this.excluir.emit(item);
  }
}
