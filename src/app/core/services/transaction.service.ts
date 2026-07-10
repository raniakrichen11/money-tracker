import { Injectable, computed, signal } from '@angular/core';
import { Transaction } from '../../shared/models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  readonly transactions = signal<Transaction[]>([
    {
      id: 1,
      title: 'Salary',
      amount: 2500,
      type: 'income',
      category: 'Salary',
      date: new Date()
    },
    {
      id: 2,
      title: 'Rent',
      amount: 800,
      type: 'expense',
      category: 'Housing',
      date: new Date()
    }
  ]);

  readonly editingTransaction = signal<Transaction | null>(null);


  readonly income = computed(() =>
    this.transactions()
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0)
  );

  readonly expenses = computed(() =>
    this.transactions()
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0)
  );

  readonly balance = computed(() =>
    this.income() - this.expenses()
  );

  readonly savings = computed(() => {
    const income = this.income();

    if (income === 0) {
      return 0;
    }

    return Math.round((this.balance() / income) * 100);
  });

  addTransaction(transaction: Omit<Transaction, 'id'>): void {

    const newTransaction: Transaction = {
      id: Date.now(),
      ...transaction
    };

    this.transactions.update(transactions => [
      ...transactions,
      newTransaction
    ]);

  }

  deleteTransaction(id: number): void {

    this.transactions.update(transactions =>
      transactions.filter(transaction => transaction.id !== id)
    );

  }

  updateTransaction(updatedTransaction: Transaction): void {

    this.transactions.update(transactions =>
      transactions.map(transaction =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction
      )
    );

    this.editingTransaction.set(null);
  }

  startEditing(transaction: Transaction): void {
    this.editingTransaction.set(transaction);
  }

  cancelEditing(): void {
    this.editingTransaction.set(null);
  }

}