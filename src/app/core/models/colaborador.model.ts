export interface Colaborador {
    idcolaborador: number;
    nome: string;
    dtinicio: Date;
    ativo: boolean;
    valetransporte: boolean;
    adiantamento: boolean;
    funcaoempresa_idfuncaoempresa: number;
    escala_idescala: number;
    rg_idrg: number;
    ctps_idctps: number;
    cpf_idcpf: number;
    contato_idcontato: number;
    nacionalidade_idnacionalidade: number;
    escolaridade_idescolaridade: number;
    dependentes_iddependentes: number;
    estadocivil_idestadocivil: number;
    endereco_idendereco: number;
  }