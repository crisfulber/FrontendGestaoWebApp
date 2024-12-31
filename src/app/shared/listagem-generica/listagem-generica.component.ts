import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-listagem-generica',
    imports: [
      CommonModule, 
      RouterModule, 
      TableModule, 
      ToastModule, 
      ToolbarModule, 
      ButtonModule,
      IconFieldModule,
      InputIconModule,
      InputTextModule
    ],
    templateUrl: './listagem-generica.component.html',
    styleUrls: ['./listagem-generica.component.scss']
})
export class ListagemGenericaComponent implements OnInit {
  @Input() endpoint: string = '';
  @Input() titulo: string = '';
  @Input() colunas: { label: string; campo: string }[] = [];
  @Input() itens: Array<{ [key: string]: any }> = [];
  @Input() mostrarAcoes: boolean = true;
  @Output() itemSelecionadoChange = new EventEmitter<any>();
  @Output() incluir = new EventEmitter<void>();
  @Output() editar = new EventEmitter<any>();
  @Output() excluir = new EventEmitter<any>();

  dataSource: any[] = [];
  selectedRow: any;
  item: any;

  constructor() {}

  ngOnChanges() {
    setTimeout(() => {
      this.dataSource = [...(this.itens || [])];
      console.log('DataSource:', this.dataSource);
    });
  }

  getNestedProperty(obj: any, path: string): any {
    console.log('Accessing path:', path, 'in object:', obj);
    return path.split('.').reduce((o, p) => (o ? o[p] : undefined), obj);
  }

  ngOnInit(): void {
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
