import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { TransactionService } from '../../../../core/services/transaction.service';

@Component({
  selector: 'app-transactions',
  imports: [],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions {

  transactionService = inject(TransactionService);

}
