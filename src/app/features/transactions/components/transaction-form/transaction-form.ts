import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { TransactionService } from '../../../../core/services/transaction.service';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './transaction-form.html',
  styleUrl: './transaction-form.scss'
})
export class TransactionForm {

  private fb = inject(FormBuilder);

  private transactionService = inject(TransactionService);


  readonly editingTransaction = this.transactionService.editingTransaction;

  readonly categories = [
    'Salary',
    'Housing',
    'Food',
    'Transport',
    'Shopping',
    'Entertainment',
    'Health',
    'Other'
  ];

  readonly form = this.fb.nonNullable.group({
    title: ['', Validators.required],
    amount: [0, [Validators.required, Validators.min(1)]],
    type: ['expense' as 'income' | 'expense', Validators.required],
    category: ['Other', Validators.required],
    date: [new Date(), Validators.required]
  });

  private readonly editEffect = effect(() => {

    const transaction = this.editingTransaction();

    if (transaction) {
      this.form.patchValue({
        title: transaction.title,
        amount: transaction.amount,
        type: transaction.type,
        category: transaction.category,
        date: transaction.date
      });
    }

  });

  saveTransaction(): void {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const editing = this.editingTransaction();

    if (editing) {

      this.transactionService.updateTransaction({
        ...editing,
        ...this.form.getRawValue()
      });

    } else {

      this.transactionService.addTransaction(
        this.form.getRawValue()
      );

    }

    this.resetForm();

  }

  resetForm(): void {

    this.form.reset({
      title: '',
      amount: 0,
      type: 'expense',
      category: 'Other',
      date: new Date()
    });

    this.transactionService.cancelEditing();

  }


}