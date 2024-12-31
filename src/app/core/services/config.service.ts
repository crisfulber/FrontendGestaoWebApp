import { Injectable } from "@angular/core";

export interface CampoConfig {
  label: string;
  campo: string;
  tipo?: string;
  optionsEndpoint?: string; // Endpoint para obter opções (para selects)
  labelField?: string;      // Campo a ser exibido como label
  valueField?: string;      // Campo a ser usado como valor
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configuracoes: { [key: string]: any } = {
    'endereco': {
      titulo: 'Endereços',
      campos: [
        { label: 'Rua', campo: 'rua', tipo: 'text' },
        { label: 'N°', campo: 'numero', tipo: 'number' },
        { label: 'Complemento', campo: 'complemento', tipo: 'text' },
        { label: 'Bairro', campo: 'bairro', tipo: 'text' },
        { label: 'CEP', campo: 'cep', tipo: 'text' },
      ],
      endpoint: 'endereco',
      colunas: [
        { label: 'ID', campo: 'idendereco' },
        { label: 'N°', campo: 'numero', tipo: 'number' },
        { label: 'Complemento', campo: 'complemento', tipo: 'text' },
        { label: 'Bairro', campo: 'bairro', tipo: 'text' },
        { label: 'CEP', campo: 'cep', tipo: 'text' },
      ],
    },
    'estado': {
      titulo: 'Estados',
      campos: [
        { label: 'Nome', campo: 'nome', tipo: 'text' },
        { label: 'Sigla', campo: 'sigla', tipo: 'text' },
      ],
      endpoint: 'estado',
      colunas: [
        { label: 'ID', campo: 'idestado' },
        { label: 'Nome', campo: 'nome' },
        { label: 'Sigla', campo: 'sigla' },
      ],
    },
    'municipio': {
      titulo: 'Municípios',
      campos: [
        { label: 'Nome', campo: 'nome', tipo: 'text' },
        {
          label: 'Estado',
          campo: 'estado_idestado',
          tipo: 'select',
          optionsEndpoint: 'estado',
          labelField: 'sigla',
          valueField: 'idestado'
        },
      ],
      endpoint: 'municipio',
      colunas: [
        { label: 'ID', campo: 'idmunicipio' },
        { label: 'Nome', campo: 'nome', tipo: 'text' },
        { label: 'Estado', campo: 'Estadosigla', tipo: 'text' }, 
      ],
    },

    'periodo': {
      titulo: 'Período',
      campos: [
        { label: 'Nome', campo: 'nome', tipo: 'text' },
        { label: 'Mês Referência', campo: 'mesreferencia', tipo: 'number' },
        { label: 'Ano Referência', campo: 'anoreferencia', tipo: 'number' },
      ],
      endpoint: 'periodo',
      colunas: [
        { label: 'ID', campo: 'idperiodo' },
        { label: 'Nome', campo: 'nome' },
        { label: 'Mês Referência', campo: 'mesreferencia' },
        { label: 'Ano Referência', campo: 'anoreferencia' },
      ],
    },
    'salariovigente': {
      titulo: 'Salários Vigentes',
      campos: [
        { label: 'Data Início', campo: 'dtinicio', tipo: 'date' },
        { label: 'Data Fim', campo: 'dtfim', tipo: 'date' },
        { label: 'Valor', campo: 'valor', tipo: 'number' },
      ],
      endpoint: 'salariovigente',
      colunas: [
        { label: 'ID', campo: 'idsalariovigente' },
        { label: 'Data Início', campo: 'dtinicio' },
        { label: 'Data Fim', campo: 'dtfim' },
        { label: 'Valor', campo: 'valor' },
      ],
    },
    'setores': {
      titulo: 'Setores',
      campos: [
        { label: 'Nome', campo: 'nome', tipo: 'text' },
      ],
      endpoint: 'setores',
      colunas: [
        { label: 'ID', campo: 'idsetores' },
        { label: 'Nome', campo: 'nome' },
      ],
    },
  };

  getConfiguracao(modelo: string) {
    const configuracao = this.configuracoes[modelo];
    if (!configuracao) {
      console.error(`Configuração para o modelo "${modelo}" não encontrada.`);
      return null;
    }
    return configuracao;
  }
}