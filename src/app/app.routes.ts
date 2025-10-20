import { Routes } from '@angular/router'; 

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: 'user',
    loadComponent: () => import('./Page/user/user.page').then( m => m.UserPage)
  },
  {
    path: 'yo',
    loadComponent: () => import('./Page/yo/yo.page').then( m => m.YoPage)
  },
];
