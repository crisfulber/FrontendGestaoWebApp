import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./shared/dashboard/dashboard.component').then(m => m.DashboardComponent) }, 
  { path: 'setores', loadComponent: () => import('./features/setores/setores.component').then(m => m.SetoresComponent) }, 
  { path: 'estado', loadComponent: () => import('./features/estado/estado.component').then(m => m.EstadoComponent) }, 
  { path: 'periodo', loadComponent: () => import('./features/periodo/periodo.component').then(m => m.PeriodoComponent) }, 
  { path: 'colaborador', loadComponent: () => import('./features/colaborador/colaborador.component').then(m => m.ColaboradorComponent) }, 
  { path: 'salariovigente', loadComponent: () => import('./features/salariovigente/salariovigente.component').then(m => m.SalarioVigenteComponent) },

  // Rotas dinâmicas
  {
    path: ':modelo/novo',
    loadComponent: () => import('./shared/formulario-generico/formulario-generico.component').then(m => m.FormularioGenericoComponent)
  },
  {
    path: ':modelo/editar/:id',
    loadComponent: () => import('./shared/formulario-generico/formulario-generico.component').then(m => m.FormularioGenericoComponent)
  },

  { path: '**', redirectTo: 'dashboard' },
];