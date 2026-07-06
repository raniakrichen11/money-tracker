import { Injectable, signal } from '@angular/core';

import { Transaction } from '../../shared/models/transaction.model';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactions = signal<Transaction[]>([
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

}