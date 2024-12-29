import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { MainComponent } from "./shared/main/main.component";


@Component({
    selector: 'app-root',
    imports: [RouterModule, CommonModule, SidebarComponent, NavbarComponent, MainComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild(SidebarComponent) sidebarComponent!: SidebarComponent;

  onToggleSidebar(){
    this.sidebarComponent.toggleSidebar();
  }
}
