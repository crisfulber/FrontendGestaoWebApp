import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-acoes-genericas',
    imports: [CommonModule, RouterModule],
    templateUrl: './acoes-genericas.component.html',
    styleUrls: ['./acoes-genericas.component.scss']
})
export class AcoesGenericasComponent {
  @Input() endpoint!: string;
  @Input() itemSelecionado: any;
  @Input() mostrarIncluir: boolean = true;
  @Input() mostrarEditar: boolean = true;
  @Input() mostrarExcluir: boolean = true;

  @Output() incluir = new EventEmitter<void>();
  @Output() editar = new EventEmitter<any>();
  @Output() excluir = new EventEmitter<any>();

  constructor(private router: Router) {}

  onIncluir() {
    this.router.navigate([`/${this.endpoint}/novo`]);
    this.incluir.emit();
  }

  onEditar() {
    if (this.itemSelecionado && this.itemSelecionado.id) {
      this.router.navigate([`/${this.endpoint}/editar`, this.itemSelecionado.id]);
      this.editar.emit(this.itemSelecionado);
    } else {
      console.error('ID do item não encontrado para edição.');
    }
  }

  onExcluir() {
    if (this.itemSelecionado) {
      if (confirm(`Deseja realmente excluir o item "${this.itemSelecionado.nome || 'Selecionado'}"?`)) {
        this.excluir.emit(this.itemSelecionado);
      }
    }
  }
}
