import { Routes } from '@angular/router';
import { MainComponent } from './shared/main/main.component';

export const routes: Routes = [
      { path: 'dashboard', loadComponent: () => import('./shared/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'adiantamento', loadComponent: () => import('./features/adiantamento/adiantamento.component').then(m => m.AdiantamentoComponent) },
      { path: 'bonificacao', loadComponent: () => import('./features/bonificacao/bonificacao.component').then(m => m.BonificacaoComponent) },
      { path: 'colaborador', loadComponent: () => import('./features/colaborador/colaborador.component').then(m => m.ColaboradorComponent) },
      { path: 'decimoterceiro', loadComponent: () => import('./features/decimoterceiro/decimoterceiro.component').then(m => m.DecimoterceiroComponent) },
      { path: 'empresa', loadComponent: () => import('./features/empresa/empresa.component').then(m => m.EmpresaComponent) },
      { path: 'endereco', loadComponent: () => import('./features/endereco/endereco.component').then(m => m.EnderecoComponent) },
      { path: 'estado', loadComponent: () => import('./features/estado/estado.component').then(m => m.EstadoComponent) },
      { path: 'ferias', loadComponent: () => import('./features/ferias/ferias.component').then(m => m.FeriasComponent) },
      { path: 'periodo', loadComponent: () => import('./features/periodo/periodo.component').then(m => m.PeriodoComponent) },
      { path: 'funcao', loadComponent: () => import('./features/funcao/funcao.component').then(m => m.FuncaoComponent) },
      { path: 'historicofuncao', loadComponent: () => import('./features/historicofuncao/historicofuncao.component').then(m => m.HistoricofuncaoComponent) },
      { path: 'historicosalario', loadComponent: () => import('./features/historicosalario/historicosalario.component').then(m => m.HistoricosalarioComponent) },
      { path: 'horasextrasfaltas', loadComponent: () => import('./features/horasextrasfaltas/horasextrasfaltas.component').then(m => m.HorasextrasfaltasComponent) },
      { path: 'municipio', loadComponent: () => import('./features/municipio/municipio.component').then(m => m.MunicipioComponent) },
      { path: 'outrosacresdesc', loadComponent: () => import('./features/outrosacresdesc/outrosacresdesc.component').then(m => m.OutrosacresdescComponent) },
      { path: 'pagamento', loadComponent: () => import('./features/pagamento/pagamento.component').then(m => m.PagamentoComponent) },
      { path: 'periodo', loadComponent: () => import('./features/periodo/periodo.component').then(m => m.PeriodoComponent) },
      { path: 'rescisao', loadComponent: () => import('./features/rescisao/rescisao.component').then(m => m.RescisaoComponent) },
      { path: 'salariovigente', loadComponent: () => import('./features/salariovigente/salariovigente.component').then(m => m.SalarioVigenteComponent) },
      { path: 'setores', loadComponent: () => import('./features/setores/setores.component').then(m => m.SetoresComponent) },
      { path: 'unidade', loadComponent: () => import('./features/unidade/unidade.component').then(m => m.UnidadeComponent) },

  // Rotas dinâmicas
  {
    path: ':modelo/novo',
    loadComponent: () => import('./shared/formulario-generico/formulario-generico.component').then(m => m.FormularioGenericoComponent)
  },
  {
    path: ':modelo/editar/:id',
    loadComponent: () => import('./shared/formulario-generico/formulario-generico.component').then(m => m.FormularioGenericoComponent)
  },
  
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: '**', redirectTo: 'dashboard' },
];