import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from '../../core/services/base.service';
import { ConfigService } from '../../core/services/config.service';

@Component({
    selector: 'app-formulario-generico',
    imports: [FormsModule, CommonModule],
    templateUrl: './formulario-generico.component.html',
    styleUrls: ['./formulario-generico.component.scss']
})
export class FormularioGenericoComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() campos: { label: string; campo: string; tipo?: string }[] = [];
  @Input() endpoint!: string;

  dados: any = {};
  id: string | null = null;

  constructor(
    private baseService: BaseService<any>,
    private route: ActivatedRoute,
    private router: Router,
    private configService: ConfigService
  ) {}

  ngOnInit() {
    const modelo = this.route.snapshot.params['modelo'];
    this.id = this.route.snapshot.params['id'];

    const configuracoes = this.configService.getConfiguracao(modelo);
    if (!configuracoes) {
      this.router.navigate(['/']);
      return;
    }

    this.titulo = configuracoes.titulo;
    this.campos = configuracoes.campos;
    this.endpoint = configuracoes.endpoint;

    if (this.id) {
      this.baseService.getById(this.endpoint, +this.id).subscribe({
        next: (data) => this.converterDatasParaFormatoInput(data),
        error: () => this.router.navigate([`/${this.endpoint}`]),
      });
    }
  }

  private converterDatasParaFormatoInput(data: any) {
    for (const campo of this.campos) {
      if (campo.tipo === 'date' && data[campo.campo]) {
        const dataISO = new Date(data[campo.campo]);
        const ano = dataISO.getFullYear();
        const mes = String(dataISO.getMonth() + 1).padStart(2, '0');
        const dia = String(dataISO.getDate()).padStart(2, '0');
        data[campo.campo] = `${ano}-${mes}-${dia}`;
      }
    }
    this.dados = data;
  }

  private converterDatasParaISO() {
    for (const campo of this.campos) {
      if (campo.tipo === 'date' && this.dados[campo.campo]) {
        const [ano, mes, dia] = this.dados[campo.campo].split('-');
        this.dados[campo.campo] = `${ano}-${mes}-${dia}T00:00:00.000Z`;
      }
    }
  }

  salvar() {
    this.converterDatasParaISO();

    if (this.id) {
      this.baseService.update(this.endpoint, +this.id, this.dados).subscribe({
        next: () => this.voltarParaListagem(),
        error: () => console.error('Erro ao atualizar os dados'),
      });
    } else {
      this.baseService.create(this.endpoint, this.dados).subscribe({
        next: () => this.voltarParaListagem(),
        error: () => console.error('Erro ao criar os dados'),
      });
    }
  }

  cancelar() {
    this.voltarParaListagem();
  }

  private voltarParaListagem() {
    this.router.navigate([`/${this.endpoint}`]);
  }
}
