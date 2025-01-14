import { Injectable } from "@angular/core";

export interface CampoConfig {
  label: string;
  campo: string;
  tipo?: string;
  optionsEndpoint?: string;
  labelField?: string;
  valueField?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configuracoes: { [key: string]: any } = {
    'adiantamento': {
      titulo: 'Adiantamentos',
      campos: [
        {
          label: 'Colaborador',
          campo: 'colaborador_idcolaborador',
          tipo: 'select',
          optionsEndpoint: 'colaborador',
          labelField: 'nome',
          valueField: 'idcolaborador'
        },
        { label: 'Valor', campo: 'valor', tipo: 'number' },
        { label: 'Data', campo: 'data', tipo: 'date' },
        { label: 'Descrição', campo: 'descricao', tipo: 'text' },
      ],
      endpoint: 'adiantamento',
      colunas: [
        { label: 'Colaborador', campo: 'Colaborador.nome', tipo: 'text' },
        { label: 'Valor', campo: 'valor', tipo: 'number' },
        { label: 'Data', campo: 'data', tipo: 'date' },
        { label: 'Descrição', campo: 'descricao', tipo: 'text' },
      ],
    },
    'bonificacao': {
      titulo: 'Bonificações',
      campos: [
        {
          label: 'Periodo',
          campo: 'periodo_idperiodo',
          tipo: 'select',
          optionsEndpoint: 'periodo',
          labelField: 'nome',
          valueField: 'idperiodo'
        },
        { label: 'Valor Apurado', campo: 'vlrapurado', tipo: 'number' },
        {
          label: 'Unidade',
          campo: 'unidade_idunidade',
          tipo: 'select',
          optionsEndpoint: 'unidade',
          labelField: 'nome',
          valueField: 'idunidade'
        },
        {
          label: 'Setor',
          campo: 'setores_idsetores',
          tipo: 'select',
          optionsEndpoint: 'setores',
          labelField: 'nome',
          valueField: 'idsetores'
        },
      ],
      endpoint: 'bonificacao',
      colunas: [
        { label: 'Período', campo: 'Periodo.nome', },
        { label: 'Valor Apurado', campo: 'vlrapurado', },
        { label: 'Unidade', campo: 'Unidade.nome', },
        { label: 'Setor', campo: 'Setores.nome', },
      ],
    },
    'colaborador': {
      titulo: 'Colaboradores',
      campos: [
        { label: 'Nome', campo: 'nome', tipo: 'text' },
        { label: 'Data Início', campo: 'dtinicio', tipo: 'date' },
        { label: 'Ativo', campo: 'ativo', tipo: 'boolean' },
        { label: 'Vale Transporte', campo: 'valetransporte', tipo: 'boolean' },
        { label: 'Adiantamento', campo: 'adiantamento', tipo: 'boolean' },
        {
          label: 'Função',
          campo: 'funcaoempresa_idfuncaoempresa',
          tipo: 'select',
          optionsEndpoint: 'funcaoempresa',
          labelField: 'nome',
          valueField: 'idfuncaoempresa'
        },
        {
          label: 'Escala',
          campo: 'escala_idescala',
          tipo: 'select',
          optionsEndpoint: 'escala',
          labelField: 'nome',
          valueField: 'idescala'
        },
        { label: 'Numero', campo: 'rg.numero', tipo: 'number' },
        { label: 'Data de Emissão', campo: 'rg.dtemissao', tipo: 'date' },
        { label: 'Órgão Emissor', campo: 'rg.orgao', tipo: 'text' },
        {
          label: 'Estado Emissão',
          campo: 'rg.estado_idestado',
          tipo: 'select',
          optionsEndpoint: 'estado',
          labelField: 'nome',
          valueField: 'idestado'
        },
        { label: 'Nome do Pai', campo: 'rg.nomepai', tipo: 'text' },
        { label: 'Nome da Mãe', campo: 'rg.nomemae', tipo: 'text' },
        { label: 'Data de Nascimento', campo: 'rg.dtnascimento', tipo: 'text' },
        // Campos da CTPS
        { label: 'Número', campo: 'ctps.numero', tipo: 'number' },
        { label: 'Série', campo: 'ctps.serie', tipo: 'number' },
        { label: 'Data de Emissão', campo: 'ctps.dtemissao', tipo: 'date' },
        { label: 'PIS', campo: 'ctps.numpis', tipo: 'number' },
        {
          label: 'Estado Emissão',
          campo: 'rg.estado_idestado',
          tipo: 'select',
          optionsEndpoint: 'estado',
          labelField: 'nome',
          valueField: 'idestado'
        },
        { label: 'Número', campo: 'cpf.numero', tipo: 'number' },
        { label: 'Telefone', campo: 'contato.telefone', tipo: 'text' },
        { label: 'Email', campo: 'contato.email', tipo: 'text' },
        { label: 'Tem WhatsApp', campo: 'contato.temWhatsapp', tipo: 'boolean' },
        { label: 'Nacionalidade', campo: 'nacionalidade.nome', tipo: 'text' },
        { label: 'Escolaridade', campo: 'escolaridade.nome', tipo: 'text' },
        { label: 'Nome', campo: 'dependentes.nome', tipo: 'text' },
        { label: 'Data de Nascimento', campo: 'dependentes.dtnascimento', tipo: 'date' },
        { label: 'CPF', campo: 'dependentes.cpf', tipo: 'text' },
        {
          label: 'Estado Civil',
          campo: 'estadocivil_idestadocivil',
          tipo: 'select',
          optionsEndpoint: 'estadocivil',
          labelField: 'estado',
          valueField: 'idestadocivil'
        },
        { label: 'Cônjuge', campo: 'conjuge', tipo: 'text' },
        { label: 'Rua', campo: 'endereco.rua', tipo: 'text' },
        { label: 'Número', campo: 'endereco.numero', tipo: 'text' },
        { label: 'Complemento', campo: 'endereco.complemento', tipo: 'text' },
        { label: 'Bairro', campo: 'endereco.bairro', tipo: 'text' },
        { label: 'CEP', campo: 'endereco.cep', tipo: 'text' },
        {
          label: 'Município',
          campo: 'endereco.municipio_idmunicipio',
          tipo: 'select',
          optionsEndpoint: 'municipio',
          labelField: 'nome',
          valueField: 'idmunicipio'
        },
        {
          label: 'Empresa',
          campo: 'empresa_idempresa',
          tipo: 'select',
          optionsEndpoint: 'empresa',
          labelField: 'nome',
          valueField: 'idempresa'
        }
      ],
      endpoint: 'colaborador',
      colunas: [
        { label: 'Nome', campo: 'nome', },
        { label: 'Data Início', campo: 'dtinicio', },
        { label: 'Ativo', campo: 'ativo', },
        { label: 'Vale Transporte', campo: 'valetransporte', },
        { label: 'Adiantamento', campo: 'adiantamento', },
        { label: 'Função', campo: 'Função.nome', },
        { label: 'Escala', campo: 'Escala.nome', },
        { label: 'Numero', campo: 'rg.numero', },
        { label: 'Data de Emissão', campo: 'rg.dtemissao', },
        { label: 'Órgão Emissor', campo: 'rg.orgao', },
        { label: 'Estado', campo: 'Estado.nome', },
        { label: 'Nome do Pai', campo: 'rg.nomepai', },
        { label: 'Nome da Mãe', campo: 'rg.nomemae', },
        { label: 'Data de Nascimento', campo: 'rg.dtnascimento', },
        { label: 'Número', campo: 'ctps.numero', },
        { label: 'Série', campo: 'ctps.serie', },
        { label: 'Data de Emissão', campo: 'ctps.dtemissao', },
        { label: 'PIS', campo: 'ctps.numpis', },
        { label: 'Número', campo: 'cpf.numero', },
        { label: 'Telefone', campo: 'contato.telefone', },
        { label: 'Email', campo: 'contato.email', },
        { label: 'Tem WhatsApp', campo: 'contato.temWhatsapp', },
        { label: 'Nacionalidade', campo: 'nacionalidade.nome', },
        { label: 'Escolaridade', campo: 'escolaridade.nome', },
        { label: 'Nome', campo: 'dependentes.nome', },
        { label: 'Data de Nascimento', campo: 'dependentes.dtnascimento', },
        { label: 'CPF', campo: 'dependentes.cpf', },
        { label: 'Cônjuge', campo: 'conjuge', },
        { label: 'Rua', campo: 'Endereco.rua' },
        { label: 'Número', campo: 'Endereco.numero' },
        { label: 'Complemento', campo: 'Endereco.complemento' },
        { label: 'Bairro', campo: 'Endereco.bairro' },
        { label: 'CEP', campo: 'Endereco.cep' },
        { label: 'Município', campo: 'Endereco.Municipio.nome' },
      ],
    },
    'contato': {
      titulo: 'Contatos',
      campos: [
        { label: 'Telefone', campo: 'telefone', tipo: 'text' },
        { label: 'Email', campo: 'email', tipo: 'text' },
        { label: 'Tem WhatsApp', campo: 'temWhatsapp', tipo: 'boolean' },
      ],
      endpoint: 'contato',
      colunas: [
        { label: 'Telefone', campo: 'telefone', },
        { label: 'Email', campo: 'email', },
        { label: 'Tem WhatsApp', campo: 'temWhatsapp', },
      ],
    },
    'cpf': {
      titulo: 'CPF',
      campos: [
        { label: 'Número', campo: 'numero', tipo: 'text' },
      ],
      endpoint: 'cpf',
      colunas: [
        { label: 'Número', campo: 'numero' },
      ],
    },
    'ctps': {
      titulo: 'CTPS',
      campos: [
        { label: 'Número', campo: 'numero', tipo: 'number' },
        { label: 'Série', campo: 'serie', tipo: 'number' },
        { label: 'Data de Emissão', campo: 'dtemissao', tipo: 'date' },
        { label: 'PIS', campo: 'numpis', tipo: 'number' },
        {
          label: 'Estado',
          campo: 'estado_idestado',
          tipo: 'select',
          optionsEndpoint: 'estado',
          labelField: 'sigla',
          valueField: 'idestado'
        }
      ],
      endpoint: 'ctps',
      colunas: [
        { label: 'Número', campo: 'numero', },
        { label: 'Série', campo: 'serie', },
        { label: 'Data de Emissão', campo: 'dtemissao', },
        { label: 'PIS', campo: 'numpis', },
        { label: 'Estado', campo: 'Estado.sigla', },
      ],
    },
    'dependentes': {
      titulo: 'Dependentes',
      campos: [
        { label: 'Nome', campo: 'nome', tipo: 'text' },
        { label: 'Data de Nascimento', campo: 'dtnascimento', tipo: 'date' },
        {
          label: 'CPF',
          campo: 'cpf_idcpf',
          tipo: 'select',
          optionsEndpoint: 'cpf',
          labelField: 'numero',
          valueField: 'idcpf'
        }
      ],
      endpoint: 'dependentes',
      colunas: [
        { label: 'Nome', campo: 'nome' },
        { label: 'Data de Nascimento', campo: 'dtnascimento' },
        { label: 'CPF', campo: 'CPF.numero' },
      ],
    },
    'empresa': {
      titulo: 'Empresas',
      campos: [
        { label: 'ID', campo: 'idempresa', tipo: 'number' },
        { label: 'Nome', campo: 'nome', tipo: 'text' },
        { label: 'Rua', campo: 'endereco.rua', tipo: 'text' },
        { label: 'Número', campo: 'endereco.numero', tipo: 'text' },
        { label: 'Complemento', campo: 'endereco.complemento', tipo: 'text' },
        { label: 'Bairro', campo: 'endereco.bairro', tipo: 'text' },
        { label: 'CEP', campo: 'endereco.cep', tipo: 'text' },
        {
          label: 'Município',
          campo: 'endereco.municipio_idmunicipio',
          tipo: 'select',
          optionsEndpoint: 'municipio',
          labelField: 'nome',
          valueField: 'idmunicipio'
        }
      ],
      endpoint: 'empresa',
      colunas: [
        { label: 'ID', campo: 'idempresa', },
        { label: 'Nome', campo: 'nome' },
        { label: 'Rua', campo: 'endereco.rua' },
        { label: 'Número', campo: 'endereco.numero' },
        { label: 'Complemento', campo: 'endereco.complemento' },
        { label: 'Bairro', campo: 'endereco.bairro' },
        { label: 'CEP', campo: 'cep' },
        { label: 'Município', campo: 'Endereco.Municipio.nome' }
      ],
    },
    'endereco': {
      titulo: 'Endereços',
      campos: [
        { label: 'Rua', campo: 'rua', tipo: 'text' },
        { label: 'N°', campo: 'numero', tipo: 'number' },
        { label: 'Complemento', campo: 'complemento', tipo: 'text' },
        { label: 'Bairro', campo: 'bairro', tipo: 'text' },
        { label: 'CEP', campo: 'cep', tipo: 'text' },
        {
          label: 'Municipio',
          campo: 'municipio_idmunicipio',
          tipo: 'select',
          optionsEndpoint: 'municipio',
          labelField: 'nome',
          valueField: 'idmunicipio'
        },
      ],
      endpoint: 'endereco',
      colunas: [
        { label: 'ID', campo: 'idendereco' },
        { label: 'N°', campo: 'numero', tipo: 'number' },
        { label: 'Complemento', campo: 'complemento', tipo: 'text' },
        { label: 'Bairro', campo: 'bairro', tipo: 'text' },
        { label: 'CEP', campo: 'cep', tipo: 'text' },
        { label: 'Município', campo: 'Municipionome', tipo: 'text' },
      ],
    },
    'escala': {
      titulo: 'Escalas',
      campos: [
        { label: 'Nome', campo: 'nome', tipo: 'text' },
        { label: 'Descrição', campo: 'descricao', tipo: 'text' },
        { label: 'Hora Entrada', campo: 'horaentrada', tipo: 'time' },
        { label: 'Saída Intervalo', campo: 'horasaiintervalo', tipo: 'time' },
        { label: 'Volta Intervalo', campo: 'horavoltaintervalo', tipo: 'time' },
        { label: 'Hora Saída', campo: 'horasaida', tipo: 'time' },
      ],
      endpoint: 'escala',
      colunas: [
        { label: 'Nome', campo: 'nome', tipo: 'text' },
        { label: 'Descrição', campo: 'descricao', tipo: 'text' },
        { label: 'Hora Entrada', campo: 'horaentrada', tipo: 'time' },
        { label: 'Saída Intervalo', campo: 'horasaiintervalo', tipo: 'time' },
        { label: 'Volta Intervalo', campo: 'horavoltaintervalo', tipo: 'time' },
        { label: 'Hora Saída', campo: 'horasaida', tipo: 'time' },
      ],
    },
    'escolaridade': {
      titulo: 'Escolaridade',
      campos: [
        { label: 'Nome', campo: 'nome', tipo: 'text' },
      ],
      endpoint: 'escolaridade',
      colunas: [
        { label: 'Nome', campo: 'nome' },
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
    'estadocivil': {
      titulo: 'Estado Civil',
      campos: [
        { label: 'Estado Civil', campo: 'estado', tipo: 'text' },
        { label: 'Cônjuge', campo: 'conjuge', tipo: 'text' },
      ],
      endpoint: 'estado',
      colunas: [
        { label: 'Estado Civil', campo: 'estado' },
        { label: 'Cônjuge', campo: 'conjuge' },
      ],
    },
    'funcaoempresa': {
      titulo: 'Funções',
      campos: [
        { label: 'Nome', campo: 'nome', tipo: 'text' },
        {
          label: 'Unidade',
          campo: 'unidade_idunidade',
          tipo: 'select',
          optionsEndpoint: 'unidade',
          labelField: 'nome',
          valueField: 'idunidade'
        }
      ],
      endpoint: 'funcaoempresa',
      colunas: [
        { label: 'Nome', campo: 'nome' },
        { label: 'Unidade', campo: 'Unidade.nome' },
      ],
    },
    'historicofuncao': {
      titulo: 'Histórico de Funções',
      campos: [
        {
          label: 'Colaborador',
          campo: 'colaborador_idcolaborador',
          tipo: 'select',
          optionsEndpoint: 'colaborador',
          labelField: 'nome',
          valueField: 'idcolaborador'
        },
        { label: 'Data de Alteração', campo: 'dtalteracao', tipo: 'date' },
        {
          label: 'Função',
          campo: 'funcaoempresa_idfuncaoempresa',
          tipo: 'select',
          optionsEndpoint: 'funcaoempresa',
          labelField: 'nome',
          valueField: 'idfuncaoempresa'
        },
      ],
      endpoint: 'historicofuncao',
      colunas: [
        { label: 'Colaborador', campo: 'Colaboador.nome' },
        { label: 'Data de Alteração', campo: 'dtalteração' },
        { label: 'Função', campo: 'Função.nome' },
      ],
    },
    'historicosalario': {
      titulo: 'Histórico de Salários',
      campos: [
        {
          label: 'Colaborador',
          campo: 'colaborador_idcolaborador',
          tipo: 'select',
          optionsEndpoint: 'colaborador',
          labelField: 'nome',
          valueField: 'idcolaborador'
        },
        { label: 'Data de Alteração', campo: 'dtalteracao', tipo: 'date' },
        { label: 'Valor', campo: 'valor', tipo: 'number' },
      ],
      endpoint: 'historicosalario',
      colunas: [
        { label: 'Colaborador', campo: 'Colaborador.nome' },
        { label: 'Data de Alteração', campo: 'dtalteracao' },
        { label: 'Valor', campo: 'valor' },
      ],
    },
    'horasextras': {
      titulo: 'Horas Extras',
      campos: [
        {
          label: 'Colaborador',
          campo: 'colaborador_idcolaborador',
          tipo: 'select',
          optionsEndpoint: 'colaborador',
          labelField: 'nome',
          valueField: 'idcolaborador'
        },
        {
          label: 'Período',
          campo: 'periodo_idperiodo',
          tipo: 'select',
          optionsEndpoint: 'periodo',
          labelField: 'nome',
          valueField: 'idperiodo'
        },
        { label: 'Horas Extras', campo: 'horasextras', tipo: 'number' },
      ],
      endpoint: 'horasextras',
      colunas: [
        { label: 'Colaborador', campo: 'Colaborador.nome' },
        { label: 'Período', campo: 'Período.nome' },
        { label: 'Horas Extras', campo: 'horasextras' },
      ],
    },
    'horasfaltas': {
      titulo: 'Horas Faltas',
      campos: [
        {
          label: 'Colaborador',
          campo: 'colaborador_idcolaborador',
          tipo: 'select',
          optionsEndpoint: 'colaborador',
          labelField: 'nome',
          valueField: 'idcolaborador'
        },
        {
          label: 'Período',
          campo: 'periodo_idperiodo',
          tipo: 'select',
          optionsEndpoint: 'periodo',
          labelField: 'nome',
          valueField: 'idperiodo'
        },
        { label: 'Horas Faltas', campo: 'horasfaltas', tipo: 'number' },
      ],
      endpoint: 'horasfaltas',
      colunas: [
        { label: 'Colaborador', campo: 'Colaborador.nome' },
        { label: 'Período', campo: 'Período.nome' },
        { label: 'Horas Faltas', campo: 'horasfaltas' },
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
    'nacionalidade': {
      titulo: 'Nacionalidade',
      campos: [
        { label: 'Nome', campo: 'nome', tipo: 'text' },
      ],
      endpoint: 'nacionalidade',
      colunas: [
        { label: 'Nome', campo: 'nome' },
      ],
    },
    'outrosacrescimos': {
      titulo: 'Outros Acréscimos',
      campos: [
        {
          label: 'Colaborador',
          campo: 'colaborador_idcolaborador',
          tipo: 'select',
          optionsEndpoint: 'colaborador',
          labelField: 'nome',
          valueField: 'idcolaborador'
        },
        {
          label: 'Período',
          campo: 'periodo_idperiodo',
          tipo: 'select',
          optionsEndpoint: 'periodo',
          labelField: 'nome',
          valueField: 'idperiodo'
        },
        { label: 'Valor', campo: 'valor', tipo: 'number' },
        { label: 'Parcelas', campo: 'numparcelas', tipo: 'number' },
      ],
      endpoint: 'outrosacrescimos',
      colunas: [
        { label: 'Colaborador', campo: 'Colaborador.nome' },
        { label: 'Período', campo: 'Período.nome' },
        { label: 'Valor', campo: 'valor' },
        { label: 'Parcelas', campo: 'numparcelas' },
      ],
    },
    'outrosdescontos': {
      titulo: 'Outros Descontos',
      campos: [
        {
          label: 'Colaborador',
          campo: 'colaborador_idcolaborador',
          tipo: 'select',
          optionsEndpoint: 'colaborador',
          labelField: 'nome',
          valueField: 'idcolaborador'
        },
        {
          label: 'Período',
          campo: 'periodo_idperiodo',
          tipo: 'select',
          optionsEndpoint: 'periodo',
          labelField: 'nome',
          valueField: 'idperiodo'
        },
        { label: 'Valor', campo: 'valor', tipo: 'number' },
        { label: 'Parcelas', campo: 'numparcelas', tipo: 'number' },
      ],
      endpoint: 'outrosdescontos',
      colunas: [
        { label: 'Colaborador', campo: 'Colaborador.nome' },
        { label: 'Período', campo: 'Período.nome' },
        { label: 'Valor', campo: 'valor' },
        { label: 'Parcelas', campo: 'numparcelas' },
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
    'rg': {
      titulo: 'RG',
      campos: [
        { label: 'Número', campo: 'numero', tipo: 'number' },
        { label: 'Data de Emissão', campo: 'dtemissao', tipo: 'date' },
        { label: 'Órgão Emissor', campo: 'orgao', tipo: 'text' },
        {
          label: 'Estado',
          campo: 'estado_idestado',
          tipo: 'select',
          optionsEndpoint: 'estado',
          labelField: 'sigla',
          valueField: 'idestado'
        },
        { label: 'Nome do Pai', campo: 'nomepai', tipo: 'text' },
        { label: 'Nome da Mãe', campo: 'nomemae', tipo: 'text' },
        { label: 'Data de Nascimento', campo: 'dtnascimento', tipo: 'date' },
      ],
      endpoint: 'rg',
      colunas: [
        { label: 'Número', campo: 'numero', tipo: 'number' },
        { label: 'Data de Emissão', campo: 'dtemissao', tipo: 'date' },
        { label: 'Órgão Emissor', campo: 'orgao', tipo: 'text' },
        {
          label: 'Estado',
          campo: 'estado_idestado',
          tipo: 'select',
          optionsEndpoint: 'estado',
          labelField: 'sigla',
          valueField: 'idestado'
        },
        { label: 'Nome do Pai', campo: 'nomepai', tipo: 'text' },
        { label: 'Nome da Mãe', campo: 'nomemae', tipo: 'text' },
        { label: 'Data de Nascimento', campo: 'dtnascimento', tipo: 'date' },
      ],
    },
    'salariovigente': {
      titulo: 'Salários Vigentes',
      campos: [
        {
          label: 'Empresa',
          campo: 'empresa_idempresa',
          tipo: 'select',
          optionsEndpoint: 'empresa',
          labelField: 'nome',
          valueField: 'idempresa'
        },
        { label: 'Data Início', campo: 'dtinicio', tipo: 'date' },
        { label: 'Data Fim', campo: 'dtfim', tipo: 'date' },
        { label: 'Valor', campo: 'valor', tipo: 'number' },
      ],
      endpoint: 'salariovigente',
      colunas: [
        { label: 'Empresa', campo: 'Empresanome', tipo: 'text' },
        { label: 'Data Início', campo: 'dtinicio' },
        { label: 'Data Fim', campo: 'dtfim' },
        { label: 'Valor', campo: 'valor' },
      ],
    },
    'setores': {
      titulo: 'Setores',
      campos: [
        { label: 'Nome', campo: 'nome', tipo: 'text' },
        {
          label: 'Unidade',
          campo: 'unidade_idunidade',
          tipo: 'select',
          optionsEndpoint: 'unidade',
          labelField: 'nome',
          valueField: 'idunidade'
        }
      ],
      endpoint: 'setores',
      colunas: [
        { label: 'Nome', campo: 'nome' },
        { label: 'Unidade', campo: 'Unidade.nome' },
      ],
    },
    'unidade': {
      titulo: 'Unidades',
      campos: [
        { label: 'Nome', campo: 'nome', tipo: 'text' },
        { label: 'Rua', campo: 'endereco.rua', tipo: 'text' },
        { label: 'Número', campo: 'endereco.numero', tipo: 'text' },
        { label: 'Complemento', campo: 'endereco.complemento', tipo: 'text' },
        { label: 'Bairro', campo: 'endereco.bairro', tipo: 'text' },
        { label: 'CEP', campo: 'endereco.cep', tipo: 'text' },
        {
          label: 'Município',
          campo: 'endereco.municipio_idmunicipio',
          tipo: 'select',
          optionsEndpoint: 'municipio',
          labelField: 'nome',
          valueField: 'idmunicipio'
        },
        {
          label: 'Empresa',
          campo: 'empresa_idempresa',
          tipo: 'select',
          optionsEndpoint: 'empresa',
          labelField: 'nome',
          valueField: 'idempresa'
        }
      ],
      endpoint: 'unidade',
      colunas: [
        { label: 'Nome', campo: 'nome' },
        { label: 'Empresa', campo: 'Empresa.nome' },
        { label: 'Rua', campo: 'Endereco.rua' },
        { label: 'Número', campo: 'Endereco.numero' },
        { label: 'Complemento', campo: 'Endereco.complemento' },
        { label: 'Bairro', campo: 'Endereco.bairro' },
        { label: 'CEP', campo: 'Endereco.cep' },
        { label: 'Município', campo: 'Endereco.Municipio.nome' },
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