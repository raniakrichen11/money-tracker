import { Component } from '@angular/core';
import { TransactionForm } from './components/transaction-form/transaction-form';
import { TransactionTable } from './components/transaction-table/transaction-table';

@Component({
  selector: 'app-transactions',
  imports: [TransactionForm,TransactionTable],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions {

}
