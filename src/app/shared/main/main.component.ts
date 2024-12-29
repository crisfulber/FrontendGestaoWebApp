import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-main',
    imports: [
        RouterModule,
        CommonModule
    ],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor() { }

}
