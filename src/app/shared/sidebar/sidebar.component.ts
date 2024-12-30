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
          { label: 'Bonificação', icon: 'pi pi-wallet', },
          { label: 'Horas Extras/Faltas', icon: 'pi pi-clock', },
          { label: 'Adiantamentos', icon: 'pi pi-credit-card', },
          { label: 'Outros Acrés/Desc.', icon: 'pi pi-money-bill', }
        ]
      },
      {
        label: 'Cálculos', icon: 'pi pi-calculator',
        items: [
          { label: 'Folha de Pagamento', icon: 'pi pi-dollar', },
          { label: 'Férias', icon: 'pi pi-map', },
          { label: 'Décimo Terceiro', icon: 'pi pi-money-bill', },
          { label: 'Rescisão', icon: 'pi pi-user-minus', }
        ]
      },
      {
        label: 'Colaboradores', icon: 'pi pi-user',
        items: [
          { label: 'Cadastro', icon: 'pi pi-user-plus', },
          { label: 'Salário', icon: 'pi pi-wallet', },
          { label: 'Função', icon: 'pi pi-id-card', }
        ]
      },
      {
        label: 'Cadastros Gerais', icon: 'pi pi-plus',
        items: [
          { label: 'Empresas', icon: 'pi pi-building-columns', },
          { label: 'Unidades', icon: 'pi pi-building', },
          { label: 'Setores', icon: 'pi pi-list-check', },
          { label: 'Funções', icon: 'pi pi-id-card', }
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
