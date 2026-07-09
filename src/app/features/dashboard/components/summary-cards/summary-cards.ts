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

  transactions = this.transactionService.transactions;

  savings = computed(() => {
  const income = this.income();

  if (income === 0) {
    return 0;
  }

  return Math.round((this.balance() / income) * 100);
});


  income = computed(() =>
    this.transactions()
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0)
  );

  expenses = computed(() =>
    this.transactions()
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0)
  );

  balance = computed(() =>
    this.income() - this.expenses()
  );

}