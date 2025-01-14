import { Unidade } from "./unidade.model";

export interface Setores {
  idsetores: number;
  nome: string;
  descricao: string;
  unidade_idunidade: number;
  Unidade?: Unidade;
}