import { Component, ChangeDetectionStrategy } from '@angular/core';
import { inject } from '@angular/core';
import { TransactionService } from '../../../../core/services/transaction.service';

@Component({
  selector: 'app-transactions',
  imports: [],
  templateUrl: './transactions.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './transactions.scss',
})
export class Transactions {

  transactionService = inject(TransactionService);

}
