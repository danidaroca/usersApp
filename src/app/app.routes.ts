import { Routes } from '@angular/router';

export const routes: Routes = [

  
  // 👉 AÑADE ESTE NUEVO BLOQUE PARA TU PÁGINA:
  {
    path: 'users',
    loadComponent: () => import('./pages/users/users.page').then(m => m.UsersPage)
  }
];
