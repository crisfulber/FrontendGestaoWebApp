import { Empresa } from "./empresa.model";
import { Endereco } from "./endereco.model";

export interface Unidade {
  idunidade: number;
  nome: string;
  empresa_idempresa: number;
  Empresa?: Empresa;
  endereco_idendereco: number;
  Endereco?: Endereco;
}