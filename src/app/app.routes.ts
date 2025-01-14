import { Routes } from '@angular/router';

export const routes: Routes = [
      { path: 'dashboard', loadComponent: () => import('./shared/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'adiantamento', loadComponent: () => import('./features/adiantamento/adiantamento.component').then(m => m.AdiantamentoComponent) },
      { path: 'bonificacao', loadComponent: () => import('./features/bonificacao/bonificacao.component').then(m => m.BonificacaoComponent) },
      { path: 'colaborador', loadComponent: () => import('./features/colaborador/colaborador.component').then(m => m.ColaboradorComponent) },
      { path: 'contato', loadComponent: () => import('./features/contato/contato.component').then(m => m.ContatoComponent) },
      { path: 'cpf', loadComponent: () => import('./features/cpf/cpf.component').then(m => m.CpfComponent) },
      { path: 'ctps', loadComponent: () => import('./features/ctps/ctps.component').then(m => m.CtpsComponent) },
      { path: 'decimoterceiro', loadComponent: () => import('./features/decimoterceiro/decimoterceiro.component').then(m => m.DecimoterceiroComponent) },
      { path: 'dependentes', loadComponent: () => import('./features/dependentes/dependentes.component').then(m => m.DependentesComponent) },
      { path: 'empresa', loadComponent: () => import('./features/empresa/empresa.component').then(m => m.EmpresaComponent) },
      { path: 'endereco', loadComponent: () => import('./features/endereco/endereco.component').then(m => m.EnderecoComponent) },
      { path: 'escala', loadComponent: () => import('./features/escala/escala.component').then(m => m.EscalaComponent) },
      { path: 'escolaridade', loadComponent: () => import('./features/escolaridade/escolaridade.component').then(m => m.EscolaridadeComponent) },
      { path: 'estado', loadComponent: () => import('./features/estado/estado.component').then(m => m.EstadoComponent) },
      { path: 'estadocivil', loadComponent: () => import('./features/estadocivil/estadocivil.component').then(m => m.EstadocivilComponent) },
      { path: 'ferias', loadComponent: () => import('./features/ferias/ferias.component').then(m => m.FeriasComponent) },
      { path: 'funcaoempresa', loadComponent: () => import('./features/funcaoempresa/funcaoempresa.component').then(m => m.FuncaoempresaComponent) },
      { path: 'periodo', loadComponent: () => import('./features/periodo/periodo.component').then(m => m.PeriodoComponent) },
      { path: 'historicofuncao', loadComponent: () => import('./features/historicofuncao/historicofuncao.component').then(m => m.HistoricofuncaoComponent) },
      { path: 'historicosalario', loadComponent: () => import('./features/historicosalario/historicosalario.component').then(m => m.HistoricosalarioComponent) },
      { path: 'horasextras', loadComponent: () => import('./features/horasextras/horasextras.component').then(m => m.HorasextrasComponent) },
      { path: 'horasfaltas', loadComponent: () => import('./features/horasfaltas/horasfaltas.component').then(m => m.HorasfaltasComponent) },
      { path: 'municipio', loadComponent: () => import('./features/municipio/municipio.component').then(m => m.MunicipioComponent) },
      { path: 'nacionalidade', loadComponent: () => import('./features/nacionalidade/nacionalidade.component').then(m => m.NacionalidadeComponent) },
      { path: 'outrosacrescimos', loadComponent: () => import('./features/outrosacrescimos/outrosacrescimos.component').then(m => m.OutrosacrescimosComponent) },
      { path: 'outrosdescontos', loadComponent: () => import('./features/outrosdescontos/outrosdescontos.component').then(m => m.OutrosdescontosComponent) },
      { path: 'pagamento', loadComponent: () => import('./features/pagamento/pagamento.component').then(m => m.PagamentoComponent) },
      { path: 'periodo', loadComponent: () => import('./features/periodo/periodo.component').then(m => m.PeriodoComponent) },
      { path: 'rescisao', loadComponent: () => import('./features/rescisao/rescisao.component').then(m => m.RescisaoComponent) },
      { path: 'rg', loadComponent: () => import('./features/rg/rg.component').then(m => m.RgComponent) },
      { path: 'salariovigente', loadComponent: () => import('./features/salariovigente/salariovigente.component').then(m => m.SalarioVigenteComponent) },
      { path: 'setores', loadComponent: () => import('./features/setores/setores.component').then(m => m.SetoresComponent) },
      { path: 'unidade', loadComponent: () => import('./features/unidade/unidade.component').then(m => m.UnidadeComponent) },

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