import { Component, OnInit } from '@angular/core';
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
    ButtonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  isDarkMode = false;

  constructor(
    public sidebarService: SidebarService
  ) {}

  ngOnInit(): void { 
    const savedTheme = localStorage.getItem('theme') || 'light'; 
    this.isDarkMode = savedTheme === 'dark'; 
    this.applyTheme(); 
  }

  toggleTheme(): void { 
    this.isDarkMode = !this.isDarkMode; 
    this.applyTheme(); 
  }

  applyTheme(): void { 
    const themeMode = this.isDarkMode ? 'dark' : 'light'; 
    document.documentElement.setAttribute('data-theme', themeMode); 
    localStorage.setItem('theme', themeMode); 
  }

  onToggleSidebar() {
    this.sidebarService.toggle();
  }
}
