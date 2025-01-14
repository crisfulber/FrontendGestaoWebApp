import { Unidade } from "./unidade.model";

export interface FuncaoEmpresa {
  idfuncaoempresa: number;
  nome: string;
  unidade_idunidade: number;
  Unidade?: Unidade;
}