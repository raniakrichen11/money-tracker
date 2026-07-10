import { Component } from '@angular/core';
import { SummaryCards } from './components/summary-cards/summary-cards';
import { RecentTransactions } from './components/recent-transactions/recent-transactions';

@Component({
  selector: 'app-dashboard',
  imports: [SummaryCards, RecentTransactions],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
