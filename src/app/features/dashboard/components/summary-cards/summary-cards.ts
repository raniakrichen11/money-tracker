import { Component, computed, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { TransactionService } from '../../../../core/services/transaction.service';

@Component({
  selector: 'app-summary-cards',
  standalone: true,
  imports: [
    MatCardModule,
    CurrencyPipe
  ],
  templateUrl: './summary-cards.html',
  styleUrl: './summary-cards.scss'
})
export class SummaryCards {

  private transactionService = inject(TransactionService);

  readonly balance = this.transactionService.balance;
  readonly income = this.transactionService.income;
  readonly expenses = this.transactionService.expenses;
  readonly savings = this.transactionService.savings;

}