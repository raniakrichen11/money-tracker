import { Routes } from '@angular/router';

import { Dashboard } from './features/dashboard/dashboard';
import { Transactions } from './features/transactions/transactions';
import { Stats } from './features/stats/stats';
import { Settings } from './features/settings/settings';
import { Categories } from './features/categories/categories';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: Dashboard
  },

  {
    path: 'transactions',
    component: Transactions
  },

  {
    path: 'categories',
    component: Categories
  },
 

  {
    path: 'settings',
    component: Settings
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];