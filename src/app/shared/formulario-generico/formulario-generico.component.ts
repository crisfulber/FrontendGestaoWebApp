import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NestedService } from '../../core/services/nested.service';
import { ConfigService, CampoConfig } from '../../core/services/config.service';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-formulario-generico',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarModule,
    CardModule,
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    IftaLabelModule,
    DropdownModule,
    AutoCompleteModule,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-generico.component.html',
  styleUrls: ['./formulario-generico.component.scss']
})
export class FormularioGenericoComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() campos: CampoConfig[] = [];
  @Input() endpoint!: string;
  @Input() values: any;

  form: FormGroup;
  optionsMap: { [campo: string]: any[] } = {};
  filteredOptions: any[] = [];
  id: string | null = null;

  constructor(
    private fb: FormBuilder,
    private nestedService: NestedService,
    private route: ActivatedRoute,
    private router: Router,
    private configService: ConfigService
  ) {
    this.form = this.fb.group({});
  }

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

    this.campos.forEach(campo => {
      this.form.addControl(campo.campo, new FormControl('', campo.tipo === 'select' ? Validators.required : null));

      if (campo.tipo === 'select' && campo.optionsEndpoint) {
        this.nestedService.getAll(campo.optionsEndpoint).subscribe({
          next: (data) => {
            console.log(`Dados carregados para o campo ${campo.campo}:`, data);
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
      this.nestedService.getById(this.endpoint, +this.id).subscribe({
        next: (data) => {
          console.log('Dados recebidos do servidor:', data);
          this.converterDados(data);
        },
        error: (err) => {
          console.error('Erro ao carregar dados do servidor:', err);
          this.router.navigate([`/${this.endpoint}`]);
        },
      });
    }
  }

  private converterDados(data: any) {
    console.log('Dados recebidos do serviço:', data);
    const formData: any = {};

    console.log('Dados recebidos do servidor para conversão:', data);

    for (const campo of this.campos) {
      let value;

      if (campo.campo.includes('.')) {
        value = this.getNestedProperty(data, campo.campo);
      } else {
        value = data[campo.campo];
      }

      console.log(`Valor encontrado para o campo ${campo.campo}:`, value);

      if (campo.tipo === 'date' && value) {
        const dataISO = new Date(value);
        const ano = dataISO.getFullYear();
        const mes = String(dataISO.getMonth() + 1).padStart(2, '0');
        const dia = String(dataISO.getDate()).padStart(2, '0');
        formData[campo.campo] = `${ano}-${mes}-${dia}`;
      } else if (campo.tipo === 'select' && campo.optionsEndpoint) {
        const selectedOption = this.optionsMap[campo.campo]?.find(option => option.value === value);
        formData[campo.campo] = selectedOption ? selectedOption.label : value;
      } else {
        formData[campo.campo] = value;
      }
    }

    console.log('Form data prepared to patch:', formData);
    this.form.patchValue(formData);
    console.log('Dados convertidos para o formulário:', this.form.value);
  }

  private getNestedProperty(obj: any, path: string): any {
    if (!obj || !path) return undefined;

    const properties = path.split('.');
    let current = obj;

    console.log('key');
    console.log(Object.keys(obj));

    console.log('for inicio');
    for (const prop of properties) {
      console.log(prop);
      if (current[prop] !== undefined) {
        console.log('dentro do if');
        current = current[prop];
      } else {
        return undefined;
      }
    }
    console.log('for fim');

    return current;
  }

  salvar() {
    this.converterDatasParaISO();

    if (this.id) {
      this.nestedService.update(this.endpoint, +this.id, this.form.value).subscribe({
        next: () => this.voltarParaListagem(),
        error: () => console.error('Erro ao atualizar os dados'),
      });
    } else {
      this.nestedService.create(this.endpoint, this.form.value).subscribe({
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

  filterOptions(event: any, campo: string): void {
    const query = event.query.toLowerCase();
    const options = this.optionsMap[campo];

    this.filteredOptions = options.filter((option: any) =>
      option.label.toLowerCase().includes(query)
    );
  }

  private converterDatasParaISO() {
    for (const campo of this.campos) {
      if (campo.tipo === 'date' && this.form.value[campo.campo]) {
        const [ano, mes, dia] = this.form.value[campo.campo].split('-');
        this.form.patchValue({
          [campo.campo]: `${ano}-${mes}-${dia}T00:00:00.000Z`
        });
      }
    }
  }
}
