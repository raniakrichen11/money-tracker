import { Routes } from '@angular/router';

import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { Transactions } from './features/transactions/pages/transactions/transactions';
import { Categories } from './features/categories/pages/categories/categories';
import { Settings } from './features/settings/pages/settings/settings';

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