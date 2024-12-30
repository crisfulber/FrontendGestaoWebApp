import { Component, ViewChild, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { MainComponent } from "./shared/main/main.component";
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule, SidebarComponent, NavbarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  @ViewChild(SidebarComponent) sidebarComponent!: SidebarComponent;

  constructor(private primeng: PrimeNG) { }

  ngOnInit() {
    this.primeng.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };
  }

  onToggleSidebar() {
    this.sidebarComponent.toggleSidebar();
  }
}
