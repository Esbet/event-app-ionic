import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'events/:id',
        loadComponent: () => import('./features/home/event/event.page').then( m => m.EventPage)
      },
    ],
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () => import('./features/welcome/welcome.page').then( m => m.WelcomePage)
  },
];