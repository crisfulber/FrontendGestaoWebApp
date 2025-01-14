import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NestedService {
  constructor(private baseService: BaseService<any>) { }

  getAll(endpoint: string): Observable<any[]> {
    return this.baseService.getAll(endpoint);
  }

  getById(endpoint: string, id: number): Observable<any> {
    return this.baseService.getById(endpoint, id).pipe(
      map(data => {
        console.log('Dados recebidos do baseService:', data);
        const parsedData = this.unparseEmpresaData(data);
        console.log('Dados após aplicar unparseEmpresaData:', parsedData);
        return parsedData;
      })
    );
  }
  
  create(endpoint: string, data: any): Observable<any> {
    if (endpoint === 'empresa') {
      data = this.parseEmpresaData(data);
    }
    return this.baseService.create(endpoint, data);
  }

  update(endpoint: string, id: number, data: any): Observable<any> {
    if (endpoint === 'empresa') {
      data = this.parseEmpresaData(data);
    }
    return this.baseService.update(endpoint, id, data);
  }

  delete(endpoint: string, id: number): Observable<void> {
    return this.baseService.delete(endpoint, id);
  }

  private parseEmpresaData(dados: any): any {
    const payload: any = {};

    for (const key in dados) {
      if (!key.startsWith('endereco.')) {
        payload[key] = dados[key];
      }
    }

    const endObj: any = {};
    for (const key in dados) {
      if (key.startsWith('endereco.')) {
        const subField = key.split('.')[1];
        endObj[subField] = dados[key];
      }
    }
    if (Object.keys(endObj).length > 0) {
      payload.Endereco = endObj;
    }

    return payload;
  }

  private unparseEmpresaData(dados: any): any {
    const payload: any = { ...dados };
  
    if (dados.Endereco) {
      for (const key in dados.Endereco) {
        payload[`endereco.${key}`] = dados.Endereco[key];
      }
      delete payload.Endereco;
    }
  
    return payload;
  }
  
}
