import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { SidebarService } from '../../core/services/sidebar.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterModule,
    CommonModule,
    ToolbarModule,
    ImageModule,
    ButtonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public sidebarService: SidebarService) {}

  onToggleSidebar() {
    this.sidebarService.toggle();
  }
}
