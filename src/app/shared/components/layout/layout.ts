import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';

import { Sidebar } from '../sidebar/sidebar';
import { Topbar } from '../topbar/topbar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    Sidebar,
    Topbar
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {}