import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { Ripple, RippleModule } from 'primeng/ripple';
import { SidebarService } from '../../core/services/sidebar.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterModule,
    CommonModule,
    DrawerModule,
    ButtonModule,
    PanelMenuModule,
    BadgeModule,
    RippleModule,
    Ripple,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Lançamentos', icon: 'pi pi-file-edit',
        items: [
          { label: 'Bonificação', icon: 'pi pi-wallet', routerLink: '/bonificacao' },
          { label: 'Horas Extras/Faltas', icon: 'pi pi-clock', routerLink: '/horasextrasfaltas' },
          { label: 'Adiantamentos', icon: 'pi pi-credit-card', routerLink: '/adiantamento' },
          { label: 'Outros Acrés/Desc.', icon: 'pi pi-money-bill', routerLink: '/outrosacresdesc' }
        ]
      },
      {
        label: 'Cálculos', icon: 'pi pi-calculator',
        items: [
          { label: 'Folha de Pagamento', icon: 'pi pi-dollar', routerLink: '/pagamento' },
          { label: 'Férias', icon: 'pi pi-map', routerLink: '/ferias' },
          { label: 'Décimo Terceiro', icon: 'pi pi-money-bill', routerLink: '/decimoterceiro' },
          { label: 'Rescisão', icon: 'pi pi-user-minus', routerLink: '/rescisao' }
        ]
      },
      {
        label: 'Colaboradores', icon: 'pi pi-user',
        items: [
          { label: 'Cadastro', icon: 'pi pi-user-plus', routerLink: '/colaborador' },
          { label: 'Salário', icon: 'pi pi-wallet', routerLink: '/historicosalario' },
          { label: 'Função', icon: 'pi pi-id-card', routerLink: '/historicofuncao' }
        ]
      },
      {
        label: 'Cadastros Gerais', icon: 'pi pi-plus',
        items: [
          { label: 'Empresas', icon: 'pi pi-building-columns', routerLink: '/empresa' },
          { label: 'Unidades', icon: 'pi pi-building', routerLink: '/unidade' },
          { label: 'Setores', icon: 'pi pi-list-check', routerLink: '/setores' },
          { label: 'Funções', icon: 'pi pi-id-card', routerLink: '/funcoes' },
          { label: 'Salário Vigente', icon: 'pi pi-wallet', routerLink: '/salariovigente' },
          { label: 'Período', icon: 'pi pi-calendar', routerLink: '/periodo' },
        ]
      }
    ];
  }

  constructor(public sidebarService: SidebarService) { }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  closeSidebar() {
    this.sidebarService.visible = false;
  }
}
