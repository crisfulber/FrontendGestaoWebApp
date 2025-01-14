import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterModule,
    CommonModule,
    ToolbarModule,
    ImageModule,
    ButtonModule,
    MenubarModule,
    AvatarModule,
    BadgeModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];

  constructor(
    private navigation: Router
  ) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Início', icon: 'pi pi-home', routerLink: '/dashboard'
      },
      {
        label: 'Lançamentos', icon: 'pi pi-file-edit',
        items: [
          { label: 'Bonificação', icon: 'pi pi-wallet', routerLink: '/bonificacao' },
          { label: 'Horas Extras', icon: 'pi pi-clock', routerLink: '/horasextras' },
          { label: 'Horas Faltas', icon: 'pi pi-clock', routerLink: '/horasfaltas' },
          { label: 'Adiantamentos', icon: 'pi pi-credit-card', routerLink: '/adiantamento' },
          { label: 'Outros Acréscimos', icon: 'pi pi-money-bill', routerLink: '/outrosacrescimos' },
          { label: 'Outros Descontos', icon: 'pi pi-money-bill', routerLink: '/outrosdescontos' }
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
          { label: 'Funções', icon: 'pi pi-id-card', routerLink: '/funcaoempresa' },
          { label: 'Salário Vigente', icon: 'pi pi-wallet', routerLink: '/salariovigente' },
          { label: 'Período', icon: 'pi pi-calendar', routerLink: '/periodo' },
          { label: 'Escalas', icon: 'pi pi-clock', routerLink: '/escala' },
        ]
      }
    ];
  }

  navigateTo(route: string) {
    if (route == undefined)
      return;
    this.navigation.navigate([route]);
  }
}
