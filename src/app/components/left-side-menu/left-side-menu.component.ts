import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-left-side-menu',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './left-side-menu.component.html',
  styleUrl: './left-side-menu.component.scss',
})
export class LeftSideMenuComponent {}
