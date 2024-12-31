import { Estado } from './estado.model'; 

export interface Municipio {
  idmunicipio: number;
  nome: string;
  estado_idestado: number; // ID do estado
  Estado?: Estado;         // Objeto relacionado de Estado
}
