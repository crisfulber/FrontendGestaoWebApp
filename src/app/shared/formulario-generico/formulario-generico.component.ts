import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from '../../core/services/base.service';
import { ConfigService, CampoConfig } from '../../core/services/config.service';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-formulario-generico',
  imports: [
    FormsModule,
    CommonModule,
    ToolbarModule,
    CardModule,
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    IftaLabelModule,
    DropdownModule
  ],
  templateUrl: './formulario-generico.component.html',
  styleUrls: ['./formulario-generico.component.scss']
})
export class FormularioGenericoComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() campos: CampoConfig[] = [];
  @Input() endpoint!: string;

  dados: any = {};
  id: string | null = null;
  optionsMap: { [campo: string]: any[] } = {};

  constructor(
    private baseService: BaseService<any>,
    private route: ActivatedRoute,
    private router: Router,
    private configService: ConfigService
  ) { }

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

    // Processar campos do tipo 'select' para carregar opções
    this.campos.forEach(campo => {
      if (campo.tipo === 'select' && campo.optionsEndpoint) {
        this.baseService.getAll(campo.optionsEndpoint).subscribe({
          next: (data) => {
            // Mapeia os dados para o formato { label, value }
            this.optionsMap[campo.campo] = data.map(item => ({
              label: item[campo.labelField || 'nome'],
              value: item[campo.valueField || 'id']
            }));
          },
          error: (err) => {
            console.error(`Erro ao carregar opções para ${campo.campo}:`, err);
          }
        });
      }
    });

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
