import { Component, ViewChild, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PrimeNG } from 'primeng/config';
import { MainComponent } from './shared/main/main.component';
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule, NavbarComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(
    private primeng: PrimeNG
  ) { }

  ngOnInit() {
    this.primeng.zIndex = {
      modal: 1100,
      overlay: 1000,
      menu: 1000,
      tooltip: 1100
    };
  }
}
