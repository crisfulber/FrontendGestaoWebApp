import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    imports: [
        RouterModule,
        CommonModule
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isCollapsed = false;

  toggleSidebar(){
    this.isCollapsed = !this.isCollapsed;
  }

  closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.remove('open'); // Remove a classe 'open' para fechar o menu
    }
  }
}
