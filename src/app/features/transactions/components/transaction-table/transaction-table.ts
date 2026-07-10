import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { TransactionService } from '../../../../core/services/transaction.service';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Transaction } from '../../../../shared/models/transaction.model';
@Component({
  selector: 'app-transaction-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CurrencyPipe,
    DatePipe,
    MatChipsModule,
    MatTooltipModule
  ],
  templateUrl: './transaction-table.html',
  styleUrl: './transaction-table.scss'
})
export class TransactionTable {

  private transactionService = inject(TransactionService);

  readonly transactions = this.transactionService.transactions;

  readonly displayedColumns = [
    'title',
    'amount',
    'type',
    'category',
    'date',
    'actions'
  ];

  deleteTransaction(id: number): void {
    this.transactionService.deleteTransaction(id);
  }

  editTransaction(transaction: Transaction): void {
    this.transactionService.startEditing(transaction);
  }

}