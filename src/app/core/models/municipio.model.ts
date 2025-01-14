import { Estado } from './estado.model'; 

export interface Municipio {
  idmunicipio: number;
  nome: string;
  estado_idestado: number; 
  Estado?: Estado;         
}