import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configuracoes: { [key: string]: any } = {
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