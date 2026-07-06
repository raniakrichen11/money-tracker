import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MatIconModule,
    MatButtonModule
  ],
  templateUrl: './topbar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './topbar.scss'
})
export class Topbar {}