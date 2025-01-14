import { Endereco } from "./endereco.model";

export interface Empresa {
  idempresa: number;
  nome: string;
  endereco_idendereco: number;
  Endereco?: Endereco;
}